// Objeto de forma de funcion 
class Proyecto{

    constructor(nombre, descripcion, tecnologias, linkGithHub, imagen){
        this.nombre = nombre
        this.descripcion = descripcion
        this.tecnologias = tecnologias
        this.linkGitHub = linkGithHub
        this.imagen = imagen
    }

    mostrarAtributos() {
        console.log( `nombre: ${this.nombre} \n descripcion: ${this.descripcion} \n tecnologias: ${this.tecnologias} \n link: ${this.linkGitHub} \n imagen: ${this.imagen}`)
    }

    proyectoHTML(){

        return `<fieldset class="proyecto" id="proyecto-factura">

            <legend><h3 class="titulo-proyecto"> ${this.nombre} </h3></legend>
        
            <div class="contenedor-proyecto">
                
                <div class="mitad-pantalla-horizontal" id="descripcion-proyecto">
        
                    <p>${this.descripcion}</p>
                    
                    <p id="tecnologias-proyectos"> Tecnologías: <br> ${this.tecnologias.join(" | ")} </p>
                    <hr>
                    
                    <div class="enlaces-proyecto">
        
                        <div class="box-ep">
                            <div class="marco-logo"> 
                        <a href="${this.linkGitHub}">
                            <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                        </a>
                        </div>
                        </div>
        
                    </div>
                </div>
                <div class="mitad-pantalla-horizontal" id="imagen-proyecto-contenedor">
                    <img class="imagen-proyecto" id="width" src="img/${this.imagen}"/>
                </div>
            </div>

            
        
        </fieldset>
        <br>
        `

    }

}

// Objeto para almacenar el contenido de los proyectos 
const listaProyectos = [

    new Proyecto("Aplicación para la gestión de incidencias", 
        "Aplicación Android para la gestión de incidencias, enfocada a empresas con departamentos de infraestructura de TI (AVANTI BY FRIGILUX. C.A.), que le permite un mayor acceso a la información al administrador y a los técnicos de los tickets generados por los clientes internos en tiempo real, y automatizar el cierre de las incidencias registradas.", 
        ["Kotlin", "Jetpack Compose", " Apache POI", "Ktor", "MVVM", "Supabase", "PostgreSQL", "PostREST"], 
        "https://github.com/Danielp281297/proyecto-avanti.git", 
        "Aplicacion_incidencias.png"),
    new Proyecto("AGUAVIVA ", 
            "Prototipo de una aplicación de recarga de agua de la empresa Aguaviva C.A, el cual el usuario podrá realizar sus pagos de recarga de agua, y tenerlos registrados en línea; en las sucursales más cercanas.", 
            ["Kotlin", "HTML", "CSS", "Javascript", "SQLite"], 
            "https://github.com/Danielp281297/Aguaviva.git", 
            "aguaviva-portafolio.png"),
    new Proyecto("Módulo de facturación del sistema de punto de venta", 
        "Módulo de facturación diseñado en Java para el sistema de punto de ventas de videojuegos GameStore, con diferentes métodos de pago en diferentes monedas, y  con valor de divisas actualizables.", 
        ["Java" , "JavaFX" , "SceneBuilder"], 
        "https://github.com/Danielp281297/Ticket-Fiscal-Gamestore.git", 
        "facturacion-gamestore-portafolio.png")

]

function proyectosContenido(){

    
    listaProyectos.forEach(proyecto => {
        proyecto.proyectoHTML()
    })



    const lista = document.getElementById("lista-proyectos");
    lista.innerHTML = "";

    for(i = 0; i < listaProyectos.length; i++){
        lista.innerHTML += listaProyectos[i].proyectoHTML()
    }

    
    
}

proyectosContenido()
