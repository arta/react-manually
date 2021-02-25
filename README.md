## React Manually

Following
[Codecademy's React Setup five-page guide](https://www.codecademy.com/articles/react-setup-i):

`~ % mkdir react-manually`</br>
`~ % cd react-manually` (*)</br>

(*) `rcmy` replaces `react-manually` for brevity here</br>

rcmy % create .gitignore (paste content from a scaffolded react app)</br>
rcmy % turn `rcmy` into a git repo</br>
rcmy % push to github</br>

`rcmy % npm init` # create package.json</br>
`rcmy % npm install react --save`</br>

Can now access React in `rcmy` JS files with `var React = require('react')`</br>

`rcmy % npm install react-dom --save`</br>

Can now access ReactDOM with `var ReactDOM = require('react-dom')`</br>

~~`rcmy % npm install babel-{core,loader} babel-preset-react --save-dev`~~</br>
Nope, per [Flummoxed by IT](http://flummox-engineering.blogspot.com/2018/11/webpack--babel-react-reactjs-pluginpreset-files-are-not-allowed-to-export-objects-only-functions.html), babel packages are now scoped, names start with `@`:</br>
`rcmy % npm install @babel/core @babel/preset-react babel-loader --save-dev`

Create `.babelrc`. Configure Babel (Flummoxed article gives updated config).

Reminder: Babel is a JS compiler; it provides backwards browser compatibility;
it transforms modern JS into vanilla JS all browsers can interpret & execute.

`rcmy % npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev`

Create and stub out `webpack.config.js`. Configure webpack.

Reminder: webpack "manages" transformations of server side (Node) & modern JS
code to a single file (a build) written in a vanilla JS code that (all) browsers
can interpret & execute. Webpack allows, for example, writing JS in separate
files connected with `require`, `import`, and use of modern JS features such as
`async/await`, array iterators, .etc.

Webpack needs to know:
1. what JS file(s) it should transform (all requires from the entry point down)
2. which transformations it should use on that file (configured in loaders)
3. where the new, transformed file should go (the build, a single file output)

Write and link `index.html` & `index.js`

Write a component class `App.js`

Stub out HTMLWebpackPlugin configuration - require its constructor function,
create an instance of it, to host the plugin's configuration object. Configure
our instance of the plugin. Add it to our webpack's module's exports.

Add a `build` script to `package.json`

(Also, install omitted `webpack-cli` (included it in the original install
above where it belongs), uninstall outdated babel, and re-install & reconfigure
scoped babel. Btw, babel can also be configured directly in `webpack.config.js`,
see js-for-dinosaurs.)

Add a `serve` script to `package.json`

Another update (compare to the codecademy article(s)). Rather than downgrading
webpacks, which actually didn't work, this
[stackoverflow issue solution](https://stackoverflow.com/a/64205610/247626)
resolves it.
