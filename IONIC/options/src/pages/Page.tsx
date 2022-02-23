import React from 'react';
import { IonContent, IonMenuButton, IonHeader, IonCol, IonRow, IonGrid, IonBackButton,  IonPage, IonTitle, IonToolbar, IonAvatar, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonToggle } from '@ionic/react';
import { pin, wifi, wine, warning, walk, tvOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            {/* <IonMenuButton /> */}
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle className='titl' >Área Restrita</IonTitle>
          <IonToggle  slot="end" name="darkMode" onIonChange={toggleDarkModeHandler}></IonToggle >
        </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name={name} /> */}
        <IonCard   >  
        <div className='ionphoto'>
            <img src="https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg" />
          <IonCardHeader>         
              <IonCardTitle className='titl'>8097542</IonCardTitle>
              <IonCardTitle className='subt' >ADEISE FERREIRA DE SOUZA</IonCardTitle>
              <IonCardSubtitle>ferreirasouz.adeise@gmail.com</IonCardSubtitle>
          </IonCardHeader>
        </div>       
        </IonCard>
        <IonRow className='grid'>

            <IonButton  color="b1" id='b2'>
              <p>A homolar</p>
            </IonButton>

            <IonButton  color="b2" id='b3'>
              <p>A homolar</p>
            </IonButton>

            <IonButton color="b3" id='b4'>
              <p>A homolar</p>
            </IonButton>

            <IonButton id='b5'>
              <p>A homolar</p>
            </IonButton>

            <IonButton id='b6'>
              <p>A homolar</p>
            </IonButton>

            <IonButton id='b7'>
              <p>A homolar</p>
            </IonButton>

            <IonButton id='b8'>
              <p>A homolar</p>
            </IonButton>

            <IonButton  id='b9'>
              <p>A homolar</p>
            </IonButton>

        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Page;


