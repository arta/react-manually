// Adapted from: https://btholt.github.io/complete-intro-to-react-v1/

var React = require('react');
// var ReactDOM = require('react-dom'); // <= (not) needed?

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <p>Hello from the app I guess?</p>
      </div>
    )
  }
}

module.exports = App;

// New(er) way?
// With no require needed, maybe?

// function App() {
//   return (
//     <div className='App'>
//       <p>Hello from the app I guess?</p>
//     </div>
//   );
// }

// export default App;