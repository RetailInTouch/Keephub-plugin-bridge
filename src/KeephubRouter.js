import React from 'react';

import { BrowserRouter } from "react-router-dom";
import HistoryListener from './HistoryListener';

const KeephubRouter = ({ children }) => {

    return (
        <BrowserRouter>
            <HistoryListener>
                { children }
            </HistoryListener>
        </BrowserRouter>
    );
}

export default KeephubRouter;