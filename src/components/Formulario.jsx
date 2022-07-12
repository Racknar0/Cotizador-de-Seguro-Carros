import { MARCAS, YEARS } from '../constants/index'

const Formulario = () => {
  return (
    <>
    <form>
        <div className="my-5">
            <label className="block m-3 font-bol text-gray-400 uppercase">
                Marca
            </label>
            <select name="marca"
                    className="w-full p-3 bg-white border border-gray-400 rounded-lg">
                <option value="1">-- Slecciona marca</option>

                {MARCAS.map(marca => (
                    <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                ))}

            </select>
        </div>
        <div className="my-5">
            <label className="block m-3 font-bol text-gray-400 uppercase">
                Año
            </label>
            <select name="marca"
                    className="w-full p-3 bg-white border border-gray-400 rounded-lg">
                <option value="1">-- Slecciona año</option>

                {YEARS.map((year,index) => (
                    <option key={index} value={year}>{year}</option>
                ))}

            </select>
        </div>
    </form>

    </>
  )
}

export default Formulario
