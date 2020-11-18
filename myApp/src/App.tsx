import React, { useState } from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import PageRouter from './PageRouter';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import NavigationTabs from './components/NavigationTabs';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <PageRouter isLoggedIn={isLoggedIn} setLoginStatus={setIsLoggedIn} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
        {
          isLoggedIn ? NavigationTabs
        : 0
        }
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  );
}

export default App;
