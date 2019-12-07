import React from "react";
import { Checkbox } from "./../Checkbox";
import { Radio } from "./../Radio";
import { TreeProps, Option, OutputItem } from "./interface";
import "./style.scss";

const TOP_VALUE = 'TOP_VALUE'

const getCheckboxRadioData = (parentValue = TOP_VALUE, optionArr: Option[], result = {}) => {
  optionArr.forEach(item => {
    if(item.children){
      // 文件夹
      getCheckboxRadioData(item.value, item.children, result);
    }else {
      const tempData = result[parentValue];
      if(tempData){
        tempData[item.showType].push(item.value)
      }else {
        result[parentValue] = {
          'checkbox': [],
          'radio': [],
        };

        result[parentValue][item.showType].push(item.value);
      }
    }
  });
  return result;
}

const getAllFolderKey = (optionArr: Option[], result: string[] = []): string[] => {
    optionArr.forEach((item) => {
      if(item.children){
        result.push(item.value);
        getAllFolderKey(item.children, result);
      }
    })
    return result;
}

const hasIncludesKeywords = (keywords: string, optionArr: Option[]): boolean => {
  return optionArr.some(item => {
    if(item.children){
      return hasIncludesKeywords(keywords, item.children);
    }else {
      return item.label.includes(keywords);
    }
  })
}

const optionForEach = (optionArr: Option[], cb?: (data: OutputItem) => void) => {
  optionArr.forEach((item) => {
    if(item.children){
      optionForEach(item.children, cb);
    }else {
      cb && cb({ label: item.label, value: item.value });
    }
  })
}

const getOptionItemsByValue = (valueArr: string[], optionArr: Option[]) => {
  const resultArr: OutputItem[] = [];
  optionForEach(optionArr, (data) => {
    const isIncludes = valueArr.includes(data.value);
    if(isIncludes){
      resultArr.push(data);
    }
  })
  return resultArr;
}

export const Tree: React.FC<TreeProps> = ({ value = [], options, onChange, expandAll = false }) => {

  const [ inputText, setInputText ] = React.useState('');

  const normaOpenValue = React.useMemo(() => {
    return expandAll ? getAllFolderKey(options) : [];
  }, [expandAll, options]);

  const [openValue, setOpenValue] = React.useState<string[]>(normaOpenValue);

  const folderRelation = React.useMemo(() => {
    return getCheckboxRadioData(TOP_VALUE, options);
  }, [ options ]);

  const showHideChildren = React.useCallback(
    (optionValue, isShow) => {
      const currentIsShow = openValue.includes(optionValue);
      if (isShow) {
        currentIsShow || setOpenValue([...openValue, optionValue]);
      } else {
        currentIsShow && setOpenValue(openValue.filter(v => v !== optionValue));
      }
    },
    [openValue, setOpenValue]
  );

  const onSelectboxChange = React.useCallback((checked: boolean, itemValue: string, parentValue: string, showType: Option['showType']) => {
    let newValue: string[] = [];
    if(checked){
      if(showType === 'checkbox'){
        newValue = [ ...value, itemValue ];
      }else {
        newValue = [ ...value.filter(v => !folderRelation[parentValue]['radio'].includes(v)), itemValue];
      }
    }else {
      newValue = value.filter(v => v !== itemValue);
    }

    onChange && onChange(getOptionItemsByValue(newValue, options));
  }, [ value, options, folderRelation ]);

  const renderSelectBoxGroup = React.useCallback((parentValue: string, optionItme: Omit<Option, "children">) => {
    let showType = optionItme && optionItme.showType;
    if (!showType) {
      return;
    }

    if(!optionItme.label.includes(inputText)){
      return;
    }

    const Selectbox = showType === "checkbox" ? Checkbox : Radio;

    return (
      <div key={optionItme.value} className="option-item">
        <Selectbox checked={value.includes(optionItme.value)} layout="column" onChange={(checked) => onSelectboxChange(checked, optionItme.value, parentValue, showType as Option['showType'])}>
          {optionItme.label}
        </Selectbox>
      </div>
    );
  }, [value, inputText]);

  const renderFolder = React.useCallback((optionItem: Omit<Option, "showType">) => {
    const isShowChildren = openValue.includes(optionItem.value);
    const isShow = hasIncludesKeywords(inputText, optionItem.children!);
    if(!isShow){
      return;
    }

    return (
      <div key={optionItem.value} className="option-folder-item">
        <div
          className="option-folder-title"
          onClick={() => showHideChildren(optionItem.value, !isShowChildren)}
        >
          {isShowChildren ? "├" : "└"} {optionItem.label}
        </div>
        {isShowChildren ? (
          <div style={{ paddingLeft: 20 }} className="option-folder-content">
            {optionItem.children!.map(item => {
              return item.children
                ? renderFolder(item)
                : renderSelectBoxGroup(optionItem.value, item);
            })}
          </div>
        ) : null}
      </div>
    );
  }, [value, openValue, inputText,]);

  return (
    <div className="rc-tree">
      <input type="text" value={inputText} onChange={(event) => setInputText(event.target.value)}/>
      <br/>
      <br/>
      {options.map(v => {
        return v.children ? renderFolder(v) : renderSelectBoxGroup(TOP_VALUE, v);
      })}
    </div>
  );
};
