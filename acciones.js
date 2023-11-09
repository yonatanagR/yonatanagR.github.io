const btnSwitch = document.querySelector('#switch');
//Botones del Menu para mostrar los perfiles de los creadores de fan Art
const AuronBtn = document.querySelector('#AuronBtn')
const RubiusBtn = document.querySelector('#RubiusBtn');

//Botones del perfil de los creadores y las secciones
const AuriBtn = document.querySelector('#AuriBtn');

btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardamos el modo en localstorage
    /*El metodo de contains('dark') nos va a permitir comprobar si en este caso la lista
    de clases del body contiene la clase de dark*/
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true')
    } else {
        localStorage.setItem('dark-mode', 'false')
    }
});

//obtenemos el modo actual.
//El método getItem() de la interfaz Storage devuelve el valor de la clave cuyo nombre se le pasa por parámetro.
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.toggle('active');
} else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}

    //botones del menu
    AuronBtn.addEventListener('click', ()=>{
        if (Auron.className == "ocultar") {
            Auron.className = "visible";
            Rubius.className = "ocultar";
        } else {
            Auron.className = "ocultar";
        }
    });

    RubiusBtn.addEventListener('click', ()=>{
        if (Rubius.className == 'ocultar') {
            Rubius.className = "visible";
            Auron.className = "ocultar";
        } else {
            Rubius.className = "ocultar";
        }
    });

    //Botones para mostrar la seccion del artista del fan Art
    AuriBtn.addEventListener('click', ()=>{
        if (SeccionAuri.className == 'ocultar') {
            SeccionAuri.className = "visible";
        } else {
            SeccionAuri.className = "ocultar";
        }
    });