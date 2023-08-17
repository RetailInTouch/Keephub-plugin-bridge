import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Bridge from './Bridge';
import { createKeephubTheme, inIframe, isDebug } from './utils';

const KeephubContext = createContext({});

if (process.env.NODE_ENV !== 'production') {
  KeephubContext.displayName = 'KeephubContext';
}

const KeephubProvider = ({ children, onBeforeLift = null }) => {
  const [user, setUser] = useState(null);
  const [groups, setGroups] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [orgChart, setorgChart] = useState(null);
  const [theme, setTheme] = useState(null);
  const [themeConfig, setThemeConfig] = useState(null);
  const [jwtPluginToken, setJwtPluginToken] = useState(null);

  const [loading, setLoading] = useState(true);

  const refBridge = useRef(null);

  useEffect(() => {
    if (isDebug()) {
      // eslint-disable-next-line no-console
      console.log(
        '[KeephubProvider] =============================================\n[KeephubProvider] Debug mode activated\n[KeephubProvider] =============================================',
      );
    }
  }, []);

  useEffect(() => {
    const bridge = new Bridge('*', inIframe(), isDebug());

    const unSubscribeUserDate = bridge.subscribe('userData', setUser);
    const unSubscribeGroups = bridge.subscribe('groups', setGroups);
    const unSubscribeOrgChart = bridge.subscribe('orgChart', setorgChart);
    const unSubscribeLanguage = bridge.subscribe('languageConfig', language => {
      setLanguages(
        language.availableLanguages ? language.availableLanguages : language,
      );
    });
    const unSubscribeThemeConfig = bridge.subscribe('themeConfig', theme => {
      setThemeConfig(theme);
    });
    const unSubscribeJwtPluginToken = bridge.subscribe(
      'jwtPluginToken',
      jwtPluginToken => {
        setJwtPluginToken(jwtPluginToken);
      },
    );

    bridge.userData();
    bridge.groups();
    bridge.orgChart();
    bridge.languageConfig();
    bridge.themeConfig();
    bridge.jwtPluginToken();

    refBridge.current = bridge;

    return () => {
      unSubscribeUserDate();
      unSubscribeGroups();
      unSubscribeOrgChart();
      unSubscribeThemeConfig();
      unSubscribeLanguage();
      unSubscribeJwtPluginToken();
    };
  }, [setUser, setGroups, setorgChart, setLanguages, setTheme]);

  useEffect(() => {
    if (
      (user !== null &&
        groups !== null &&
        languages !== null &&
        orgChart !== null &&
        theme !== null,
      jwtPluginToken !== null)
    ) {
      if (onBeforeLift !== null) {
        Promise.resolve(
          onBeforeLift({
            user,
            groups,
            languages,
            orgChart,
            jwtPluginToken,
          }),
        ).finally(() => {
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    }
  }, [jwtPluginToken, onBeforeLift, user, groups, languages, orgChart, theme]);

  useEffect(() => {
    if (themeConfig) {
      setTheme(createKeephubTheme(themeConfig));
    }
  }, [user, themeConfig]);

  useEffect(() => {
    if (isDebug() && !loading) {
      // eslint-disable-next-line no-console
      console.log(
        '[KeephubProvider] =============================================\n',
        JSON.stringify({
          user,
          userGroups: groups,
          languages,
          orgunits: orgChart,
          jwtPluginToken,
        }),
        '[KeephubProvider] =============================================\n',
      );
    }
  }, [groups, jwtPluginToken, languages, loading, orgChart, user]);

  return (
    <KeephubContext.Provider
      value={{
        bridge: refBridge.current,
        user,
        userGroups: groups,
        languages,
        orgunits: orgChart,
        jwtPluginToken,
        theme,
      }}
    >
      <CssBaseline />
      {loading ? (
        <div
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#efefef',
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>
      )}
    </KeephubContext.Provider>
  );
};

KeephubProvider.propTypes = {
  children: PropTypes.node,
  onBeforeLift: PropTypes.func,
};

const useKeephub = () => {
  const { bridge, user, userGroups, languages, orgunits, theme } =
    useContext(KeephubContext);
  return { bridge, user, userGroups, languages, orgunits, theme };
};

export { KeephubProvider, KeephubContext, useKeephub };
