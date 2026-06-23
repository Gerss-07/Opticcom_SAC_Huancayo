const formRegistro = document.getElementById('formulario');
let personas = JSON.parse(localStorage.getItem('clavePersonas')) || [];

function guardar() {
    let nombre = document.getElementById('name').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('phone').value;
    let servicio = document.getElementById('servicio').value;

    let persona = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        servicio: servicio
    };

    personas.push(persona);
    localStorage.setItem('clavePersonas', JSON.stringify(personas));
}

function mostrar() {
    const registros = document.getElementById('registros');
    if (!registros) return;
    registros.innerHTML = '';
    personas.forEach((persona, indice) => {
        registros.innerHTML += `
            <tr>
                <td>${indice + 1}</td>
                <td>${persona.nombre}</td>
                <td>${persona.correo}</td>
                <td>${persona.telefono}</td>
                <td>${persona.servicio}</td>
            </tr>
        `;
    });
}

function limpiar() {
    formRegistro.reset();
}

if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        guardar();
        mostrar();
        limpiar();
        alert("¡Tu solicitud fue enviada con éxito!");
        console.log(personas);
    });

    mostrar();
}