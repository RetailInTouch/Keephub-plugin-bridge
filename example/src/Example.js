import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { createKeephubTheme } from './utils/createKeephubTheme';
import { useKeephub } from 'keephub-plugin-bridge';
import React from 'react';

const Example = () => {
  const { user, themeConfig } = useKeephub();
  const theme = createKeephubTheme(themeConfig);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Card style={{ marginBottom: 10 }}>
            <CardHeader title="Demo plugin" style={{ height: '40px' }} />
            <CardContent>
              <Typography>{user?.name || 'user'}</Typography>
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Example;
