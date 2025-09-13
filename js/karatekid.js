//Variables globales usadas en toda la aplicacion
let opciones = document.getElementById("opciones");
let opcionKarateKid = document.getElementById("radioKarateKid");
let opcionKarateKidII = document.getElementById("radioKarateKidII");
let opcionKarateKidIII = document.getElementById("radioKarateKidIII");
let opcionCobraKai = document.getElementById("radioCobraKai");
let comenzar;
let pregunta;
let respuestaA;
let respuestaB;
let respuestaC;
let saga = " ";
let nuevoArray = [];
let arrayDesordenado = [];
let arrayPuntajesJugadores = [];
////////Variables de tipo global para manejar el panel de preguntas////////////////////////
let botonComenzarjuego;
let nuevoPanelpreguntas;
let botonSiguientepregunta;
let preguntaTitulo;
let div1;
let radio1;
let label1;
let div2;
let radio2;
let label2;
let div3;
let radio3;
let label3;
let contPregunta = 0;
let arrayTransformado
let seleccionPelicula;
let idioma;
let div;
let radio;
let label;
let botonTabla;
let pruebaAr = [];
/////////////////////////////////////////
//Funcion para tomar las preguntas y respuestas del array de objetos dentro del archivo preguntasKarateKid-I-II-III.json
const obtenerDatospreguntasjson = () => {
    fetch("../preguntasKarateKid-I-II-III.json")
        .then(resultado => resultado.json())
        .then(res => {
            pruebaAr = res;

        })
}

obtenerDatospreguntasjson();
//Clase para calcular el puntaje de cada jugador
class CuestionarioKarateKidCobraKai {
    constructor(nombreJugador, puntaje) {
        this.nombreJugador = nombreJugador;
        this.puntaje = puntaje;
    }
    /*constructor(puntaje) {
        this.puntaje = puntaje;

    }*/

    calcularPuntaje = () => {

        this.puntaje++;
        /*alert(`el puntaje es de ${this.puntaje}`);*/
        return this.puntaje;
    }
}
//Funcion para crear el objeto de cada jugador con su puntaje
class NombrePuntaje {
    constructor(nameJugador, scorePuntaje) {
        this.nameJugador = nameJugador;
        this.scorePuntaje = scorePuntaje;
    }
}

opcionKarateKid.addEventListener("click", (e) => {
    if (localStorage.getItem("Karate Kid III") != null) {
        localStorage.removeItem("Karate Kid III");
    } else if (localStorage.getItem("Karate Kid II") != null) {
        localStorage.removeItem("Karate Kid II");
    }else if (localStorage.getItem("Cobra Kai") != null) {
        localStorage.removeItem("Cobra Kai");
    }

    let imagen = "../media/karate-kid-momento-verdad.webp"

    let sagas = e.target.value;
    crearImagen(imagen, sagas);
    seleccionPelicula = "Karate Kid";
    filtrarPreguntas(sagas);

});



opcionKarateKidII.addEventListener("click", (e) => {
    if (localStorage.getItem("Karate Kid III") != null) {
        localStorage.removeItem("Karate Kid III");
    } else if (localStorage.getItem("Karate Kid") != null) {
        localStorage.removeItem("Karate Kid");
    }else if (localStorage.getItem("Cobra Kai") != null) {
        localStorage.removeItem("Cobra Kai");
    }
    let imagen = "../media/Karate-Kid-II.webp";
    let sagas = e.target.value;


    crearImagen(imagen, sagas)
    seleccionPelicula = "Karate Kid II";
    filtrarPreguntas(sagas);


});

opcionKarateKidIII.addEventListener("click", (e) => {
    if (localStorage.getItem("Karate Kid") != null) {
        localStorage.removeItem("Karate Kid");
    } else if (localStorage.getItem("Karate Kid II") != null) {
        localStorage.removeItem("Karate Kid II");
    } else if (localStorage.getItem("Cobra Kai") != null) {
        localStorage.removeItem("Cobra Kai");
    }

    let sagas = e.target.value
    let imagen = "../media/Karate-Kid-III.webp";
    crearImagen(imagen, sagas)
    seleccionPelicula = "Karate Kid III";
    filtrarPreguntas(sagas);
})

