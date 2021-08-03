import _ from 'lodash';

import { 
    createTheme as createMaterialTheme
} from '@material-ui/core/styles';

import { 
    createTheme,
    themeSettings  
} from '../configuration/theme.config';

export const inIframe = () => {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

export const isDebug = () => {
    try {

        let search = '';
        if (inIframe()) {
            search = window.self.location.search;
        } else {
            search = window.top.location.search;
        }

        const urlParams = new URLSearchParams(search);
        return (urlParams.get('debug') === 'true');

    } catch (e) {
        return true;
    }
}

export const createKeephubTheme = (customSettings) => {
    return createMaterialTheme(createTheme(_.merge(themeSettings, customSettings)));
}