import React from 'react';
import { Container } from 'react-bootstrap';

// import CustomHookUse from './concepts/CustomHookUse';
// import UseMemoExample from './concepts/UseMemoExample';
// import UseRefExample from './concepts/UseRefExample';
import AuthSignup from './concepts/AuthSignup.jsx';
import AuthProvider from './context/AuthContext.jsx';

const App = () => {

  return (
    <React.Fragment>
      {/* <CustomHookUse/> */}
      {/* <UseMemoExample /> */}
      {/* <UseRefExample age="33" /> */}
      {/* <p>hello world</p> */}
      <AuthProvider>
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="w-100" style={{ maxWidth: '400px' }}>
            <AuthSignup />
          </div>
        </Container>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
