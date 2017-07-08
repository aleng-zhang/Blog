* TOC
{:toc}

### 安装:
~~~
curl -L https://raw.githubusercontent.com/pyenv/pyenv-installer/master/bin/pyenv-installer | bash
~~~
### 升级:
~~~
pyenv update
~~~

### 卸载
~~~
rm -fr ~/.pyenv
#在`.bashrc`删除下面三行
export PATH="~/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
~~~

### 使用


+ pyenv versions
查看当前 pyenv 可检测到的所有版本，处于激活状态的版本前以 * 标示。

~~~
 $ pyenv versions
 2.5.6
 2.6.8
*2.7.6 (set by /home/yyuu/.pyenv/version)
 3.3.3
 jython-2.5.3
 pypy-2.2.1
~~~

+ pyenv version
查看当前处于激活状态的版本，括号中内容表示这个版本是由哪条途径激活的（global、local、shell）

~~~
$ pyenv version
2.7.6 (set by /home/yyuu/.pyenv/version)
~~~

+ pyenv install
使用 python-build（一个插件） 安装一个 Python 版本，到 $PYENV_ROOT/versions 路径下

~~~
$ pyenv install -v 2.7.3
~~~

建议添加 -v 参数用于显示细节。python-build 会首先尝试从一个镜像站点下载包，此时可以去 /tmp/python-build.xxx 里面关心一下下载速度。如果太慢，可以直接在 shell 里 ctrl-c 终止此次下载，然后 python-build 会自动去 python.org/ftp 下载。不一定哪个更快。

+ pyenv uninstall
卸载一个版本

~~~
$ pyenv uninstall 2.7.3
~~~

+ pyenv rehash
为所有已安装的可执行文件 （如：~/.pyenv/versions/*/bin/*） 创建 shims，因此，每当你增删了 Python 版本或带有可执行文件的包（如 pip）以后，都应该执行一次本命令

~~~
$ pyenv install 2.7.3
$ pyenv rehash
~~~

+ pyenv global
设置全局的 Python 版本，通过将版本号写入 ~/.pyenv/version 文件的方式。

~~~
$ pyenv global 3.4.0
~~~

+ pyenv local
设置面向程序的本地版本，通过将版本号写入当前目录下的 .python-version 文件的方式。通过这种方式设置的 Python 版本优先级较 global 高。pyenv 会从当前目录开始向上逐级查找 .python-version 文件，直到根目录为止。若找不到，就用 global 版本。

~~~
$ pyenv local 2.7.3
~~~

+ pyenv shell
设置面向 shell 的 Python 版本，通过设置当前 shell 的 PYENV_VERSION 环境变量的方式。这个版本的优先级比 local 和 global 都要高。--unset 参数可以用于取消当前 shell 设定的版本。

~~~
$ pyenv shell pypy-2.2.1
$ pyenv shell --unset
~~~

[Pyenv](https://github.com/pyenv/pyenv, "Pyenv")