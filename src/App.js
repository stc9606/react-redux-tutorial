import React, {Component} from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import Article from './component/Article';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Nav></Nav>      
        <Article></Article>
      </div>
    );
  }  
}

export default App;
