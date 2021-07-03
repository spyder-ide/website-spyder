# Spyder Website

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


<!-- markdownlint-disable -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Getting started](#getting-started)
  - [Clone the repo with submodules](#clone-the-repo-with-submodules)
  - [Install dependencies](#install-dependencies)
  - [Set up Pre-Commit](#set-up-pre-commit)
  - [Run server and make changes](#run-server-and-make-changes)
- [Workflow](#workflow)
- [Technologies and libraries used](#technologies-and-libraries-used)
  - [Lektor plugins](#lektor-plugins)
- [More information](#more-information)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- markdownlint-restore -->



## Getting started


### Clone the repo with submodules

```bash
git clone --recursive https://github.com/spyder-ide/website-spyder.git
```


### Install dependencies

You can install the required development and production dependencies with conda (recommended):

```bash
conda install -c conda-forge --file requirements-dev.txt
```

or with pip:

```bash
pip install -r requirements-dev.txt
```


### Set up Pre-Commit

This repository uses [pre-commit](https://pre-commit.com/) to install, configure and update a suite of pre-commit hooks that check for common problems and issues and fix many of them automatically.
Pre-commit itself is installed with the above command, and the hooks can be installed by running the following from the root of this repo:

```bash
pre-commit install
pre-commit install --hook-type commit-msg
```

The hooks will be automatically run against any new/changed files every time you commit.
It may take a few minutes to install the needed packages the first time you commit, but subsequent runs should only take a few seconds.
If you made one or more commits before installing the hooks (not recommended), to run them manually on all the files in the repo, execute:

```bash
pre-commit run --all-files
```

**Note**: Most of the hooks fix the problems they detect automatically (the hook output will say ``files were modified by this hook``, but no errors/warnings will be listed), but they will still abort the commit so you can double-check everything first.
Once you're satisfied, ``git add .`` again and re-commit.
Hello.

### Run server and make changes

In the root of this repository, run a continuously updating local webserver:

```bash
lektor server
```

The resulting website can be viewed in your browser at ``http://localhost:5000``.



## Workflow

The default branch is ``master``, which is continuously deployed with a Github Action to Github Pages at the domain [Spyder-IDE.org](https://spyder-ide.org/).



## Technologies and libraries used

This website is built using [Lektor](https://www.getlektor.com/), a static web generator that can be customized using [Jinja2](http://jinja.pocoo.org/) templates.


### Lektor plugins

The build also requires several [Lektor plugins](https://www.getlektor.com/docs/plugins/) (no extra configuration is needed; Lektor automatically installs them when building):

* [disqus-comments](https://github.com/lektor/lektor-disqus-comments)
* [atom](https://github.com/lektor/lektor-atom)



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
