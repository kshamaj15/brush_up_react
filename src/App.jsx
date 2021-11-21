import React from 'react';

import './App.css';
import CustomHookUse from './concepts/CustomHookUse';
import UseMemoExample from './concepts/UseMemoExample';
import UseRefExample from './concepts/UseRefExample';

const App = () => {

  return (
    <React.Fragment>
      {/* <CustomHookUse/> */}
      {/* <UseMemoExample /> */}
      <UseRefExample age="33" />
    </React.Fragment>
  );
}

export default App;
