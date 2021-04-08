import React from 'react'

import { KeephubProvider } from 'keephub-plugin-bridge';
import Example from './Example';

const App = () => {
	return (
		<KeephubProvider>
			<Example />
		</KeephubProvider>
	);
}

export default App
