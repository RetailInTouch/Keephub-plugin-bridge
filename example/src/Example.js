import React from 'react';

import { useKeephub } from 'keephub-plugin-bridge';

const Example = () => {
    const { user } = useKeephub();

    console.log(user);

	return (
		<div>
			div
		</div>
	);
}

export default Example;