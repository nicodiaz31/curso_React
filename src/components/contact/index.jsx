import React from 'react';

const ContactComponent = () => {
    const fontStyle = {
        fontWeight: 900
    };

    return(
        <>
            <div className="container container__contacto">
                <div className="row">
                    <div className="contacto__formulario col-md">
                        <form className="text-center p-5" action="#!">
                            <h2 style={{fontWeight: 900}}>Contáctanos!</h2>
                            <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Nombre"/>
                            <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail"/>
                            <input type="text" id="defaultContactFormPhone" className="form-control mb-4" placeholder="Teléfono (Opcional)"/>
                            <label style={{fontWeight: 900}}>Desea ser contacto por teléfono?</label>
                            <select className="browser-default custom-select mb-4">
                                <option value="" disabled>Escoja una opción</option>
                                <option value="1" selected>Si</option>
                                <option value="2">No</option>
                            </select>
                            <div className="form-group">
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Mensaje"/>
                            </div>
                            <div className="custom-control custom-checkbox mb-4">
                                <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy"/>
                                <label className="custom-control-label" htmlFor="defaultContactFormCopy">Desea recibir Newsletter?</label>
                            </div>
                            <button className="btn btn-info" type="reset" style={{margin: 5}} >Limpiar formulario</button>
                            <button className="btn btn-info" type="submit">Enviar Formulario</button>
                        </form>
                    </div>
                    <div className="contacto__ubicacion col-md" id="contacto__area">
                        <p style={{fontWeight: 900}}>Ubicación:</p>
                        <p>Avenida Congreso 620, CABA, Argentina</p>
                        <p style={{fontWeight: 900}}>Teléfonos:</p>
                        <p>+54 9 11 8932 2346</p>
                        <p>+54 9 11 1845 8745</p>
                    </div>			
                </div>
            </div>
        </>
    )
}

export default ContactComponent;