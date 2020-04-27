import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Pipeline from './pages/Pipeline/Pipeline';
import { cnTheme } from '@gpn-design/uikit/Theme';
import '@gpn-design/uikit/__internal__/src/components/Theme/_color/Theme_color_gpnDark.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_space/Theme_space_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_size/Theme_size_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_font/theme_font_gpnDefault.css';
import '@gpn-design/uikit/__internal__/src/components/Theme/_control/Theme_control_gpnDefault.css';

import '@gpn-design/uikit/__internal__/src/utils/whitepaper/whitepaper.css'

// import "@gpn-design/uikit/dist/style.css";
import './App.css';

function App() {
  return (
    <div className={cnTheme({
      color: 'gpnDark',
      control: 'gpnDefault',
      font: 'gpnDefault',
      size: 'gpnDefault',
      space: 'gpnDefault',
      gap: 'm',
     }, ['App'])}>
      <Switch>
        <Route exact path="/pipeline">
          <Pipeline  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
