// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//#endregion

let intentos = 0;
let limitador = 3;
let lista_amigos = [];

function limpiarCaja() {
    document.querySelector('#nbreAmigo').value = '';
    document.querySelector('#nbreAmigo').focus();
}

function condicionesIniciales() {
    //asignarTextoElemento('h1','Juego del número secreto!');
    //asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //numeroSecreto = generarNumeroSecreto();
    console.log(intentos);
    intentos = 0;
    lista_amigos = [];
}

function sortearAmigo() {
    //
    cant_elem = lista_amigos.length,
    numeroAleat =  Math.floor(Math.random()*cant_elem);
    console.log(numeroAleat);
    //document.querySelector('#nbreAmigo').value = '';
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = `El amigo escogido fue: ${lista_amigos[numeroAleat]}`;
    condicionesIniciales();
}


function agregarAmigo() {
    //esto lo coloco por si se juega por segunda vez. Sinó habría que poner otro boton
    if (intentos == 0) {
        document.getElementById("resultado").innerHTML = "";
    }
    intentos++;
    if (intentos > limitador) {
        window.alert("No se puede agregar mas Amigos. Ir a Sortear")
        return
    }
    let nbre_amigo = document.getElementById('nbreAmigo').value;
    //Si el numero generado está incluido en la lista 
    if (typeof nbre_amigo === "string" && nbre_amigo.length === 0) {
        window.alert("Ingrese texto válido")
        return
    }
    if (lista_amigos.includes(nbre_amigo)) {
        window.alert("ya existe ese amigui")
        //return generarNumeroSecreto();
        } else {
        let lista_amostrar = document.getElementById("listaAmigos");
        let nuevo_amigo = document.createElement("li");
        nuevo_amigo.textContent = nbre_amigo;
        nuevo_amigo.setAttribute("role", "listitem");
        lista_amostrar.appendChild(nuevo_amigo);
        lista_amigos.push(nbre_amigo);
        console.log(nbre_amigo);
        limpiarCaja();
        if (intentos == limitador) {
            window.alert(`Es el último amigo. Llegaste a ${limitador}`)
            return
        }
        //return numeroGenerado;
    }
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    //document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
