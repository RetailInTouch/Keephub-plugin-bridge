import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useKeephub } from './KeephubProvider';

const HistoryListener = ({ children }) => {
  const history = useHistory();
  const { bridge } = useKeephub();

  useEffect(() => {
    const unlisten = history.listen(location => {
      bridge.changeLocation(location.pathname);
    });

    const unsubscribe = bridge.subscribe('locationPop', () => {
      history.goBack();
    });

    return () => {
      unsubscribe();
      unlisten();
    };
  }, [bridge, history]);

  return children;
};

export default HistoryListener;
