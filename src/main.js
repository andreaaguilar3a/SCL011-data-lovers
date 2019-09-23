const data = window.WORLDBANK;
let dataCountry;
let selectEMP = document.getElementById("empF");
let selectED = document.getElementById("edF");

//Si el botón presionado es 'CHILE', guardará en dataCountry la data de Chile
const chileButton = document.getElementById("buttonChl");
chileButton.addEventListener("click", () => {
    hideDiv();
    showDiv();
    dataCountry = data.CHL;
});

//Si el botón presionado es 'PERÚ', guardará en dataCountry la data de Perú
const peruButton = document.getElementById("buttonPer");
peruButton.addEventListener("click", () => {
    hideDiv();
    showDiv();
    dataCountry = data.PER;
});

//Si el botón presionado es 'BRASIL', guardará en dataCountry la data de Brasil
const brazilButton = document.getElementById("buttonBra");
brazilButton.addEventListener("click", () => {
    hideDiv();
    showDiv();
    dataCountry = data.BRA;
});

//Si el botón presionado es 'MÉXICO', guardará en dataCountry la data de México
const mexicoButton = document.getElementById("buttonMex");
mexicoButton.addEventListener("click", () => {
    hideDiv();
    showDiv();
    dataCountry = data.MEX;
});

//Función que muestra los botones para el filtrado por empleabilidad y educación
function showDiv() {
    document.getElementById("buttonEMP").style.visibility = "";
    document.getElementById("buttonED").style.visibility = "";
}

//Función que esconde los select de cada filtro
function hideDiv() {
    document.getElementById("empF").style.visibility = "hidden";
    document.getElementById("edF").style.visibility = "hidden";
}

//EMPLEABILIDAD SEGÚN PAIS

const empButton = document.getElementById("buttonEMP");
empButton.addEventListener("click", () => {

    document.getElementById("root").innerHTML = "";
    let country = Object.values(dataCountry.indicators);
    let arrayCountry = [];

    //Verifica que el select no esté vacío, si no lo está borrará las opciones
    //Así evitará que al presionar dos veces el botón se dupliquen las opciones
    if (selectEMP.length != 0) {
        for (let i = 0; i < selectEMP.length; i++) {
            selectEMP.innerHTML = "";
        }
    }

    for (let i = 0; i < country.length; i++) {
        //El array va guardando lo que retorne el filtro de empleabilidad
        arrayCountry[i] = filterEMP(dataCountry, i);
        //Si el filtro retorna datos entonces añade la opción al select
        //Esto es para evitar que deje espacios vacíos en el select y solo muestre los datos filtrados
        if (filterEMP(dataCountry, i)) {
            selectEMP.options[selectEMP.options.length] = new Option(arrayCountry[i], i);
        }
    }

    //Muestra el select de empleabilidad y esconde el de educación
    selectEMP.style.visibility = "";
    selectED.style.visibility = "hidden";
});

//EDUCACIÓN SEGÚN PAIS A ELECCION

const edButton = document.getElementById("buttonED");
edButton.addEventListener("click", () => {

    document.getElementById("root").innerHTML = "";
    let country = Object.values(dataCountry.indicators);
    let arrayCountry = [];

    //Verifica que el select no esté vacío, si no lo está borrará las opciones
    //Así evitará que al presionar dos veces el botón se dupliquen las opciones
    if (selectED.length != 0) {
        for (let i = 0; i < selectED.length; i++) {
            selectED.innerHTML = "";
        }
    }

    for (let i = 0; i < country.length; i++) {
        //El array va guardando lo que retorne el filtro de educación
        arrayCountry[i] = filterED(dataCountry, i);
        //Si el filtro retorna datos entonces añade la opción al select
        //Esto es para evitar que deje espacios vacíos en el select y solo muestre los datos filtrados
        if (filterED(dataCountry, i)) {
            selectED.options[selectED.options.length] = new Option(arrayCountry[i], i);
        }
    }

    //Muestra el select de educación y esconde el de empleabilidad
    selectED.style.visibility = "";
    selectEMP.style.visibility = "hidden";
});