import React, { useState, useRef, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, IonModal, useIonActionSheet, IonCheckbox, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

// Componente reutilizable para los modales
const TransportModal: React.FC<{
  modalRef: React.RefObject<HTMLIonModalElement>;
  presentingElement: HTMLElement | null;
  dismiss: () => void;
  canDismiss: () => Promise<boolean>;
  isElectricBikeChecked: boolean;
  setIsElectricBikeChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isElectricScooterChecked: boolean;
  setIsElectricScooterChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isElectricVehicleChecked: boolean;
  setIsElectricVehicleChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isAnyTransportChecked: boolean;
}> = ({
  modalRef, 
  presentingElement, 
  dismiss, 
  canDismiss, 
  isElectricBikeChecked, 
  setIsElectricBikeChecked, 
  isElectricScooterChecked, 
  setIsElectricScooterChecked, 
  isElectricVehicleChecked, 
  setIsElectricVehicleChecked, 
  isAnyTransportChecked
}) => (
  <IonModal ref={modalRef} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement!}>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Transportes Eléctricos</IonTitle>
        <IonButtons slot="end">
          <IonButton onClick={dismiss}>X</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <div className="station-info">
        <h2>Ubicación / Dirección</h2>
        <p>Costo por tipo de vehículo: </p>
        <p>bici eléctrica ($1.11) / scooters eléctricos ($2.22) / vehículo eléctrico ($3.33)</p>
        <div className="stats">
          <div>
            <p className="text-2xl font-bold">1</p>
            <p>Bicis eléctricas</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2</p>
            <p>Scooters eléctricos</p>
          </div>
          <div>
            <p className="text-2xl font-bold">3</p>
            <p>Vehículos eléctricos</p>
          </div>
        </div>
        <div className="available-bikes">
          <h3>Transportes eléctricos disponibles</h3>
          <table>
            <thead>
              <tr>
                <th>ID del transporte</th>
                <th>Rango estimado</th>
                <th>Tipo de vehículo</th>
              </tr>
            </thead>
            <tbody>
              {/* Aquí puedes agregar dinámicamente las filas de transportes */}
              <tr>
                <td>...0803</td>
                <td>34 km</td>
                <td>Bicicleta eléctrica</td>
              </tr>
              <tr>
                <td>...5667</td>
                <td>23 km</td>
                <td>Scooter eléctrico</td>
              </tr>
              <tr>
                <td>...0116</td>
                <td>23 km</td>
                <td>Scooter eléctrico</td>
              </tr>
              <tr>
                <td>...3773</td>
                <td>12 km</td>
                <td>Vehículo eléctrico</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Checkboxes */}
      <div className="checkbox-container" style={{ marginTop: '20px' }}>
        <IonCheckbox
          checked={isElectricBikeChecked}
          onIonChange={(e) => setIsElectricBikeChecked(e.detail.checked)} 
        />
        <IonLabel>Reservar Bici Eléctrica</IonLabel>
      </div>

      <div className="checkbox-container" style={{ marginTop: '20px' }}>
        <IonCheckbox
          checked={isElectricScooterChecked}
          onIonChange={(e) => setIsElectricScooterChecked(e.detail.checked)} 
        />
        <IonLabel>Reservar Scooter Eléctrico</IonLabel>
      </div>

      <div className="checkbox-container" style={{ marginTop: '20px' }}>
        <IonCheckbox
          checked={isElectricVehicleChecked}
          onIonChange={(e) => setIsElectricVehicleChecked(e.detail.checked)} 
        />
        <IonLabel>Reservar Vehículo Eléctrico</IonLabel>
      </div>

      {/* Botón para reservar, solo si al menos un checkbox está marcado */}
      <IonButton expand="block" disabled={!isAnyTransportChecked} style={{ marginTop: '20px' }}>
        Reservar
      </IonButton>
    </IonContent>
  </IonModal>
);

const Tab1: React.FC = () => {
  const modal1 = useRef<HTMLIonModalElement>(null);
  const modal2 = useRef<HTMLIonModalElement>(null);
  const modal3 = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
  const [present] = useIonActionSheet();

  const [isElectricBikeChecked, setIsElectricBikeChecked] = useState<boolean>(false);
  const [isElectricScooterChecked, setIsElectricScooterChecked] = useState<boolean>(false);
  const [isElectricVehicleChecked, setIsElectricVehicleChecked] = useState<boolean>(false);

  const isAnyTransportChecked = isElectricBikeChecked || isElectricScooterChecked || isElectricVehicleChecked;

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  const dismiss = () => {
    if (modal1.current) modal1.current.dismiss();
    if (modal2.current) modal2.current.dismiss();
    if (modal3.current) modal3.current.dismiss();
  };

  const canDismiss = () => {
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: '¿Está seguro?',
        buttons: [
          { text: 'Sí', role: 'confirm' },
          { text: 'No', role: 'cancel' }
        ],
        onWillDismiss: (ev) => {
          ev.detail.role === 'confirm' ? resolve(true) : reject();
        }
      });
    });
  };

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BOGOTÁ SE MUEVE</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent id='contenido'>
        <IonSearchbar placeholder="Ingresa el nombre de una estación o una dirección"></IonSearchbar>
        <ExploreContainer name="Tab 1 page" />

        {/* Modales con ID únicos para los botones */}
        <IonButton id="open-modal-1" expand="block">Abrir Modal 1</IonButton>
        <IonButton id="open-modal-2" expand="block">Abrir Modal 2</IonButton>
        <IonButton id="open-modal-3" expand="block">Abrir Modal 3</IonButton>

        {/* Modales reutilizables */}
        <TransportModal
          modalRef={modal1}
          presentingElement={presentingElement}
          dismiss={dismiss}
          canDismiss={canDismiss}
          isElectricBikeChecked={isElectricBikeChecked}
          setIsElectricBikeChecked={setIsElectricBikeChecked}
          isElectricScooterChecked={isElectricScooterChecked}
          setIsElectricScooterChecked={setIsElectricScooterChecked}
          isElectricVehicleChecked={isElectricVehicleChecked}
          setIsElectricVehicleChecked={setIsElectricVehicleChecked}
          isAnyTransportChecked={isAnyTransportChecked}
        />
        <TransportModal
          modalRef={modal2}
          presentingElement={presentingElement}
          dismiss={dismiss}
          canDismiss={canDismiss}
          isElectricBikeChecked={isElectricBikeChecked}
          setIsElectricBikeChecked={setIsElectricBikeChecked}
          isElectricScooterChecked={isElectricScooterChecked}
          setIsElectricScooterChecked={setIsElectricScooterChecked}
          isElectricVehicleChecked={isElectricVehicleChecked}
          setIsElectricVehicleChecked={setIsElectricVehicleChecked}
          isAnyTransportChecked={isAnyTransportChecked}
        />
        <TransportModal
          modalRef={modal3}
          presentingElement={presentingElement}
          dismiss={dismiss}
          canDismiss={canDismiss}
          isElectricBikeChecked={isElectricBikeChecked}
          setIsElectricBikeChecked={setIsElectricBikeChecked}
          isElectricScooterChecked={isElectricScooterChecked}
          setIsElectricScooterChecked={setIsElectricScooterChecked}
          isElectricVehicleChecked={isElectricVehicleChecked}
          setIsElectricVehicleChecked={setIsElectricVehicleChecked}
          isAnyTransportChecked={isAnyTransportChecked}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
