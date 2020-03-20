# 点名册项目

## 项目描述

  此页面主要实现一个点名册功能，用户进入页面后==》看到一个花名册列表和一个开始按钮和一组条件选项，用户勾选相应的条件选项后==》点击开始按钮==》根据条件开始随机选中符合条件的名称/开始按钮变为停止按钮==>用户点击停止按钮，停在最后选中的一组数据上。

## 需求分析
### 功能需求
1. 随机点名功能
2. 指定条件点名功能
3. 随机-行/列选取功能
### 样式需求
1. 页面以表格加按钮的方式呈现
2. 名单表格居中
3. 按钮居于表格左侧
4. 按钮按上下结构排布==》开始按钮+结束按钮+条件复选按钮


## 样式
模板：
![模板](images\模板.png)
1.版心：1040px
2.居中显示
3.背景色：ECECEA
4.顶部图片置顶
5.顶部图片 宽：1040 高360
5.图片与内容之间间距50px


## 逻辑结构
1.css结构

## 问题总结
  1. 获取到的元素如果在后续的操作过程中被删除了的话，后续对该元素的操作无法被显示（重新加入页面中是否可行==>待验证）
  2. 在操作过程中出现了一个很奇怪的bug=》因为在操作过程中会有一个元素被删除，但是这个元素在其他函数中调用，所以无法在在开始的时候就获取，于是我决定在每次开始执行事件处理函数时动态获取该元素==》结果动态获取到的元素无法在后续函数中使用.

