import react from "react";
import './Contact.css'

export const Contact = () => {
    return (
        <div className="formGlobal">
            <div className="divHeader">
                <h1>Contact</h1>
            </div>
            <div className="divForm">
                <form className="form">
                    <b><p>Nombre</p></b>
                    <input type="text" name="nombre"></input>

                    <b><p>Apellido</p></b>
                    <input type="text" name="apellidos"></input>

                    <b><p>Email</p></b>
                    <input type="text" name="email"></input>

                    <b><p>MOBILE NUMBER</p></b>
                    <input type="text" name="telefono"></input>

                    <b><p>DATE OF BIRTH</p></b>
                    <input type="text" name="fechaNacimiento" placeholder="aaaa-mm-dd"></input><br/>

                    <button className="btnSingUp"><b>Enviar</b></button>
                </form>
            </div>
        </div>
    )
}