opcionCobraKai.addEventListener("click", (e) => {
    if (localStorage.getItem("Karate Kid") != null) {
        localStorage.removeItem("Karate Kid");
    } else if (localStorage.getItem("Karate Kid II") != null) {
        localStorage.removeItem("Karate Kid II");
    } else if (localStorage.getItem("Karate Kid III") != null) {
        localStorage.removeItem("Karate Kid III");
    }

    let sagas = e.target.value
    let imagen = "../media/cobra-kai.webp";
    crearImagen(imagen, sagas)
    seleccionPelicula = "Cobra Kai";
    filtrarPreguntas(sagas);
})
const crearImagen = (imagen, saga) => {

    let ventanaPricipal = document.querySelector(".ventanaPrincipal");
    ventanaPricipal.style.height = 'auto';
    let etiquetaImagen = document.querySelector(".idImagen");


    etiquetaImagen.setAttribute("src", imagen);

    etiquetaImagen.setAttribute("alt", "imagen" + " " + saga);
}
//funcion para cambiar el orden de las preguntas
const arrayPreguntas = (parametroArray) => {
    let resultado = parametroArray.sort(function () { return Math.random() - 0.5 });
    return resultado;
}
//Funcion para filtrar las preguntas de la trivia segun cada pelicula de la trilogia
function filtrarPreguntas(saga) {



    if (saga == "Karate Kid") {
       
        arrayTransformado = pruebaAr.filter((elemento) => elemento.saga == "Karate Kid");
        localStorage.setItem("Karate Kid", JSON.stringify(arrayTransformado));

        nuevoArray = JSON.parse(localStorage.getItem("Karate Kid"))
        arrayDesordenado = arrayPreguntas(nuevoArray);

    } else if (saga == "Karate Kid II") {

        arrayTransformado = pruebaAr.
            filter((elemento) => elemento.saga == "Karate Kid II");
 
        localStorage.setItem("Karate Kid II", JSON.stringify(arrayTransformado));

        nuevoArray = JSON.parse(localStorage.getItem("Karate Kid II"))
        arrayDesordenado = arrayPreguntas(nuevoArray)
    } else if (saga == "Karate Kid III") {
        arrayTransformado = pruebaAr.
            filter((elemento) => elemento.saga == "Karate Kid III");

        localStorage.setItem("Karate Kid III", JSON.stringify(arrayTransformado));
        nuevoArray = JSON.parse(localStorage.getItem("Karate Kid III"))
        arrayDesordenado = arrayPreguntas(nuevoArray)
    }else if (saga == "Cobra Kai"){
         arrayTransformado = pruebaAr.
            filter((elemento) => elemento.saga == "Cobra Kai");

        localStorage.setItem("Cobra Kai", JSON.stringify(arrayTransformado));
        nuevoArray = JSON.parse(localStorage.getItem("Cobra Kai"))
        arrayDesordenado = arrayPreguntas(nuevoArray)
    }

}


// --- CAMBIO: listeners para idioma ---
let radioEN = document.getElementById("radioEN");
let radioES = document.getElementById("radioES");

radioEN.addEventListener("change", (e) => {
    if (e.target.checked) idioma = "en";
});
radioES.addEventListener("change", (e) => {
    if (e.target.checked) idioma = "es";
});

//Funcion para crear el boton de Inicio antes de entrar al juego
let botonInicio = () => {
    botonComenzarjuego = document.createElement("button");


    botonComenzarjuego.setAttribute("id", "nuevoBoton");
    botonComenzarjuego.innerHTML = "Comenzar juego";
    let botonInicio = document.getElementById("panelPreguntas");
    botonComenzarjuego.classList.add('d-flex', 'justify-content-center', 'mt-3', 'start', "colorBoton");
    botonInicio.classList.add('d-flex', 'justify-content-center', 'mb-0');
    botonInicio.append(botonComenzarjuego);
}
botonInicio();

