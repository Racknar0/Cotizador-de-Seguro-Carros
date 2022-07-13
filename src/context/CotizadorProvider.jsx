import { createContext, useState } from "react";
import {obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero} from "../helpers/index";

const CotizadorContext = createContext();

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: "",
        year: "",
        plan: ""
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })

    }

    const cotizaSeguro = () => {
        // Base
        let resultado = 2000;

        // Obtener diferencia de año
        const diferencia = obtenerDiferenciaYear(datos.year);

        // Restar el 3% al valor del seguro
        resultado -= ((diferencia * 3) * resultado) / 100;

        // Americano 15% 
        // Asiatico 5%
        // Europeo 30%
        resultado *= calcularMarca(datos.marca);

        // Basico aumenta 20%
        // Completo aumenta 50%
        resultado *= calcularPlan(datos.plan);
        
        // Formatear el resultado
        resultado = formatearDinero(resultado);

        setCargando(true);

        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);

    }
 
    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizaSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export { CotizadorProvider };

export default CotizadorContext;