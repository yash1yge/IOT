import Routers from './Routers/Routers';
import { BrowserRouter } from 'react-router-dom';
import "flatpickr/dist/themes/material_green.css";
import './Resources/MainStyle.css'

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
