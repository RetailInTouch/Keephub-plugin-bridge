import { createTheme as createMaterialTheme } from '@mui/material';
import { adaptV4Theme } from '@mui/material/styles';
import { createTheme, themeSettings } from '../configuration/theme.config';
import merge from 'lodash.merge';
export const createKeephubTheme = customSettings => {
  return createMaterialTheme(
    adaptV4Theme(
      createTheme(adaptV4Theme(merge(themeSettings, customSettings))),
    ),
  );
};
