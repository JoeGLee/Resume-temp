import React, { Component } from 'react';
import OverView from './components/overview';
import './components/style.css'


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
