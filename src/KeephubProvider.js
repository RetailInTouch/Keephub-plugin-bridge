import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Bridge from './Bridge';
import { inIframe, isDebug } from './utils';

const KeephubContext = createContext({});

if (process.env.NODE_ENV !== 'production') {
  KeephubContext.displayName = 'KeephubContext';
}

const KeephubProvider = ({ children, onBeforeLift = null }) => {
  const [groups, setGroups] = useState(null);
  const [jwtPluginToken, setJwtPluginToken] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [orgChart, setorgChart] = useState(null);
  const [themeConfig, setThemeConfig] = useState(null);
  const [user, setUser] = useState(null);

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

    const unSubscribeUserData = bridge.subscribe('userData', data =>
      setUser(data.user),
    );
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
      unSubscribeUserData();
      unSubscribeGroups();
      unSubscribeOrgChart();
      unSubscribeThemeConfig();
      unSubscribeLanguage();
      unSubscribeJwtPluginToken();
    };
  }, []);

  useEffect(() => {
    if (
      ![
        groups,
        jwtPluginToken,
        languages,
        orgChart,
        themeConfig,
        user,
      ].includes(null)
    ) {
      if (onBeforeLift !== null) {
        Promise.resolve(
          onBeforeLift({
            user,
            groups,
            languages,
            orgChart,
            jwtPluginToken,
            themeConfig,
          }),
        ).finally(() => {
          setLoading(false);
        });
      } else {
        setLoading(false);
      }
    }
  }, [
    jwtPluginToken,
    onBeforeLift,
    user,
    groups,
    languages,
    orgChart,
    themeConfig,
  ]);

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
        themeConfig,
      }}
    >
      {!loading && children}
    </KeephubContext.Provider>
  );
};

KeephubProvider.propTypes = {
  children: PropTypes.node,
  onBeforeLift: PropTypes.func,
};

const useKeephub = () => {
  const { bridge, user, userGroups, languages, orgunits, themeConfig } =
    useContext(KeephubContext);
  return { bridge, user, userGroups, languages, orgunits, themeConfig };
};

export { KeephubProvider, KeephubContext, useKeephub };
