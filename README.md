![Spyder Website — The Official Site of the Scientific Python Development Environment](
./assets/static/images/spyder_readme_banner.png)

*Copyright © 2016–2018 Spyder Website Contributors*


[![license](https://img.shields.io/pypi/l/spyder.svg)](./LICENSE)
[![PyPI status](https://img.shields.io/pypi/status/spyder.svg)](https://github.com/spyder-ide/spyder)
[![pypi version](https://img.shields.io/pypi/v/spyder.svg)](https://pypi.org/project/spyder)
[![conda version](https://img.shields.io/conda/vn/conda-forge/spyder.svg)](https://www.anaconda.com/download/)
[![download count](https://img.shields.io/conda/dn/conda-forge/spyder.svg)](https://www.anaconda.com/download/)
[![Travis status](https://travis-ci.org/spyder-ide/spyder.svg?branch=master)](https://travis-ci.org/spyder-ide/spyder-docs)
[![OpenCollective Backers](https://opencollective.com/spyder/backers/badge.svg?color=blue)](#backers)
[![Join the chat at https://gitter.im/spyder-ide/public](https://badges.gitter.im/spyder-ide/spyder.svg)](https://gitter.im/spyder-ide/public)


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

If you also want to update the webpack files, you need `npm` installed
and then run it like this:

```
$ lektor server -f webpack
```

## Workflow

There are 2 branches, develop and production.

### Develop

Default branch is develop and is deployed with gh-pages via Lektor to http://develop.spyder-ide.org

### Production

After test have been carried out by the QA Team, the changes from develop will be merged in production and deployed gh-pages via Lektor to https://www.spyder-ide.org

## Technologies and Libraries used

This website is built using [Lektor](http://getlektor.com/) an static web generator that could be customized using [Jinja2](http://jinja.pocoo.org/) templates.

### Frontend Libraries

- [Foundation](http://foundation.zurb.com/)
- [Slick Carousel](https://kenwheeler.github.io/slick/)
- [Font Awesome](http://fontawesome.io/)

### Webpack

Webpack is used for built and generate static files (css, js, images, fonts), in the current configuration:

- .scss files will be processed with Sass
- .js files will be processed with Babel to convert ES6 into ES5
- JS and CSS files will be minified

### Lektor plugins

The build also requires several [Lektor Plugins](https://www.getlektor.com/docs/plugins/)
(No extra configuration is needed; Lektor automatically installs them when building):

- [webpack-support](https://github.com/lektor/lektor-webpack-support)
- [markdown-header-anchors :ext](https://github.com/lektor/lektor-markdown-header-anchors)
- [disqus-comments](https://github.com/lektor/lektor-disqus-comments)


## More information

[Main Website](https://www.spyder-ide.org/)

[Download Spyder (with Anaconda)](https://www.anaconda.com/download/)

[Spyder Github](https://github.com/spyder-ide/spyder)

[Troubleshooting Guide and FAQ](
https://github.com/spyder-ide/spyder/wiki/Troubleshooting-Guide-and-FAQ)

[Development Wiki](https://github.com/spyder-ide/spyder/wiki/Dev:-Index)

[Gitter Chatroom](https://gitter.im/spyder-ide/public)

[Google Group](http://groups.google.com/group/spyderlib)

[@Spyder_IDE on Twitter](https://twitter.com/spyder_ide)

[@SpyderIDE on Facebook](https://www.facebook.com/SpyderIDE/)

[Support Spyder on OpenCollective](https://opencollective.com/spyder/)
