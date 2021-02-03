---
layout: post
title: Emby Theater 破解
date: 2021-02-03
tags: [教程]
---

* TOC
{:toc}

---

本文来源： [Emby Theater 破解白嫖](https://neko.re/archives/225.html)

---

### 下载

1. [Windows](https://github.com/MediaBrowser/emby-theater-windows/releases/)

2. [Linux](https://github.com/MediaBrowser/emby-theater-electron/releases/)

### 破解方法

删除 Emby Theater 安装目录下的 Emby-Theater\data 目录

找到 main.js

Windows: `emby-theater-x64\electronapp\main.js`

Linux: `/usr/lib/emby-theater/resources/app/main.js`

使用编辑器（如 visual studio code）打开 `main.js`

搜索找到

```
    function getAppBaseUrl() {
        var url = 'https://tv.emby.media';
        //url = 'http://localhost:8088';
        return url;
    }
```

修改为

```
    function getAppBaseUrl() {
        var url = 'https://tv.emby.neko.re';
        //url = 'http://localhost:8088';
        return url;
    }
```

保存即可

### 注意

如果你的 Emby Theater 更新了，你需要重新执行上述步骤。