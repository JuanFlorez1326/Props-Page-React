import './Contact.css'

export const Contact = () => {
    return (
        <div className="formGlobal">
            <div className='divConctact'>
                <div className="divForm">
                    <form className="form">
                        <b><p>Nombre</p></b>
                        <input type="text" name="nombre"></input>

                        <b><p>Apellido</p></b>
                        <input type="text" name="apellidos"></input>

                        <b><p>Email</p></b>
                        <input type="text" name="email"></input>

                        <b><p>Numero Telefonico</p></b>
                        <input type="text" name="telefono"></input>

                        <b><p>Fecha de Nacimiento</p></b>
                        <input type="text" name="fechaNacimiento" placeholder="aaaa-mm-dd"></input><br/>

                        <button className="btnEnviar"><b>Enviar</b></button>
                    </form>
                </div>
            </div>
        </div>
    )
}