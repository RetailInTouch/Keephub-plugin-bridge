import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useKeephub } from 'keephub-plugin-bridge';
import React from 'react';

const Example = () => {
  const { user } = useKeephub();

  return (
    <Container maxWidth="sm">
      <Card style={{ marginBottom: 10 }}>
        <CardHeader title="Demo plugin" style={{ height: '40px' }} />
        <CardContent>
          <Typography>Tekst</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Example;
