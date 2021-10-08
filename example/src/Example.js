import React from 'react';

import { useKeephub } from 'keephub-plugin-bridge';


import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Example = () => {
    const { user } = useKeephub();

	return (
		<Container maxWidth="sm">
			<Card style={{marginBottom: 10}}>
				<CardHeader title="Demo plugin" style={{height: '40px' }} />
				<CardContent>
					<Typography variant="h6">Tekst</Typography>
				</CardContent>
			</Card>
		</Container>
	);
}

export default Example;