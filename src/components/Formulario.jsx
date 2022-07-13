import { Fragment } from 'react';
import useCotizador from '../hooks/useCotizador';
import { MARCAS, YEARS, PLANES } from '../constants/index';
import Error from './Error';

    

const Formulario = () => {

    const { datos, handleChangeDatos, error, setError } = useCotizador();

    const handleSubmit = e => {
        e.preventDefault();
        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios');
            return;
        }
        
        setError('');
    }

    return (
        <>
            {error && <Error />}
            <form>
                <div className="my-5">
                    <label className="block m-3 font-bol text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-400 rounded-lg"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.marca}
                    >
                        <option value="">-- Slecciona marca</option>

                        {MARCAS.map((marca) => (
                            <option key={marca.id} value={marca.id}>
                                {marca.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label className="block m-3 font-bol text-gray-400 uppercase">
                        Año
                    </label>
                    <select
                        name="year"
                        className="w-full p-3 bg-white border border-gray-400 rounded-lg"
                        onChange={e => handleChangeDatos(e)}
                        value={datos.year}
                    >
                        <option value=''>-- Slecciona año</option>

                        {YEARS.map((year, index) => (
                            <option key={index} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label className="block m-3 font-bol text-gray-400 uppercase">
                        Eligue un plan
                    </label>
                    <div className="flex gap-3 items-center">
                        {PLANES.map((plan, index) => (
                            <Fragment key={plan.id}>
                                <label htmlFor="">{plan.nombre}</label>
                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChangeDatos(e)}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
            </form>
            <input
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 w-full transition-colors text-white cursor-pointer p-3 uppercase font-bold"
                value="Cotizar"
                onClick={handleSubmit}
            />
        </>
    );
};

export default Formulario;
