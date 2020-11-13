import React from 'react';
import { IonButton, IonCheckbox, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
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
            <IonButton className="ion-margin-top" type="submit" expand="block">
              Login
            </IonButton>
          </form>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default Tab1;
