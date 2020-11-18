import React from 'react';
import { IonButton, IonCheckbox, IonGrid, IonInput, IonItem, IonLabel, IonRow, IonPage } from '@ionic/react';
import './Login.css';
import { Redirect } from 'react-router-dom';

function Login(props: { isLoggedIn: boolean; setIsLoggedIn: any; }) {

  function setLoginStatus() {
    props.setIsLoggedIn(true);
  };

  function renderRedirect() {
    console.log(props.isLoggedIn)
    if (props.isLoggedIn) {
      return (
        <Redirect to={{ pathname: "/tab1" }} />
      )
    }
  }

  return (
    <IonPage>
      <IonGrid>
        <IonRow class="ion-justify-content-center">
          <form className="ion-padding">
            <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" />
            </IonItem>
            <IonItem lines="none">
              <IonLabel>Remember me</IonLabel>
              <IonCheckbox defaultChecked={true} slot="start" />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block" onClick={setLoginStatus}>
              Login
            </IonButton>
            {renderRedirect()}
          </form>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default Login;
