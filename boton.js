const fondo =document.querySelector(".fondo")
const loginlink= document.querySelector(".login-link")
const registrarlink= document.querySelector(".registrar-link")
const btn =document.querySelector(".btn")
const iconocerrar= document.querySelector(".icono-cerrar")

registrarlink.addEventListener("click", () => {
    fondo.classList.add('active');
})
loginlink.addEventListener("click", () => {
    fondo.classList.remove('active');
})
btn.addEventListener("click", () => {
    fondo.classList.add('active-btn');
})
iconocerrar.addEventListener("click", () => {
    fondo.classList.remove('active-btn');
})

document.querySelector('.btnI').addEventListener('click', function(event) {
    event.preventDefault(); 
    validarNumeroControl();  
});

function validarNumeroControl() {
    const numeroControl = document.getElementById('numeroControl').value;
    const mensaje = document.getElementById('comentario');
    
    mensaje.textContent = "";

    if (numeroControl.length !== 8) {
        mensaje.className = 'invalido';
        alert("Error: El número debe tener 8 dígitos.");
        return false;
    }

    const parte1 = numeroControl.substring(0, 2); 
    const parte2 = numeroControl.substring(2, 4);  
    const parte3 = numeroControl.substring(4, 8); 

    if (parte1 < 18 || parte1 > 24) {
        mensaje.className = 'invalido';
        alert("Error: Los primeros dos dígitos deben estar entre 18 y 24.");
        return false;
    }

    if (parte2 !== '84') {
        mensaje.className = 'invalido';
        alert("Error: Los segundos dos dígitos deben ser 84.");
        return false;
    }

    if (parte3.length !== 4 || isNaN(parte3)) {
        mensaje.className = 'invalido';
        alert("Error: Los últimos cuatro dígitos deben ser un número válido.");
        return false;
    }

   alert("inicio correcto")
    mensaje.className = 'valido';
    return true;
}
