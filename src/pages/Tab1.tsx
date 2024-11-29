import React, { useState, useRef, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, IonModal, useIonActionSheet,IonCheckbox, IonLabel} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {

  // Referencias para el modal y la página
  const modal = useRef<HTMLIonModalElement>(null); // 'modal' se usará para acceder al modal, para abrirlo y cerrarlo
  const page = useRef(null); // 'page' es una referencia a la página que se usará para el elemento que contiene el modal.

  // Estado para manejar el elemento de presentación del modal
  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null); // Guarda el elemento al cual se le presentará el modal

  // Hook para mostrar la hoja de acción, que se usa cuando intentamos cerrar el modal
  const [present] = useIonActionSheet(); // 'present' es la función que abre una hoja de acción

  // Estado para el checkbox de "Reservar"
  const [isChecked, setIsChecked] = useState<boolean>(false); // Controla si el checkbox está marcado o no

  // Este hook se ejecuta cuando el componente se monta (cuando se carga la página)
  useEffect(() => {
    setPresentingElement(page.current); // Se configura 'page' como el elemento de presentación del modal
  }, []); // El segundo parámetro vacío asegura que esto se ejecute solo una vez, al montar el componente

  // Función para cerrar el modal
  function dismiss() {
    modal.current?.dismiss(); // Si el modal está presente, se llama a la función dismiss() para cerrarlo
  }

  // Función para manejar la validación antes de cerrar el modal
  function canDismiss() {
    return new Promise<boolean>((resolve, reject) => {
      // 'present' muestra una hoja de acción (un popup con botones)
      present({
        header: 'Are you sure?', // Título del popup
        buttons: [
          {
            text: 'Yes', // Botón de confirmación
            role: 'confirm', // El rol 'confirm' indica que este botón cerrará el modal
          },
          {
            text: 'No', // Botón de cancelación
            role: 'cancel', // El rol 'cancel' indica que este botón no cerrará el modal
          },
        ],
        // Evento que se ejecuta cuando se cierra la hoja de acción
        onWillDismiss: (ev) => {
          if (ev.detail.role === 'confirm') {
            resolve(true); // Si el usuario confirma (presiona "Yes"), resolvemos la promesa con "true"
          } else {
            reject(); // Si el usuario cancela (presiona "No"), rechazamos la promesa y no cerramos el modal
          }
        },
      });
    });
  }

  // La estructura del JSX de la página
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
              <p>bici eléctrica ($1.11) / scooters eléctrico ($2.22) /vehículo eléctrico ($3.33)</p>
              <div className="stats">
                <div>
                  <p className="text-2xl font-bold">44</p>
                  <p>clásica</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">35</p>
                  <p>bicis eléctricas</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">1</p>
                  <p>puertos disponibles</p>
                </div>
              </div>
              <div className="available-bikes">
                <h3>Bicis eléctricas disponibles</h3>
                <table>
                  <thead>
                    <tr>
                      <th>ID de la bici</th>
                      <th>Rango estimado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>...0803</td>
                      <td>34 mi</td>
                    </tr>
                    <tr>
                      <td>...5667</td>
                      <td>34 mi</td>
                    </tr>
                    <tr>
                      <td>...0116</td>
                      <td>34 mi</td>
                    </tr>
                    <tr>
                      <td>...3773</td>
                      <td>34 mi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Checkbox para "Reservar" */}
            <div className="checkbox-container" style={{ marginTop: '20px' }}>
              <IonCheckbox
                checked={isChecked}
                onIonChange={(e) => setIsChecked(e.detail.checked)} // Actualiza el estado del checkbox
              />
              <IonLabel>Reservar</IonLabel>
            </div>

            {/* Botón para reservar, solo si el checkbox está marcado */}
            <IonButton expand="block" disabled={!isChecked} style={{ marginTop: '20px' }}>
              Reservar
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;