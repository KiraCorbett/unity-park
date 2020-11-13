import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

const PageRouter: React.FC = () => (
    <React.Fragment>
        <Route path="/tab1" component={Tab1}/>
        <Route path="/tab2" component={Tab2}/>
        <Route path="/tab3" component={Tab3} />
        <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
    </React.Fragment>
);

export default PageRouter;