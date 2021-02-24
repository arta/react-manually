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

Can access ReactDOM with `var ReactDOM = require('react-dom')`</br>

`% npm install babel-{core,loader} babel-preset-react --save-dev`

Configure Babel in `.babelrc`
