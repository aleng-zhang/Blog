---
layout: post
title: Pyenv使用教程
date: 2017-7-08
tags: [教程]
---

### 安装:
~~~bash
sudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev xz-utils tk-dev
sudo curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
~~~

### 升级:
~~~bash
pyenv update
~~~

### 卸载
~~~bash
rm -fr ~/.pyenv
#在 .bashrc(或.zshrc) 删除下面三行
export PATH="~/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
~~~

### 使用
+ `pyenv versions` -- 查看当前 pyenv 可检测到的所有版本，处于激活状态的版本前以 * 标示。
~~~bash
 $ pyenv versions
 2.5.6
 2.6.8
*2.7.6 (set by /home/yyuu/.pyenv/version)
 3.3.3
 jython-2.5.3
 pypy-2.2.1
~~~

+ `pyenv version` --查看当前处于激活状态的版本，括号中内容表示这个版本是由哪条途径激活的(global、local、shell)
~~~bash
$ pyenv version
2.7.6 (set by /home/yyuu/.pyenv/version)
~~~

+ `pyenv install -l` --列出所有可安装版本
~~~bash
$ pyenv install -l
Available versions: #太长, 用...隐去了一部分
  2.1.3
  ...
  2.7.13
  3.0.1
  ...
  3.7-dev
  anaconda-1.4.0
  ...
  anaconda3-4.4.0
  ironpython-dev
  ...
  ironpython-2.7.7
  jython-dev
  ...
  jython-2.7.1b3
  micropython-dev
  miniconda-latest
  ...
  miniconda3-4.3.11
  pypy-c-jit-latest
  pypy-c-nojit-latest
  pypy-dev
  pypy-stm-2.3
  pypy-portable-2.3.1
  ...
  pypy-portable-2.5.1
  pypy-stm-2.5.1
  pypy-portable-2.6
  ...
  pypy-portable-5.7.0
  pypy-1.5-src
  ...
  pypy3.5-5.8.0
  pyston-0.5.1
  pyston-0.6.0
  pyston-0.6.1
  stackless-dev
  stackless-2.7-dev
  ...
  stackless-3.4.2
~~~

+ `pyenv install` --使用 python-build（一个插件） 安装一个 Python 版本，到 `$PYENV_ROOT/versions` 路径下
~~~bash
$ pyenv install -v 2.7.3
~~~

+ `pyenv uninstall` --卸载一个版本
~~~bash
$ pyenv uninstall 2.7.3
~~~

+ `pyenv rehash` --为所有已安装的可执行文件(如:~/.pyenv/versions/\*/bin/\*)创建 shims，因此，每当你增删了 Python 版本或带有可执行文件的包（如 pip）以后，都应该执行一次本命令
~~~bash
$ pyenv install 2.7.3
$ pyenv rehash
~~~

+ `pyenv global` --设置全局的 Python 版本
~~~bash
$ pyenv global 3.4.0
~~~

+ `pyenv local` --设置面向程序的本地版本
~~~bash
$ pyenv local 2.7.3
~~~

+ `pyenv shell` --设置面向 shell 的 Python 版本
~~~bash
$ pyenv shell pypy-2.2.1    #优先级 shell > local > global
$ pyenv shell --unset    #--unset 参数可以用于取消当前 shell 设定的版本。
~~~

### 参考:
+ [Pyenv Commands](https://github.com/pyenv/pyenv/blob/master/COMMANDS.md "Pyenv Commands")