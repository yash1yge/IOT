import Routers from './Routers/Routers';
import "flatpickr/dist/themes/material_green.css";
import './Resources/MainStyle.css'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
