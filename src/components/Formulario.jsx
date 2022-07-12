import { Fragment } from 'react';
import { MARCAS, YEARS, PLANES } from '../constants/index';

const Formulario = () => {
    return (
        <>
            <form>
                <div className="my-5">
                    <label className="block m-3 font-bol text-gray-400 uppercase">
                        Marca
                    </label>
                    <select
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-400 rounded-lg"
                    >
                        <option value="1">-- Slecciona marca</option>

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
                        name="marca"
                        className="w-full p-3 bg-white border border-gray-400 rounded-lg"
                    >
                        <option value="1">-- Slecciona año</option>

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
            />
        </>
    );
};

export default Formulario;
