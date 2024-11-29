import React, { useState, useRef, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, IonModal, useIonActionSheet, IonCheckbox, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  // Referencias para el modal y la página
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  // Estado para manejar el elemento de presentación del modal
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  // Hook para mostrar la hoja de acción
  const [present] = useIonActionSheet();

  // Estados para los checkboxes de "Reservar"
  const [isElectricBikeChecked, setIsElectricBikeChecked] = useState<boolean>(false);
  const [isElectricScooterChecked, setIsElectricScooterChecked] = useState<boolean>(false);
  const [isElectricVehicleChecked, setIsElectricVehicleChecked] = useState<boolean>(false);

  // Verificar si al menos uno de los checkboxes está marcado
  const isAnyTransportChecked = isElectricBikeChecked || isElectricScooterChecked || isElectricVehicleChecked;

  // Este hook se ejecuta cuando el componente se monta
  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  // Función para cerrar el modal
  function dismiss() {
    modal.current?.dismiss();
  }

  // Función para manejar la validación antes de cerrar el modal
  function canDismiss() {
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: 'Are you sure?',
        buttons: [
          {
            text: 'Yes',
            role: 'confirm',
          },
          {
            text: 'No',
            role: 'cancel',
          },
        ],
        onWillDismiss: (ev) => {
          if (ev.detail.role === 'confirm') {
            resolve(true);
          } else {
            reject();
          }
        },
      });
    });
  }

  return (
    <IonPage ref={page}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bogotá se Mueve: Vive la Energía de la Ciudad</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSearchbar placeholder="Ingresa el nombre de una estación o una dirección"></IonSearchbar>
        <ExploreContainer name="Tab 1 page reyzxczxceno" />

        <IonButton id="open-modal" expand="block">
          Open Modal
        </IonButton>

        <IonModal ref={modal} trigger="open-modal" canDismiss={canDismiss} presentingElement={presentingElement!}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => dismiss()}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">
            <div className="station-info">
              <h2>Ubicacion / Direccion</h2>
              <p>Costo por tipo de vehiculo: </p>
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
                    <tr>
                      <td>...4884</td>
                      <td>12 km</td>
                      <td>Vehículo eléctrico</td>
                    </tr>
                    <tr>
                      <td>...5995</td>
                      <td>12 km</td>
                      <td>Vehículo eléctrico</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Checkbox para "Reservar" Bicicleta Eléctrica */}
            <div className="checkbox-container" style={{ marginTop: '20px' }}>
              <IonCheckbox
                checked={isElectricBikeChecked}
                onIonChange={(e) => setIsElectricBikeChecked(e.detail.checked)} 
              />
              <IonLabel>Reservar Bici Eléctrica</IonLabel>
            </div>

            {/* Checkbox para "Reservar" Scooter Eléctrico */}
            <div className="checkbox-container" style={{ marginTop: '20px' }}>
              <IonCheckbox
                checked={isElectricScooterChecked}
                onIonChange={(e) => setIsElectricScooterChecked(e.detail.checked)} 
              />
              <IonLabel>Reservar Scooter Eléctrico</IonLabel>
            </div>

            {/* Checkbox para "Reservar" Vehículo Eléctrico */}
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
      </IonContent>
    </IonPage>
  );
};

export default Tab1;