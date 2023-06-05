let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let correo = document.getElementById("correo");
let matricula = document.getElementById("matricula");
let turno = document.getElementById("turno");

let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let correoEditar = document.getElementById("correoEditar");
let matriculaEditar = document.getElementById("matriculaEditar");
let turnoEditar = document.getElementById("turnoEditar");

let idTarea = document.getElementById("idTarea");

let btnGuardar = document.getElementById("btnGuardar");
let listaTareas = document.getElementById("listaTareas");

let tareas = [];

let agregarDatos = () => {
    tareas.push({
        nombre: nombre.value,
        correo: correo.value,
        matricula: matricula.value,
        turno: turno.value

    });
    console.log(tareas);
}

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss","modal");
    btnGuardar.click();
}

let resetearFormulario = () => {
    nombre.value = '';
    correo.value = '';
    matricula.value = '';
    turno.value='';

}

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row' id=${indice}>
         <div class='col-2 border p-3 textoalineado'>
                    <strong>${tarea.matricula}</strong>
                </div>
                <div class='col-3 border p-3 textoalineado'>
                    <strong>${tarea.nombre}</strong>
                </div>
                <div class='col-3 border p-3 textoalineado'>
                    <strong>${tarea.correo}</strong>
                </div>
                <div class='col-2 border p-3 textoalineado'>
                    <strong>${tarea.turno}</strong>
                </div>
               
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-success'
                    onClick="editarTarea(${indice});" 
                    data-bs-toggle="modal" data-bs-target="#exampleModalEditar">
                    <i class="bi bi-pencil"></i> Editar </buttom>
                </div>
                <div class='col-1 border p-3 text-center'>
                    <button class='btn btn-danger' onClick ="borrarTarea(this,${indice});"><i class="bi bi-trash"></i> Borrar</button>
                </div>
            </div>
        `;
    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    resetearFormulario();
    mostrarTareas();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas [indice].nombre = nombreEditar.value;
    tareas [indice].correo = correoEditar.value;
    tareas [indice].matricula = matriculaEditar.value;
    tareas [indice].turno = turnoEditar.value;
    mostrarTareas();
    cerrarModalEditar();
});

let borrarTarea = (boton, indice) => {
    if(confirm("¿Estas seguro de eliminar este registro?"))
    {

        boton.parentElement.parentElement.remove();
        tareas.splice(indice,1);
    }
}

let editarTarea = (indice) => {
    matriculaEditar.value = tareas[indice].matricula;
    nombreEditar.value = tareas[indice].nombre;
    correoEditar.value = tareas[indice].correo;
    turnoEditar.value = tareas[indice].turno;
    idTarea.value = indice;
}

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
    btnGuardarEditar.click();
}


