type ShowType = "checkbox" | "radio";

export interface Option {
  value: string;
  label: string;
  showType?: ShowType;
  children?: Option[];
}

export interface TreeProps {
  options: Option[];
  value?: string[];
  expandAll?: boolean;
  onChange?: (value: OutputItem[]) => void;
}

export type OutputItem = Pick<Option, 'label' | 'value'>;
