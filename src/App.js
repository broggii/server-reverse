// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     input: '',
//     reversedString: '',
//   };
//   handleChange = e => {
//     this.setState({ input: e.target.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();

//     fetch('/api/v1/reversify', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8',
//       },
//       body: JSON.stringify({ reversifyThis: this.state.input }),
//     })
//       .then(response => response.json())
//       .then(reversedString => this.setState({ reversedString }))
//       .catch(e => console.log(e));
//   };
//   render() {
//     return (
//       <div className="App">
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             value={this.state.input}
//             onChange={this.handleChange}
//           />
//           <button type="submit">Server Reverse My String</button>
//         </form>
//         <h3>Client Input: {this.state.input}</h3>
//         <h1>Server Result: {this.state.reversedString}</h1>
//       </div>
//     );
//   }
// }

// export default App;
import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
    reversedString: '',
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:5000/api/v1/reversify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ reversifyThis: this.state.input }),
    })
      .then(response => response.json())
      .then(reversedString => this.setState({ reversedString }))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit">Server Reversify My String</button>
        </form>
        <h3>Client Input: {this.state.input}</h3>
        <h1>Server Result: {this.state.reversedString}</h1>
      </div>
    );
  }
}

export default App;
