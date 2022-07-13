import { CotizadorProvider } from './context/CotizadorProvider';
import AppSeguro from "./components/AppSeguro"
import useCotizador from './hooks/useCotizador';

function App() {

  return (
    <CotizadorProvider>
      <AppSeguro />
    </CotizadorProvider>
  )
}

export default App
