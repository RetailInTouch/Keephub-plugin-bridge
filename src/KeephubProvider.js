import React, { createContext, useContext, useEffect, useState, useRef } from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

import { inIframe, isDebug, createKeephubTheme } from './utils';

import Bridge from './Bridge';

const KeephubContext = createContext();

if (process.env.NODE_ENV !== 'production') {
    KeephubContext.displayName = 'KeephubContext'
}

const KeephubProvider = ({ children, onBeforeLift=null }) => {
    const [ user, setUser ] = useState(null);
    const [ groups, setGroups ] = useState(null);
    const [ languages, setLanguages ] = useState(null);
    const [ orgChart, setorgChart ] = useState(null);
    const [ theme, setTheme ] = useState(null);

    const [ loading, setLoading ] = useState(true);

    const refBridge = useRef(null);

    useEffect(() => {
        const bridge = new Bridge('*', inIframe(), isDebug());

        const unSubscribeUserDate = bridge.subscribe('userData', setUser);
        const unSubscribeGroups = bridge.subscribe('groups', setGroups);
        const unSubscribeOrgChart = bridge.subscribe('orgChart', setorgChart);
        const unSubscribeLanguage = bridge.subscribe('languageConfig', (language) => {
            setLanguages((language.availableLanguages ? language.availableLanguages : language) );
        });
        const unSubscribeThemeConfig = bridge.subscribe('themeConfig', (theme) => {
            setTheme(createKeephubTheme(theme));
        });

        bridge.userData();
        bridge.groups();
        bridge.orgChart()
        bridge.languageConfig()
        bridge.themeConfig();

        refBridge.current = bridge;

        return () => {
            unSubscribeUserDate();
            unSubscribeGroups();
            unSubscribeOrgChart();
            unSubscribeThemeConfig();
            unSubscribeLanguage();
        }

    }, [ setUser, setGroups, setorgChart, setLanguages, setTheme ]);

    useEffect(() => {

        if (user !== null && groups !== null && languages !== null && orgChart !== null && theme !== null ) {

            if (onBeforeLift !== null) {
                Promise.resolve(onBeforeLift(user)).finally(() => {
                    setLoading(false);
                });
            } else {
                setLoading(false);
            }
             
        }

    }, [ user, groups, languages, orgChart, theme ]);

    return (
        <KeephubContext.Provider value={{ 
            bridge: refBridge.current,
            user: user,
            userGroups: groups,
            languages: languages,
            orgunits: orgChart,
        }}>
            <CssBaseline />
            {
                loading
                ?
                    <div style={{display: 'flex', height:'100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#efefef'}}><CircularProgress /></div>
                :
                    <MuiThemeProvider theme={theme}>
                        { children }
                    </MuiThemeProvider>
            }
        </KeephubContext.Provider> 
    )
}

const useKeephub = () => {
    const { bridge, user, userGroups, languages, orgunits } = useContext(KeephubContext);
    return { bridge, user, userGroups, languages, orgunits };
}

export { KeephubProvider, KeephubContext, useKeephub }