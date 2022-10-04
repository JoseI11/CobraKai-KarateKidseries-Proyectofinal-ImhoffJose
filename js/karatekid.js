const arrayKarateKidpreguntas = [
    [
        "¿En que ciudad Daniel y su madre vivian antes de mudarse a la ciudad de Los Angeles?",
        "Boston",
        "Newark",
        "Orlando",
        1
    ],
    [
        "¿En que lugar Daniel y Ali se conocieron por primera vez?",
        "En un bar",
        "En el parque de diversiones",
        "En una fiesta en la playa",
        2

    ],
    [
        "¿Cuales eran los nombres de los amigos de Johnny mientras este entrenaba en el dojo de Cobra Kai?",
        "Eric,Thomas,Craig,Spencer",
        "Tommy, Jimmy, Dutch, Bobby",
        "Alex, Rick, Joseph, Henry",
        3

    ],
    [
        "¿Porque Daniel decidio no ser parte del dojo de Cobra Kai cuando estaba buscando aprender karate para poder defenderse?",
        "Por el costo que debía pagar por mes",
        "Porque vivía muy lejos del dojo",
        "Porque Johnny y sus amigos pertenecían a el",
        4
    ],
    [
        "¿Cual son los principios que el dojo Cobra Kai defiende?",
        "Tolerar a los demás , Respetar a los demás e Igualdad",
        "Responsabilidad, Orden, Perseverancia",
        "Golpear primero, Golpear duro, Sin piedad",
        5
    ],
    [
        "¿Quien fue la persona que enseño al señor Miyagi karate?",
        "Su abuelo",
        "Su hermano mayor",
        "Su padre",
        6
    ],
    [
        "¿Cuales son las 2 reglas que rigen el estilo Miyagi Do karate?",
        "Golpear duro, Golpear primero",
        "El Karate es solo para la defensa, primero aprender la regla anterior",
        "Respetar a tu oponente, Trabajar duro",
        
        7
    ],
    [
        "¿Cual fue la primera lección que Daniel recibió al empezar a practicar Miyagi Do karate?",
        "Comprender la filosofía del mismo",
        "Agregar cera con mano derecha, quitar cera con mano izquierda",
        "Concentrarse en la potencia y velocidad de uno mismo",
        8

    ],
    [
        "¿Cual fue la orden que Johnny recibió de su sensei durante el combate final contra Daniel?",
        "Que debia concentrarse en el combate",
        "Que debia atacar la pierna que uno de sus amigos había dañado en el combate anterior",
        "Que debia no escuchar los abucheos que recibia",
        9
    ],
    [
        "¿Cual fue la técnica con la cual Daniel vence a Johnny durante la fase de muerte súbita en el combate final del torneo?",
        "Patada de la grulla",
        "Patada frontal",
        "Golpe descendente con el talon",
     
        10
    ],
];
const arrayKarateKidpregunta = [
    {
        pregunta: "¿En que ciudad Daniel y su madre vivian antes de mudarse a la ciudad de Los Angeles?",
        a: "Boston",
        b:"Newark",
        c:"Orlando",
    }
    ,
    {
        pregunta:"¿En que lugar Daniel y Ali se conocieron por primera vez?",
        a:"En un bar",
        b:"En el parque de diversiones",
        c:"En una fiesta en la playa",
        

    },
    {
        pregunta:"¿Cuales eran los nombres de los amigos de Johnny mientras este entrenaba en el dojo de Cobra Kai?",
        a:"Eric,Thomas,Craig,Spencer",
        b:"Tommy, Jimmy, Dutch, Bobby",
        c:"Alex, Rick, Joseph, Henry",
        

    },
    {
        pregunta:"¿Porque Daniel decidio no ser parte del dojo de Cobra Kai cuando estaba buscando aprender karate para poder defenderse?",
        a:"Por el costo que debía pagar por mes",
        b:"Porque vivía muy lejos del dojo",
        c:"Porque Johnny y sus amigos pertenecían a el",
        
    },
    {
        pregunta:"¿Cual son los principios que el dojo Cobra Kai defiende?",
        a:"Tolerar a los demás , Respetar a los demás e Igualdad",
        b:"Responsabilidad, Orden, Perseverancia",
        c:"Golpear primero, Golpear duro, Sin piedad",
        
    },
    {
        pregunta:"¿Quien fue la persona que enseño al señor Miyagi karate?",
        a:"Su abuelo",
        b:"Su hermano mayor",
        c:"Su padre",
        
    },
    {
        pregunta:"¿Cuales son las 2 reglas que rigen el estilo Miyagi Do karate?",
        a:"Golpear duro, Golpear primero",
        b:"El Karate es solo para la defensa, primero aprender la regla anterior",
        c:"Respetar a tu oponente, Trabajar duro",
        
    },
    {
        pregunta:"¿Cual fue la primera lección que Daniel recibió al empezar a practicar Miyagi Do karate?",
        a:"Comprender la filosofía del mismo",
        b:"Agregar cera con mano derecha, quitar cera con mano izquierda",
        c:"Concentrarse en la potencia y velocidad de uno mismo",
        

    },
    {
        pregunta:"¿Cual fue la orden que Johnny recibió de su sensei durante el combate final contra Daniel?",
        a:"Que debia concentrarse en el combate",
        b:"Que debia atacar la pierna que uno de sus amigos había dañado en el combate anterior",
        c:"Que debia no escuchar los abucheos que recibia",
    },
    {
        pregunta:"¿Cual fue la técnica con la cual Daniel vence a Johnny n el combate final del torneo?",
        a:"Patada de la grulla",
        b:"Patada frontal",
        c:"Golpe descendente con el talon",
     
        
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    
];


function primerInterrogante() {
    let preguntas;
    let contadorResultado = 0;
    let numeroPregunta = 0;
    for (let i = 0; i < arrayKarateKidpreguntas.length; i++) {
        preguntas = prompt(`${arrayKarateKidpregunta[i].pregunta}. Escriba la opcion que cree correcta de estas opciones: A- ${arrayKarateKidpregunta[i].a}, B- ${arrayKarateKidpregunta[i].b}, C-${arrayKarateKidpregunta[i].c}`);
    
        if(preguntas=="b" && numeroPregunta == 0){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas=="c" && numeroPregunta == 1){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas=="b" && numeroPregunta == 2){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas=="c" && numeroPregunta == 3){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas=="c" && numeroPregunta == 4){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas=="c" && numeroPregunta == 5){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas == "b" && numeroPregunta == 6){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas == "b" && numeroPregunta == 7){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas == "b" && numeroPregunta == 8){
            contadorResultado++;
            numeroPregunta++;
        }else if(preguntas == "a" && numeroPregunta == 9){
            contadorResultado++;
            numeroPregunta++;
        }
    }
    alert(puntajeCuestionario(contadorResultado));
    /*let intentos = 3;
    let correcto = 0;
    let primeraPregunta = prompt("Cual es la marca del auto que Johnny Lawrence maneja en la primera temporada?");
    while (intentos != 0) {

        if (primeraPregunta.toLowerCase() == "pontiac firebird") {
            alert("Respuesta correcta");
            break;
        } else {
            alert(`Respuesta Incorrecta, le quedan ${intentos} intentos`);
            intentos = intentos - 1;
            primeraPregunta = prompt("Cual es la marca del auto que Johnny Lawrence maneja en la primera temporada?");
            correcto = 2;
        }
    }
    if (correcto == 2) {
        alert("No te quedan más intentos");
    }*/
}

primerInterrogante();

function puntajeCuestionario(puntaje) {
    if (puntaje >= 0 && puntaje <= 3) {
        return `Tu puntaje final es de ${puntaje}. Deberias ver de nuevo la pelicula de Karate Kid, Vuelve a intentarlo`;
    } else if (puntaje > 3 && puntaje <= 6) {
        return `Tu puntaje final es de ${puntaje}. Sabes lo suficiente acerca de la pelicula, Solo debes agregar cera y sacar cera para lograr mejores resultados`;
    } else if (puntaje > 6 && puntaje <= 9) {
        return `Tu puntaje final es de ${puntaje}. Eres un gran conocedor acerca de la pelicula, pero te falta un poco más para ser el campeon`;
    } else {
        return `Tu puntaje final es de ${puntaje}. Eres el campeon de todo el valle, Felicitaciones!!!`;
    }
}
function segundoInterrogante() {
    let segundaPregunta = prompt("¿Johnny Lawrence gano 2 veces el torneo de All Valley?. Responde con si o no");

    if (segundaPregunta.toUpperCase() == "SI") {
        alert("Respuesta correcta, fue en los años 1982 y 1983");
    } else {
        alert("Respuesta incorrecta");
    }
}
//segundoInterrogante();