//Función para crear el panel de pregunta y respuestas junto con el boton que permite avanzar de pregunta
let crearPanelpreguntas = (boton, panelPadre, jugador1) => {
    /*let panelPadre=document.getElementById("panelPreguntas");*/
    panelPadre.removeChild(boton);
    nuevoPanelpreguntas = document.createElement("DIV");
    nuevoPanelpreguntas.setAttribute("id", "preguntas");
    nuevoPanelpreguntas.classList.add('card');
    panelPadre.append(nuevoPanelpreguntas);
    preguntaTitulo = document.createElement("p")
    preguntaTitulo.setAttribute("id", "titulo");
    nuevoPanelpreguntas.append(preguntaTitulo);
    for (j = 0; j < 3; j++) {
        switch (j) {
            case 0:
                div1 = document.createElement("DIV");
                div1.classList.add("form-check")
                nuevoPanelpreguntas.append(div1);
                radio1 = document.createElement("input");
                radio1.setAttribute("id", "opcion1");
                radio1.setAttribute("type", "radio");
                radio1.setAttribute("name", "flexRadioDefault");
                radio1.setAttribute("value", "a");
                radio1.classList.add("form-check-input");
                div1.append(radio1);
                label1 = document.createElement("label");
                label1.setAttribute("id", "opcionA")
                label1.classList.add("form-check-label");
                div1.append(label1);
                break;

            case 1:


                div2 = document.createElement("DIV");
                div2.classList.add("form-check")
                nuevoPanelpreguntas.append(div2);
                radio2 = document.createElement("input");
                radio2.setAttribute("id", "opcion2");
                radio2.setAttribute("type", "radio");
                radio2.setAttribute("name", "flexRadioDefault");
                radio2.setAttribute("value", "b");
                radio2.classList.add("form-check-input");
                div2.append(radio2);
                label2 = document.createElement("label");
                label2.setAttribute("id", "opcionB")
                label2.classList.add("form-check-label");
                div2.append(label2);
                break;
            case 2:
                // crearRadios("opcion3","c","opcionC");
                div3 = document.createElement("DIV");
                div3.classList.add("form-check")
                nuevoPanelpreguntas.append(div3);
                radio3 = document.createElement("input");
                radio3.setAttribute("id", "opcion3");
                radio3.setAttribute("type", "radio");
                radio3.setAttribute("name", "flexRadioDefault");
                radio3.setAttribute("value", "c");
                radio3.classList.add("form-check-input");
                div3.append(radio3);
                label3 = document.createElement("label");
                label3.setAttribute("id", "opcionC")
                label3.classList.add("form-check-label");
                div3.append(label3);
                break;
            default:
                break;
        }

    }
    let botonAvancepregunta = crearbotonSiguientepregunta(botonSiguientepregunta, nuevoPanelpreguntas);
    funcionAvancepreguntas(botonAvancepregunta, jugador1);

}





//Función para deseleccionar las respuestas una vez que se avanza de pregunta
function unselect() {
    document.querySelectorAll('[name=flexRadioDefault]').forEach((respuestaSeleccionada) => respuestaSeleccionada.checked = false);
}


const mostrarTablapuntajeboton = () => {
    let panelQuestion = document.querySelector("#divPuntaje");

    botonTabla = document.createElement("button");
    botonTabla.setAttribute("id", "botonPuntaje");
    botonTabla.classList.add("colorBoton")
    botonTabla.innerText = "Mostrar puntaje";
    panelQuestion.append(botonTabla);
}


