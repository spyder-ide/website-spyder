![Spyder Website — The Official Site of the Scientific Python Development Environment](./assets/static/images/spyder_readme_banner.png)

*Copyright © 2016-2020 Spyder Website Contributors and others (see [AUTHORS.txt](https://github.com/spyder-ide/website-spyder/blob/master/AUTHORS.txt))*


[![license](https://img.shields.io/pypi/l/spyder.svg)](./LICENSE.txt)
[![Travis status](https://travis-ci.org/spyder-ide/website-spyder.svg?branch=develop)](https://travis-ci.org/spyder-ide/website-spyder)
[![Netlify Status](https://api.netlify.com/api/v1/badges/12791f68-4cbb-4236-b918-24da97168631/deploy-status)](https://app.netlify.com/sites/spyder-website-preview/deploys)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![OpenCollective Backers](https://opencollective.com/spyder/backers/badge.svg?color=blue)](#backers)
[![Join the chat at https://gitter.im/spyder-ide/public](https://badges.gitter.im/spyder-ide/spyder.svg)](https://gitter.im/spyder-ide/public)


![Screenshot of the Spyder website homepage, showing a banner and screenshot](./assets/static/images/mainpage_screenshot.png)


This is the repository for the Spyder IDE website at [Spyder-IDE.org](https://www.spyder-ide.org/), built with the [Lektor](https://www.getlektor.com/) static CMS and our very own [Lektor-Icon](https://spyder-ide.github.io/lektor-icon/) theme.



## Getting started


### Clone the repo with submodules

```bash
$ git clone --recursive https://github.com/spyder-ide/website-spyder.git
```


### Install Lektor

Using conda (Recommended way):

```bash
$ conda install lektor -c conda-forge
```

Using pip:

```bash
$ pip install -U Lektor
```

With installation script:

```bash
$ curl -sf https://www.getlektor.com/install.sh | sh
```



### Run server and make changes

In the root of this repository, run a local server:

```bash
$ lektor server
```


### Install and use the pre-commit hooks

This repository uses [pre-commit](https://pre-commit.com/) to install, configure and update a suite of pre-commit hooks that check for common problems and issues and fix many of them automatically.
To obtain the pre-commit package, simply run the following with conda:

```bash
$ conda install -c conda-forge pre-commit
```

or with pip:

```bash
$ pip install -U pre-commit
```

and install the hooks by running the following from the root of this repo:

```bash
$ pre-commit install
```

The hooks will be automatically run against any new/changed files every time you commit.
It may take a few minutes to install the needed packages the first time you commit, but subsequent runs should only take a few seconds.
To run the hooks manually on all the files in the repo, execute:

```bash
$ pre-commit run --all-files
```



## Workflow

There are 2 branches, develop and production.


### Develop

The default branch is ``develop``, which is deployed with Github Pages via Lektor to [Develop.Spyder-IDE.org](https://develop.spyder-ide.org/).


### Production

After confirming your changes look as expected, the changes from ``develop`` will be merged to ``production`` and deployed to Github Pages via Lektor to [www.Spyder-IDE.org](https://www.spyder-ide.org).



## Technologies and libraries used

This website is built using [Lektor](https://www.getlektor.com/), a static web generator that can be customized using [Jinja2](http://jinja.pocoo.org/) templates.


### Lektor plugins

The build also requires several [Lektor plugins](https://www.getlektor.com/docs/plugins/) (no extra configuration is needed; Lektor automatically installs them when building):

- [disqus-comments](https://github.com/lektor/lektor-disqus-comments)
- [atom](https://github.com/lektor/lektor-atom)



## More information

[Main Website](https://www.spyder-ide.org/)

[Download Spyder (with Anaconda)](https://www.anaconda.com/download/)

[Online Documentation](https://docs.spyder-ide.org/)

[Spyder Github](https://github.com/spyder-ide/spyder)

[Troubleshooting Guide and FAQ](https://github.com/spyder-ide/spyder/wiki/Troubleshooting-Guide-and-FAQ)

[Development Wiki](https://github.com/spyder-ide/spyder/wiki/Dev:-Index)

[Gitter Chatroom](https://gitter.im/spyder-ide/public)

[Google Group](https://groups.google.com/group/spyderlib)

[@Spyder_IDE on Twitter](https://twitter.com/spyder_ide)

[@SpyderIDE on Facebook](https://www.facebook.com/SpyderIDE/)

[Support Spyder on OpenCollective](https://opencollective.com/spyder/)
