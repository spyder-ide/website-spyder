# Contributing Guide

This is the website for the Spyder scientific Python development environment, and is developed with standard Github flow.
If you're not comfortable with at least the basics of ``git`` and GitHub, we recommend seeking out a beginner tutorial; if you are already are experienced with it, most of this guide will already be familiar to you.
However, the guide should fill you in on pretty much all the parts you need to know, so read on.
Thanks!



<!-- markdownlint-disable -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Reporting Issues](#reporting-issues)
- [Setting Up a Development Environment](#setting-up-a-development-environment)
  - [Fork and clone the repo](#fork-and-clone-the-repo)
  - [Create and activate a fresh venv](#create-and-activate-a-fresh-venv)
  - [Install the development dependencies](#install-the-development-dependencies)
  - [Install the required Pre-Commit hooks](#install-the-required-pre-commit-hooks)
- [Running the server](#running-the-server)
- [Making Your Changes](#making-your-changes)
- [Pushing your Changes and Submitting a Pull Request](#pushing-your-changes-and-submitting-a-pull-request)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- markdownlint-restore -->



## Reporting Issues

Discover a bug?
Want a new feature?
[Open](https://github.com/spyder-ide/website-spyder/issues/new/choose) an [issue](https://github.com/spyder-ide/website-spyder/issues)!
Make sure to describe the bug or feature in detail, with reproducible examples and references if possible, what you are looking to have fixed/added.
While we can't promise we'll fix everything you might find, we'll certainly take it into consideration, and typically welcome pull requests to resolve accepted issues.
Thanks!



## Setting Up a Development Environment

**Note**: You may need to substitute ``python3`` for ``python`` in the commands below on some Linux distros where ``python`` isn't mapped to ``python3`` (yet).

### Fork and clone the repo

First, navigate to the [project repository](https://github.com/spyder-ide/website-spyder) in your web browser and press the ``Fork`` button to make a personal copy of the repository on your own Github account.
Then, click the ``Clone or Download`` button on your repository, copy the link and run the following on the command line to clone the repo with submodules:

```bash
git clone --recursive <LINK-TO-YOUR-REPO>
```

Finally, set the upstream remote to the official website repo with:

```bash
git remote add upstream https://github.com/spyder-ide/website-spyder.git
```


### Create and activate a fresh venv

Particularly for development installs, we highly recommend you create and activate a virtual environment to avoid any conflicts with other packages on your system or causing any other issues.
To do so with Conda (recommended), simply execute the following:

```bash
conda create -c conda-forge -n website-spyder-env python=3
```

And activate it with

```bash
conda activate website-spyder-env
```

With pip/venv, you can create a virtual environment with

```bash
python -m venv website-spyder-env
```

And activate it with the following on Linux and macOS,

```bash
source website-spyder-env/bin/activate
```

or on Windows (cmd),

```cmd
.\website-spyder-env\Scripts\activate.bat
```

Regardless of the tool you use, make sure to remember to always activate your environment before using it.


### Install the development dependencies

To get the consistent pinned versions of the development dependencies, install the deps from the requirements file.
If using conda, run:

```bash
conda install -c conda-forge --file requirements-dev.txt
```

Or, using pip,

```bash
python -m pip -r requirements-dev.txt
```


### Install the required Pre-Commit hooks

You'll need to install the pre-commit hooks before committing any changes, as they both auto-generate/update specific files and run a comprehensive series of checks to help you find likely errors and enforce the project's code quality guidelines and style guide; they are also run in CI, and will fail the build if any don't pass or modify any files.
This repository uses [Pre-Commit](https://pre-commit.com/) to install, configure and update a suite of pre-commit hooks that check for common problems and issues, and fix many of them automatically.
Pre-commit itself is installed with the above command, and the hooks should be enabled by running the following from the root of this repo:

```bash
pre-commit install --hook-type pre-commit --hook-type commit-msg
```

The hooks will be automatically run against any new/changed files every time you commit.
It may take a few minutes to install the needed packages the first time you commit, but subsequent runs should only take a few seconds.
If you made one or more commits before installing the hooks (not recommended), you can run them manually on all the files in the repo with:

```bash
pre-commit run --all-files
```

**Note**: Many of the hooks fix the problems they detect automatically (the hook output will say ``Files were modified by this hook``, but no errors/warnings will be listed), but they will still abort the commit so you can double-check everything first.
Once you're satisfied, ``git add .`` and commit again.



## Running the server

In the root of this repository, run a continuously updating local webserver:

```bash
lektor server
```

The resulting website can be viewed in your browser at ``http://localhost:5000``.



## Making Your Changes

To start working on a new PR, you need to execute these commands, filling in the branch names where appropriate (``<FEATURE-BRANCH>`` is the branch you'll be creating to store your changes, e.g. ``fix-startup-bug`` or ``add-widget-support``):

```bash
git checkout master
git pull upstream master
git checkout -b <FEATURE-BRANCH>
```

Once you've made and tested your changes, commit them with a descriptive message of 74 characters or less written in the imperative tense, with a capitalized first letter and no period at the end (our pre-commit hooks will check that for you, so make sure to install them).
For example:

```bash
git commit -am "Fix style issues on mobile browsers"
```

After making your changes, make sure to test them with ``lektor server``.



## Pushing your Changes and Submitting a Pull Request

Now that your changes are ready to go, you'll need to push them to your fork.

```bash
git push -u origin <FEATURE-BRANCH>
```

Finally, create a pull request to the [spyder-ide/website-spyder repository](https://github.com/spyder-ide/website-spyder/) on Github.

Thanks, and we look forward to your generous contributions!
