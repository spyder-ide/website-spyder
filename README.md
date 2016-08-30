# Spyder Website
This is the repository for the Spyder IDE website at [spyder-ide.github.io](https://spyder-ide.github.io/)

## Getting Started

### Install Lektor

Running installation script:
```
$ curl -sf https://www.getlektor.com/install.sh | sh
```

Using conda (Recomended way):
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

## Deploy

The master branch is automatically deployed to the github page [spyder-ide.github.io](https://spyder-ide.github.io/) using [Travis-CI](https://travis-ci.org)

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

The built also requieres several [Lektor Plugins](https://www.getlektor.com/docs/plugins/) (No extra configuración is needed, Lektor automatically installs them when building):

- [webpack-support](https://github.com/lektor/lektor-webpack-support)
- [markdown-header-anchors :ext](https://github.com/lektor/lektor-markdown-header-anchors)
- [disqus-comments](https://github.com/lektor/lektor-disqus-comments)
