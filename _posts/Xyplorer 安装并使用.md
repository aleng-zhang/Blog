---
layout: post
title: Xyplorer 安装并使用
date: 2020-12-10
tags: [教程]
---

* TOC
{:toc}

---

### 下载

[官网](https://www.xyplorer.com/) / [备用](https://www.filepuma.com/download/xyplorer_21.30-27263/)

---

### 设置语言为中文

`Help` ---> `Select Language...` ---> `简体中文`

>或  下载[语言包](https://www.xyplorer.com/languages.php)，`Help` ---> `Select Local Language File...` ---> 选择所下载的语言包

-----

### 注册

`Help` ---> `Update Registration Details...`
>注册码：
>
>用户名：`www.dayanzai.me`
>
>序列号：`xy01-ST00-ffc0-b1f0-7036-0a72-sh11-0923`

------

### 设为默认文件管理器

打开注册表，找到`HKEY_CLASSES_ROOT\Folder\shell`
其中有六项，每一项都有一个子项“command”

`open`下的子项`command`的默认值是`%SystemRoot%\Explorer.exe`，它决定了打开回收站、我的电脑、控制面板、设备和打印机、用户名文件夹的文件管理器。只能用windows自带的资源管理器打开，不能修改，否则上述程序无法打开。

`opennewprocess`下的子项`command`的默认值决定了打开桌面文件夹所使用的程序。可替换成任何文件管理器，注意写绝对路径，后面加参数%1。

`opennewwindow`下的子项`command`的默认值决定了快捷键`Win+E`对应的程序。可替换成任何文件管理器。注意绝对路径。

>以Xyplorer为例：
>
>opennewprocess\command："D:\Program Files (x86)\XYplorer\XYplorer.exe %1"
>
>opennewwindow\command："D:\Program Files (x86)\XYplorer\XYplorer.exe"

最后删掉`DelegateExecute`项，键值是`{11dbb47c-a525-400b-9e80-a54615a090c0}`。