import PropTypes from 'prop-types';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HistoryListener from './HistoryListener';

const KeephubRouter = ({ children }) => {
  return (
    <BrowserRouter>
      <HistoryListener>{children}</HistoryListener>
    </BrowserRouter>
  );
};

KeephubRouter.propTypes = {
  children: PropTypes.node,
};

export default KeephubRouter;
