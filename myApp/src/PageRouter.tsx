import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

function PageRouter(props: { isLoggedIn: boolean; }) {

    if (props.isLoggedIn) {
        return (
            <React.Fragment>
                <Route path="/tab1" component={Tab1} />
                <Route path="/tab2" component={Tab2} />
                <Route path="/tab3" component={Tab3} />
                <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <Route path="/login" component={Login} />
            <Route path="/" render={() => <Redirect to="/login" />} />
        </React.Fragment>
    );

}

export default PageRouter;