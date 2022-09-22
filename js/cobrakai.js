function primerInterrogante() {
    let intentos = 3;
    let correcto = 0;
    let primeraPregunta = prompt("Cual es la marca del auto que Johnny Lawrence maneja en la primera temporada?");
    while (intentos != 0) {
        
        if (primeraPregunta.toUpperCase() == "PONTIAC FIREBIRD") {
            alert("Respuesta correcta");
            break;
        } else {
            alert(`Respuesta Incorrecta, le quedan ${intentos} intentos`);
            intentos = intentos - 1;
            primeraPregunta = prompt("Cual es la marca del auto que Johnny Lawrence maneja en la primera temporada?");
            correcto = 2;
        }
    }
    if(correcto==2){
        alert("No te quedan más intentos");
    }
}

primerInterrogante();

function segundoInterrogante() {
    let segundaPregunta=prompt("¿Johnny Lawrence gano 2 veces el torneo de All Valley?. Responde con si o no");
    
    if(segundaPregunta.toUpperCase()=="SI"){
        alert("Respuesta correcta, fue en los años 1982 y 1983");
    }else{
        alert("Respuesta incorrecta");
    }
}
segundoInterrogante();