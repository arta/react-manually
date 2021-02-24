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

`% npm install babel-{core,loader} babel-preset-react --save-dev`

Create `.babelrc`. Configure Babel.

Reminder: Babel is a JS compiler; it provides backwards browser compatibility;
it transforms modern JS into vanilla JS all browsers can interpret & execute.

`% npm install webpack webpack-dev-server html-webpack-plugin --save-dev`

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

Write and source `index.html` & `index.js`
