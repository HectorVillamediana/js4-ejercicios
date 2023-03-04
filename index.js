
// ## 💻 Ejercicios

// ### Ejercicios: Nivel 1

// 1. Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

let age = parseInt(prompt("Ingrese su edad: "));
let shortAge = 18 - age;
age >= 18 ?
    console.log("Tienes", age, "Tienes edad para conducir") :
    console.log("Tienes", age, "Podras conducir en:", shortAge, "años");

//    ```sh
//    Ingrese su edad: 30
//    Tiene la edad suficiente para conducir.

//    Ingrese su edad:15
//    Te faltan 3 años para conducir.
//    ```

// 2. Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

let myAge_ = parseInt(prompt("Ingrese mi1512 edad: "));
let yourAge_ = parseInt(prompt("Ingrese su edad: "));

myAge_ > yourAge_ ?
    console.log("Eres", myAge_ - yourAge_, "mayor que yo.") :
    console.log("Eres", yourAge_ - myAge_, "menor que yo");

//    ```sh
//    Ingrese su edad: 30
//    Eres 5 años mayor que yo.
//    ```

// 3. Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

let a = parseInt(prompt("Valor de a: "));
let b = parseInt(prompt("Valor de b: "));

a > b ?
    console.log(a, "es mayor que", b) :
    console.log(a, "es menor que", b);
//    - Usando if else
//    - operador ternario.

//    ```js
//    let a = 4;
//    let b = 3;
//    ```

//    ```sh
//      4 es mayor que 3
//    ```

// 4. Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

let valor = parseInt(prompt("Ingrese un numero: "));
valor % 2 == 0 ?
    console.log("El numero es par") :
    console.log("El numero es impar");

//    ```sh
//    Ingrese un número: 2
//    2 es un número par

//    Ingrese un número: 9
//    9 es un número impar
//    ```

// ### Ejercicios: Nivel 2

// 1. Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:

let calificacion = parseInt(prompt("Ingrese calificacion del estudiante: "))


if (calificacion >= 80) {
    console.log("La nota del estudiante es A");
} else if (calificacion >= 70 && calificacion <= 89) {
    console.log("La nota del estudiante es B");
} else if (calificacion >= 60 && calificacion <= 69) {
    console.log("La nota del estudiante es C");
} else if (calificacion >= 50 && calificacion <= 59) {
    console.log("La nota del estudiante es D");
} else {
    console.log("La nota del estudiante es E");
}
//    - 80-100, A
//    - 70-89, B
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F


// 2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano.

let season = prompt("Coloque el mes en el que estamos").toLocaleLowerCase();

switch (season) {
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Estamos en otoño");
        break;
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Estamos en invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Estamos en primavera");
        break;
    default:
        console.log("Estamos en verano");
        break;
}

//    Si la entrada del usuario es :

//    - Septiembre, Octubre o Noviembre, la temporada es Otoño.
//    - Diciembre, Enero o Febrero, la temporada es Invierno.
//    - Marzo, Abril o Mayo, la temporada es Primavera
//    - Junio, Julio o Agosto, la temporada es Verano

// 3. Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.

let today = prompt("Ingrese el día").toLocaleLowerCase();

switch (today) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Hoy es", today, "es dia laborable");
        break;
    case "sábado":
    case "domingo":
        console.log("Hoy es", today, "es fin de semana");
        break;
    default:
        console.log("Dia no valido");
        break;
}

// ```sh
//     ¿Qué día es hoy? Sábado
//     El sábado es fin de semana.

//     ¿Qué día es hoy? sábAdo
//     El sábado es fin de semana.

//     ¿Qué día es hoy? Viernes
//     El viernes es un día laborable.

//     ¿Qué día es hoy? ViErNes
//     El viernes es un día laborable.
// ```

// ### Ejercicios: Nivel 3

// 1. Escribe un programa que diga el número de días en un mes.

let month = prompt("Introduzca un mes: ");

switch (month) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("El mes", month, "tiene 31 días.");
        break;
    case "abril":
    case "junio":
    case "agosto":
    case "septiembre":
    case "noviembre":
        console.log("El mes", month, "tiene 31 días.");
        break;
    case "febrero":
        console.log(month, "tiene 28 dìas.");
        break;
    default:
        console.log("Día no valido");
        break;
}


// ```sh
//   Introduce un mes: Enero
//   Enero tiene 31 días.

//   Introduce un mes: ENERO
//   enero tiene 31 dias

//   Introduce un mes: Febrero
//   Febrero tiene 28 días.

//   Introduce un mes: FEbrero
//   Febrero tiene 28 días.
// ```

// 2. Escribe un programa que diga el número de días en un mes, ahora considera un año bisiesto.

let month_ = prompt("Introduzca otro mes: ");
let year = parseInt(prompt("Ingrese el año: "));
let loap = true;

switch (month_) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("El mes", month_, "tiene 31 días.");
        break;
    case "abril":
    case "junio":
    case "agosto":
    case "septiembre":
    case "noviembre":
        console.log("El mes", month_, "tiene 30 días.");
        break;
    case "febrero":

        if (year == !2000) {
            if ((year / 4).isInteger && !((year / 100).isInteger)) {
                loap = true;
            } else {
                loap = false;
            }
        } else {
            loap = true;
        }
        loap == true ? 
            console.log("El año es", year, "es bisiesto por tanto Febero tiene 29 dìas"):
            console.log("El año es", year, "no es bisiesto por tanto Febero tiene 29 dìas");
        break;
    default:
        console.log("Mes no valido");
        break;
}