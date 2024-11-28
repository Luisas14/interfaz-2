import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1 HOLA SOY UN TITULO  </IonTitle>


        </IonToolbar>
      </IonHeader >
      <IonContent fullscreen >
        <>
          <IonSearchbar placeholder="Ingresa el nombre de una estación o una dirección"></IonSearchbar>
        </>
        <ExploreContainer name="BOGOTÁ D.C. " />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
