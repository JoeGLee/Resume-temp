import React, { Component } from 'react';
import OverView from './components/overview';

class App extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <OverView />
      </div>
    )
  }
}

export default App;
