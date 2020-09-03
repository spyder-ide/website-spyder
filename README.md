![Spyder Website — The Official Site of the Scientific Python Development Environment](
./assets/static/images/spyder_readme_banner.png)

*Copyright © 2016–2018 Spyder Website Contributors*


[![license](https://img.shields.io/pypi/l/spyder.svg)](./LICENSE)
[![PyPI status](https://img.shields.io/pypi/status/spyder.svg)](https://github.com/spyder-ide/spyder)
[![pypi version](https://img.shields.io/pypi/v/spyder.svg)](https://pypi.org/project/spyder)
[![conda version](https://img.shields.io/conda/vn/conda-forge/spyder.svg)](https://www.anaconda.com/download/)
[![download count](https://img.shields.io/conda/dn/conda-forge/spyder.svg)](https://www.anaconda.com/download/)
[![Travis status](https://travis-ci.org/spyder-ide/website-spyder.svg?branch=develop)](https://travis-ci.org/spyder-ide/website-spyder)
[![OpenCollective Backers](https://opencollective.com/spyder/backers/badge.svg?color=blue)](#backers)
[![Join the chat at https://gitter.im/spyder-ide/public](https://badges.gitter.im/spyder-ide/spyder.svg)](https://gitter.im/spyder-ide/public)


![Screenshot of the Spyder website homepage, showing a banner and screenshot](
./assets/static/images/mainpage_screenshot.png)


This is the repository for the Spyder IDE website at [Spyder-IDE.org](
https://www.spyder-ide.org/).


## Getting Started

### Install Lektor

Running installation script:
```
$ curl -sf https://www.getlektor.com/install.sh | sh
```

Using conda (Recommended way):
```
$ conda install lektor -c conda-forge
```

Using pip:
```
$ pip install -U Lektor
```

### Run server and make changes

To run local server:

```
$ lektor server
```


## Workflow

There are 2 branches, develop and production.

### Develop

Default branch is develop and is deployed with gh-pages via Lektor to https://develop.spyder-ide.org/

### Production

After test have been carried out by the QA Team, the changes from develop will be merged in production and deployed gh-pages via Lektor to https://www.spyder-ide.org

## Technologies and Libraries used

This website is built using [Lektor](https://www.getlektor.com/), a static web generator that could be customized using [Jinja2](http://jinja.pocoo.org/) templates.


### Lektor plugins

The build also requires several [Lektor Plugins](https://www.getlektor.com/docs/plugins/)
(No extra configuration is needed; Lektor automatically installs them when building):

- [disqus-comments](https://github.com/lektor/lektor-disqus-comments)


## More information

[Main Website](https://www.spyder-ide.org/)

[Download Spyder (with Anaconda)](https://www.anaconda.com/download/)

[Online Documentation](https://docs.spyder-ide.org/)

[Spyder Github](https://github.com/spyder-ide/spyder)

[Troubleshooting Guide and FAQ](
https://github.com/spyder-ide/spyder/wiki/Troubleshooting-Guide-and-FAQ)

[Development Wiki](https://github.com/spyder-ide/spyder/wiki/Dev:-Index)

[Gitter Chatroom](https://gitter.im/spyder-ide/public)

[Google Group](https://groups.google.com/group/spyderlib)

[@Spyder_IDE on Twitter](https://twitter.com/spyder_ide)

[@SpyderIDE on Facebook](https://www.facebook.com/SpyderIDE/)

[Support Spyder on OpenCollective](https://opencollective.com/spyder/)
