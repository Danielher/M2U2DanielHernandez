/*
Fecha Inicio:20/06/2022
Autor: Daniel Hernandez
Descripcion: Aplicacino de algoritmo para recibir x cantidad de
incriopcion de materias calcular su valor , aplicando un 
descuento del 20% y sumando algunos costos fijos.
*/

const formulario = document.querySelector("#formulario");

//Creando evento

formulario.addEventListener( "submit", validarFormulario )

//funciones

function validarFormulario(e){
    e.preventDefault();
    
    let ObtenerDatosForm = new FormData(formulario);
    let tablaDatosRef = document.getElementById("tablaDatos");
    let filaNueva = tablaDatosRef.insertRow(-1);

    let nuevaCelda = filaNueva.insertCell(0);
    nuevaCelda.textContent = ObtenerDatosForm.get("name");

    nuevaCelda = filaNueva.insertCell(1);
    nuevaCelda.textContent = ObtenerDatosForm.get("materia");

    nuevaCelda = filaNueva.insertCell(2);
    nuevaCelda.textContent = ObtenerDatosForm.get("valor");

    /*let eliminarFila = filaNueva.insertCell(4);
    let botonEliminar = document.createElement("button");
    deleteButton.textContent = "Borrar";
    eliminarFila.appendChild(botonEliminar)

    botonEliminar.addEventListener("click", Event) => {
        Event.target.parentNode.remove()
    }*/


}