// Esta es la función más importante ya que se encarga de avanzar las preguntas como asi tambien calcular el puntaje de cada jugador
const funcionAvancepreguntas = (botonSiguiente, jugadorNuevo) => {
    let prueba;
    let resultadoFinal1 = 0;
    botonSiguiente.addEventListener("click", () => {
        if (!document.querySelector('input[id="opcion1"]:checked') && !document.querySelector('input[id="opcion2"]:checked') && !document.querySelector('input[id="opcion3"]:checked')) {
            let informacion = "Debe seleccionar una respuesta";
            modalPregunta(informacion);
        } else {
            if (contPregunta <= 14) {

                if (document.querySelector('input[id="opcion1"]:checked')) {
                    prueba = "a";
                } else if (document.querySelector('input[id="opcion2"]:checked')) {
                    prueba = "b";
                } else if (document.querySelector('input[id="opcion3"]:checked')) {
                    prueba = "c";
                }

                if (arrayDesordenado[contPregunta].correcta == prueba) {
                    Toastify({
                        duration: 800,
                        text: "Respuesta Correcta",
                        className: "info",
                        style: {

                            background: "linear-gradient(to right, #00b09b, lightgreen)",
                        }
                    }).showToast();
                    resultadoFinal1 = jugadorNuevo.calcularPuntaje();


                }
            }
            if (contPregunta != 14) {
                contPregunta++;
                // --- CAMBIO: Mostrar pregunta y opciones según idioma ---
                if (idioma === "en") {
                    preguntaTitulo.innerText = arrayDesordenado[contPregunta].pregunta_en;
                    label1.innerText = arrayDesordenado[contPregunta].a_en;
                    label2.innerText = arrayDesordenado[contPregunta].b_en;
                    label3.innerText = arrayDesordenado[contPregunta].c_en;
                } else {
                    preguntaTitulo.innerText = arrayDesordenado[contPregunta].pregunta;
                    label1.innerText = arrayDesordenado[contPregunta].a;
                    label2.innerText = arrayDesordenado[contPregunta].b;
                    label3.innerText = arrayDesordenado[contPregunta].c;
                }
                unselect();
            } else {


                for (i = 0; i < localStorage.length; i++) {
                    key = localStorage.key(i);

                    if (key != "arregloJugadores" || key != "Karate Kid II" || key != "Karate Kid III" || key != "Karate Kid") {
                        localStorage.removeItem(key);
                    }
                }



                localStorage.setItem(jugadorNuevo.nombreJugador, jugadorNuevo.puntaje);

                crearPuntajeRespuestas(jugadorNuevo.puntaje);
                mostrarTablapuntajeboton();

                let scoreJugadores = new NombrePuntaje(jugadorNuevo.nombreJugador, jugadorNuevo.puntaje)
                if (localStorage.getItem("arregloJugadores") == null) {

                    arrayPuntajesJugadores.push(scoreJugadores);

                    localStorage.setItem("arregloJugadores", JSON.stringify(arrayPuntajesJugadores));

                } else {
                    agregarArrayPuntaje(scoreJugadores);
                }
                botonTabla.addEventListener("click", () => {
                    let arrayNuevo = JSON.parse(localStorage.getItem("arregloJugadores"));
        
       
                    crearTablapuntaje(arrayNuevo);
                    let headPuntaje = document.querySelector("#headerPuntaje");
                    headPuntaje.addEventListener("click", () => {
                        ordenarTablapuntajes(1)
                    })
                })


                localStorage.removeItem(seleccionPelicula);
                let botonRecargapagina = document.getElementById("botonRecarga");
                botonRecargapagina.addEventListener("click", () => {
                    location.reload();
                })

            }
        }
    });
}

