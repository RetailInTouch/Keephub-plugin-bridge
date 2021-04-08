import React from 'react'

import { KeephubProvider } from 'keephub-plugin-bridge';
import Example from './Example';

const App = () => {

	const onBeforeLift = ({ preferredLanguage }) => {
        return new Promise((resolve) => {

			console.log('------------', preferredLanguage);

			resolve();
		});
    }

	return (
		<KeephubProvider onBeforeLift={ onBeforeLift }>
			<Example />
		</KeephubProvider>
	);
}

export default App
