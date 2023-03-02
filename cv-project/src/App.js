import React, { Component } from 'react';
import PersonalForm from './components/personal/personalForm.js';
import WorkExpForm from './components/workExp/workExpForm.js';

class App extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        <PersonalForm />
        <WorkExpForm />
      </div>
    )
  }
}

export default App;
