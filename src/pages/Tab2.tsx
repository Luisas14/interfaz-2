import { IonInput, IonItem, IonList, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { arrowBackOutline, logoApple } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BOGOTÁ SE MUEVE</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white shadow-md rounded-lg w-3/4 flex">
            <div className="w-1/2 p-8">
              <div className="flex items-center mb-4">
                <IonIcon className="text-gray-500 mr-2" icon={arrowBackOutline} />
                <span className="text-lg font-semibold">MAPA</span>
                <span className="ml-2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  (Transportes Electricos)
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">RESERVACION</h2>
              <h1 className="text-4xl font-bold mb-6">$5.00</h1>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Bicicleta eléctrica</span>
                    <span>$1.11</span>
                  </div>
                  <div className="text-gray-500 text-sm">Transporte 1</div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span>Scooter eléctrico</span>
                    <span>$2.22</span>
                  </div>
                  <div className="text-gray-500 text-sm">Transporte 2</div>

                </div>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$3.33</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total due</span>
                  <span>$5.00</span>
                </div>
              </div>
            </div>

            <div className="w-1/2 p-8 bg-gray-100">
              <button className="w-full bg-black text-white py-3 rounded-lg mb-4 flex items-center justify-center">
                <IonIcon className="text-2xl mr-2" icon={logoApple} />
                <span className="font-semibold">Pagar</span>
              </button>
              <div className="text-center text-gray-500 mb-4">o Pagar con Tarjeta</div>

              {/* Formulario de pago */}
              <h3 className="font-semibold mb-2">INFORMACION</h3>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email</label>
                <input className="w-full border border-gray-300 rounded-lg p-2" placeholder="Email" type="email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Nombre Completo </label>
                <input className="w-full border border-gray-300 rounded-lg p-2 mb-2" placeholder="Yo soy Batman" type="text" />
                <select className="w-full border border-gray-300 rounded-lg p-2 mb-2">
                  <option>Colombia</option>
                </select>
               
              </div>

              <h3 className="font-semibold mb-2">Detalles de pago</h3>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Numero de Tarjeta</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <input className="flex-1 border-none focus:ring-0" placeholder="1234 1234 1234 1234" type="text" />
                  <img
                    alt="Visa logo"
                    className="ml-2"
                    height="20"
                    src="https://storage.googleapis.com/a1aa/image/SHaepRM3cUR4eEIm3kRFLSfn90pU3jqPbIbKsOUJmaKjAcrnA.jpg"
                    width="30"
                  />
                  <img
                    alt="Mastercard logo"
                    className="ml-2"
                    height="20"
                    src="https://storage.googleapis.com/a1aa/image/lh2AoSnjQIamJ9xfv4P5df82WCkDwqBBYgOr2g8xx64TAu1TA.jpg"
                    width="30"
                  />
                  <img
                    alt="Amex logo"
                    className="ml-2"
                    height="20"
                    src="https://storage.googleapis.com/a1aa/image/nJu94QVB0kLYOhFRAX0w9P4QSEXnpfCqSyL5h9IsTvCIA36JA.jpg"
                    width="30"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <input className="w-1/2 border border-gray-300 rounded-lg p-2 mr-2" placeholder="MM / YY" type="text" />
                <input className="w-1/2 border border-gray-300 rounded-lg p-2" placeholder="CVC" type="text" />
              </div>
              <div className="flex items-center mb-4">
                <input className="mr-2" type="checkbox" />
                <span> Confirmo la reserva</span>
              </div>
              <button className="w-full bg-purple-800 text-white py-3 rounded-lg font-semibold">Pay $5.00</button>
            </div>
          </div>
        </div>

        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
