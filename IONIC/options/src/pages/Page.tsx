import React from 'react';
import { IonContent, IonMenuButton, IonImg, IonHeader, IonCol,  IonRow, IonGrid, IonBackButton,  IonPage, IonTitle, IonToolbar, IonAvatar, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonToggle } from '@ionic/react';
import { pin, wifi, wine, warning, walk, tvOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import { Icon } from '@iconify/react';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color="new" text="" defaultHref="/" />
          </IonButtons>
          <IonTitle className='titl' >Área Restrita</IonTitle>
          <IonToggle className='tog'  color="new" slot="end" name="darkMode" onIonChange={toggleDarkModeHandler}></IonToggle >
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
          

            <IonButton color="b1" id='b1'>
              <div className='in'>
                <Icon  icon="mi:computer" color="#415eb6" width="40" height="30"/>
                <p>Cursos &nbsp; &nbsp; &nbsp; &nbsp; </p>
              </div>
            </IonButton>

            <IonButton  color="b2" id='b2'>
              <div className='in'>
                <Icon icon="system-uicons:document" color="#e5a318" width="35" height="35" />
                <p>Permutas &nbsp; &nbsp;</p>
              </div>
            </IonButton>

            <IonButton  color="b3" id='b3'>
              <div className='in'>
                <Icon icon="bi:book" color="#23b0b0" width="25" height="35" />
                <p>Publicações</p>
              </div>

            </IonButton>

            <IonButton color="b4" id='b4'>
              <div className='in'>
              <Icon id='w' icon="bx:box" width="30" height="38" />
              <p>Jurídico  &nbsp; &nbsp; &nbsp;</p>
            </div>
            
            </IonButton>

            <IonButton color="b5" id='b5'>
              <div className='in'>
                <Icon icon="la:book" color="#ff317b" width="32" height="35" />
                <p>Escola &nbsp; &nbsp; &nbsp; &nbsp;</p>
              </div>
            </IonButton>

            <IonButton color="b6" id='b6'>
              <div className='in'>
                <Icon icon="octicon:gift-24" color="#f46a1b" width="30" height="30" />
                <p>Benefícios &nbsp;</p>
              </div>
            </IonButton>

            <IonButton color="b7" id='b7'>
              <div className='in'>
              <Icon icon="akar-icons:edit" color="#47a11c" width="32" height="35" />
                <p>Meus Dados</p>
              </div>
            </IonButton>

            <IonButton color="b8" id='b8'>
              <div className='in'>
              <Icon icon="bi:clipboard2" color="#b62121" width="30" height="35" />
                <p>Declarações</p>
              </div>
            </IonButton>

            <IonButton color="b9" id='b9'>
              <div className='in'>
              <Icon icon="cib:circle" color="#6c56f4" width="30" height="35" />
                <p>Direitos &nbsp; &nbsp; &nbsp; &nbsp;</p>
              </div>
            </IonButton>

        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Page;


