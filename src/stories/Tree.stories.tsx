import * as React from "react";
import { Tree } from "../components/Tree";
import { Option } from "../components/Tree/interface";
import story from "../../.storybook/story";

import { action } from "@storybook/addon-actions";
import WithKnobs from "../../.storybook/WithKnobs";


export const options: Option[] = [
  {
    value: 'tag1',
    label: '标签1',
    showType: 'checkbox',
  },
  {
    value: 'tag2',
    label: '标签2',
    showType: 'checkbox',
  },
  {
    value: 'folder1',
    label: '文件夹1',
    children: [
      {
        value: 'folder1 - tag1',
        label: '文件夹1 - 标签1',
        showType: 'radio',
      },
      {
        value: 'folder1 - tag2',
        label: '文件夹1 - 标签2',
        showType: 'radio',
      },
      {
        value: 'folder1 - folder1',
        label: '文件夹1 - 文件夹1',
        children: [
          {
            value: 'folder1 - folder1 - tag1',
            label: '文件夹1 - 文件夹1 - 标签1',
            showType: 'checkbox',
          },
          {
            value: 'folder1 - folder1 - tag2',
            label: '文件夹1 - 文件夹1 - 标签2',
            showType: 'checkbox',
          },
        ]
      },
      {
        value: 'folder1 - folder2',
        label: '文件夹1 - 文件夹2',
        children: [
          {
            value: 'folder1 - folder2 - red',
            label: '文件夹1 - 文件夹2 - 红色',
            showType: 'checkbox',
          },
          {
            value: 'folder1 - folder2 - green',
            label: '文件夹1 - 文件夹2 - 绿色',
            showType: 'checkbox',
          },
          {
            value: 'folder1 - folder2 - tag1',
            label: '文件夹1 - 文件夹2 - 标签1',
            showType: 'checkbox',
          },
          {
            value: 'folder1 - folder2 - tag2',
            label: '文件夹1 - 文件夹2 - 标签2',
            showType: 'checkbox',
          },
        ]
      }
    ]
  },
  {
    value: 'folder2',
    label: '文件夹2',
    children: [
      {
        value: 'folder2 - tag1',
        label: '文件夹2 - 标签1',
        showType: 'radio',
      },
      {
        value: 'folder2 - tag2',
        label: '文件夹2 - 标签2',
        showType: 'radio',
      },
      {
        value: 'folder2 - folder1',
        label: '文件夹2 - 文件夹1',
        children: [
          {
            value: 'folder2 - folder1 - tag1',
            label: '文件夹2 - 文件夹1 - 标签1',
            showType: 'checkbox',
          },
          {
            value: 'folder2 - folder1 - tag2',
            label: '文件夹2 - 文件夹1 - 标签2',
            showType: 'checkbox',
          },
          {
            value: 'folder2 - folder1 - red',
            label: '文件夹2 - 文件夹1 - 红色',
            showType: 'checkbox',
          },
        ]
      }
    ]
  }
];


const TreeWithKnobs = WithKnobs(Tree);
story("Tree")
.add("default", () => (
  <TreeWithKnobs value={[]} options={options} onChange={action('Tree - onChange')}/>
))
.add("value", () => (
  <TreeWithKnobs value={['tag1']} options={options} onChange={action('Tree - onChange')}/>
))
;