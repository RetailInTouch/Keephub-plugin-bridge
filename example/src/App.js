import { KeephubProvider } from 'keephub-plugin-bridge';
import React from 'react';
import Example from './Example';

const App = () => {
  const onBeforeLift = (/*{ user, orgChart }*/) => {
    return new Promise(resolve => {
      resolve();
    });
  };

  return (
    <KeephubProvider onBeforeLift={onBeforeLift}>
      <Example />
    </KeephubProvider>
  );
};

export default App;
