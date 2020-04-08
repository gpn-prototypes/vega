import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pipeline from './pages/Pipeline/Pipeline';
import './App.css';

function App() {
  return (
    <div className="App 
        theme 
        theme_color_gpn-default 
        theme_size_gpn-default 
        theme_control_gpn-default
        theme_breakpoint_default
        theme_font_gpn-default
        theme_gap_medium 
        theme_space_gpn-default
      ">
      <Switch>
        <Route exact path="/pipeline">
          <Pipeline  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