//Funcion que se encarga de ordenar ascendentemente o descendentemente la tabla de puntajes. si se selecciona el header esta funcion realiza el ordenamiento
function ordenarTablapuntajes(numeroColumna) {
    let tablaScore, filas, switching, i, primerElemento, segundoElemento, shouldSwitch, dir, switchcount = 0;

    tablaScore = document.getElementById("puntajesTabla");
    switching = true;

    dir = "ascendente";

    while (switching) {

        switching = false;
        filas = tablaScore.rows;
        /*el for recorre todaas las filas de la tabla con excepcion del header de la tabla*/
        for (i = 1; i < (filas.length - 1); i++) {

            shouldSwitch = false;

            primerElemento = filas[i].getElementsByTagName("TD")[numeroColumna];
            segundoElemento = filas[i + 1].getElementsByTagName("TD")[numeroColumna];

            if (dir == "ascendente") {
                if (parseFloat(primerElemento.innerHTML) > parseFloat(segundoElemento.innerHTML)) {

                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "descendente") {
                if (parseFloat(primerElemento.innerHTML) < parseFloat(segundoElemento.innerHTML)) {

                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {

            filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
            switching = true;

            switchcount++;
        } else {

            if (switchcount == 0 && dir == "ascendente") {
                dir = "descendente";
                switching = true;
            }
        }
    }
}
//Funcion que crea la tabla de puntajes y se encarga de volver a jugar gracias al boton volver a jugar
const crearTablapuntaje = (arrayScorejugadores) => {
    let ventanaPricipal1 = document.querySelector(".ventanaPrincipal");
    let tituloparaPuntaje = document.createElement("h3");
    tituloparaPuntaje.innerText = "Lista de puntajes";
    let panelPuntajes = document.querySelector("#divPuntaje")
    panelPuntajes.remove();
    let divTabla = document.getElementById("tableroPuntaje");
    divTabla.append(tituloparaPuntaje);
    let tablaEstructura = document.createElement("table");
    tablaEstructura.classList.add("table", "table-bordered", "border-primary")
    tablaEstructura.style.width = "70%";

    tablaEstructura.style.marginTop = '10px';
    tablaEstructura.setAttribute("id", "puntajesTabla")

    let tablaHead = document.createElement("thead");
    tablaEstructura.append(tablaHead);
    let tablaCuerpo = document.createElement("tbody");
    tablaHead.innerHTML += `<tr >
    <th id="headerNombre">Jugador</th>
    <th id="headerPuntaje">Puntaje</th>
    </tr>`
    for (let i = 0; i < arrayScorejugadores.length; i++) {
        let nombrePlayer = `<td>${arrayScorejugadores[i].nameJugador}</td>`;
        let puntajePlayer = `<td>${arrayScorejugadores[i].scorePuntaje}</td>`;
        tablaCuerpo.innerHTML += `<tr>${nombrePlayer + puntajePlayer}</tr>`
    }
    tablaEstructura.append(tablaCuerpo);
    divTabla.append(tablaEstructura);
    let tablaPuntajes = document.getElementById("puntajesTabla");
    let cantidadFilas = tablaPuntajes.getElementsByTagName('tr').length;

    if (cantidadFilas <= 5) {
        ventanaPricipal1.style.height = '372px';

    } else {
        ventanaPricipal1.style.height = 'auto';
    }
    let boton = botonVolverajugar();

    divTabla.append(boton);
    let botonRecargapagina = document.getElementById("botonRecarga");
    botonRecargapagina.addEventListener("click", () => {
        location.reload();
    })
}
// Funcion encargada de tomar el objeto con el nombre del jugador y su puntaje para agregarlos en un array de objetos de puntajes y nombres y luego guardarlos en el local storage
const agregarArrayPuntaje = (objetoPuntaje) => {

    let puntajeArraycadena = localStorage.getItem("arregloJugadores");
    let puntajeArray = JSON.parse(puntajeArraycadena);
    puntajeArray.push(objetoPuntaje);
    localStorage.setItem("arregloJugadores", JSON.stringify(puntajeArray));
}

//Boton que se encarga de empezar el juego mostrando la primera pregunta del array filtrado por saga
botonComenzarjuego.addEventListener("click", (e) => {
    let nombreVerificar = "^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    let campoNombre = document.getElementById("textoNombre").value;

    // --- CAMBIO: Validar idioma seleccionado ---
    if (!idioma) {
        textoModal = "Debe seleccionar un idioma";
        modalPregunta(textoModal);
        return;
    }

    if (document.querySelector('input[id="radioKarateKidII"]:checked') || document.querySelector('input[id="radioKarateKid"]:checked') || document.querySelector('input[id="radioKarateKidIII"]:checked') && campoNombre != '' || document.querySelector('input[id="radioCobraKai"]:checked') && campoNombre != '') {
        if (campoNombre != '') {
            if (campoNombre.match(nombreVerificar)) {

                document.getElementById("opciones").style.display = 'none';
                document.getElementById("contenedor").style.display = 'none';
                document.getElementById("ingresoNombre").style.display = 'none';

                filtrarPreguntas();
     
                let panel = document.getElementById("panelPreguntas");

                let boton = document.getElementById("nuevoBoton");

                jugadores = new CuestionarioKarateKidCobraKai(campoNombre, 0);

                localStorage.setItem(jugadores.nombreJugador, jugadores.puntaje);
          
                crearPanelpreguntas(boton, panel, jugadores);

                // --- CAMBIO: Mostrar la primera pregunta y opciones según idioma ---
                if (idioma === "en") {
                    preguntaTitulo.innerText = nuevoArray[contPregunta].pregunta_en;
                    label1.innerText = nuevoArray[contPregunta].a_en;
                    label2.innerText = nuevoArray[contPregunta].b_en;
                    label3.innerText = nuevoArray[contPregunta].c_en;
                } else {
                    preguntaTitulo.innerText = nuevoArray[contPregunta].pregunta;
                    label1.innerText = nuevoArray[contPregunta].a;
                    label2.innerText = nuevoArray[contPregunta].b;
                    label3.innerText = nuevoArray[contPregunta].c;
                }

            } else {
                textoModal = "Debe ingresar su nombre sin numeros o signos que no sean acentos";
                modalPregunta(textoModal);
            }
        } else {
            textoModal = "Debe ingresar su nombre";
            modalPregunta(textoModal);
        }
    } else if (campoNombre != '' && !document.querySelector('input[id="radioKarateKidII"]:checked') && !document.querySelector('input[id="radioKarateKid"]:checked') && !document.querySelector('input[id="radioKarateKidIII"]:checked') && !document.querySelector('input[id="radioCobraKai"]:checked')) {
        textoModal = "Debe seleccionar una opción";
        modalPregunta(textoModal)

    } else {
        textoModal = "Debe seleccionar una opción e ingresar su nombre";
        modalPregunta(textoModal);

    }
})

// Funcion para mostrar un mensaje en caso de que se produzca algun error como por ejemplo, dejar opciones sin seleccionar o campos vacios o con valores incorrectos
let modalPregunta = (texto) => {
    Swal.fire({
        position: 'top',
        icon: 'warning',
        title: "ATENCIÓN!!!✋",
        text: texto,
        allowOutsideClick: false,
        cancelButtonAriaLabel: 'Ok'
    })
}
//Funcion que crea el boton de avanzar de pregunta
const crearbotonSiguientepregunta = (boton, panel) => {
    boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.setAttribute("id", "comenzarJuego");
    boton.classList.add("start");
    boton.innerText = "Siguiente Pregunta";
    panel.append(boton);
    return boton;
}
// Funcion que crea el boton volver a jugar
const botonVolverajugar = () => {
    let botonRecargarJuego = document.createElement("button");
    botonRecargarJuego.setAttribute("type", "button");
    botonRecargarJuego.setAttribute("id", "botonRecarga");
    botonRecargarJuego.classList.add('d-flex', 'justify-content-center', 'mb-4', 'mt-4', "colorBoton");
    botonRecargarJuego.innerText = "Volver a jugar";
    return botonRecargarJuego;
}



////////Funcion para crear el panel de puntaje junto con el boton utilizado para volver a cargar la pagina para jugar de nuevo
let crearPuntajeRespuestas = (puntaje) => {
    let mainVentana = document.querySelector(".ventanaPrincipal");
    mainVentana.style.height = '372px';
    let divPanelImagen = document.querySelector(".posterKarateKid");
    divPanelImagen.style.display = 'none';
    let panelPadrepreguntas = document.getElementById("panelPreguntas")
    let paneldePreguntas = document.getElementById("preguntas");
    paneldePreguntas.style.display = 'none';
    let panelPuntaje = document.createElement("DIV");
    panelPuntaje.classList.add("puntaje", "d-flex", "justify-content-center");
    panelPuntaje.setAttribute("id", "divPuntaje");
    panelPadrepreguntas.append(panelPuntaje);
    let textoPuntaje = document.createElement("h6");
    textoPuntaje.setAttribute("id", "puntajeTotal");
    textoPuntaje.innerText = `Tu puntaje es de ${puntaje}`;
    panelPuntaje.append(textoPuntaje);
    let botonJugardenuevo = botonVolverajugar();
    panelPuntaje.append(botonJugardenuevo);
}