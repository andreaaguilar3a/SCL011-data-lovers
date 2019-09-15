const data1 = window.WORLDBANK;

const data = window.WORLDBANK;
var datapais;

const chileButton = document.getElementById("buttonChl");
chileButton.addEventListener("click", () => {
    showDiv();
    datapais = data.CHL;
});

const peruButton = document.getElementById("buttonPer");
peruButton.addEventListener("click", () => {
    showDiv();
    datapais = data.PER;
});

const brazilButton = document.getElementById("buttonBra");
brazilButton.addEventListener("click", () => {
    showDiv();
    datapais = data.BRA;
});

const mexicoButton = document.getElementById("buttonMex");
mexicoButton.addEventListener("click", () => {
    showDiv();
    datapais = data.MEX;
});

const empButton = document.getElementById("buttonEMP");
empButton.addEventListener("click", () => {

    document.getElementById("root").innerHTML = "";
    let pais = Object.values(datapais.indicators);
    let select = document.getElementById("empF");
    let arrayPais = [];

    for (let i = 0; i < pais.length; i++) {
        arrayPais[i] = filterEMP(datapais, i);
        if(filterEMP(datapais, i)){
            select.options[select.options.length] = new Option(arrayPais[i], i);
        }
    }

    if (select.style.visibility === "hidden") {
        select.style.visibility = "";
    } else {
        select.style.visibility = "hidden";
    }

});

const edButton = document.getElementById("buttonED");
edButton.addEventListener("click", () => {

    document.getElementById("root").innerHTML = "";
    let pais = Object.values(datapais.indicators);
    let select = document.getElementById("empF");
    let arrayPais = [];

    for (let i = 0; i < pais.length; i++) {
        arrayPais[i] = filterED(datapais, i);
        if(filterED(datapais, i)){
            select.options[select.options.length] = new Option(arrayPais[i], i);
        }
    }

    if (select.style.visibility === "hidden") {
        select.style.visibility = "";
    } else {
        select.style.visibility = "hidden";
    }

});

function showDiv() {
    document.getElementById("buttonEMP").style.visibility = "";
    document.getElementById("buttonED").style.visibility = "";
}

function hideDiv() {
    document.getElementById("buttonEMP").style.visibility = "hidden";
    document.getElementById("buttonED").style.visibility = "hidden";
}


/*const containerRoot = document.getElementById("root");
const selectCountries = document.getElementById("countries");

// FILTRO DOM
selectCountries.addEventListener("change", () => {

    let condition = selectCountries.options(selectCountries.selectedIndex).text;
    console.log(condition)
})

//INICIO BOTÓN CHILE

const chileButton = document.getElementById("buttonChl");
chileButton.addEventListener("click", () => {
    document.getElementById("root").innerHTML = "";
    let chile = Object.values(data.PER.indicators);
    let select = document.getElementById("selectChilean");
    let arrayChile = [];

    for (let i = 0; i < chile.length; i++) {
        arrayChile[i] = chile[i].indicatorName;
        select.options[select.options.length] = new Option(arrayChile[i], i);
    }

    select.style.visibility = "";
});
//FIN BOTÓN CHILE

//INICIO BOTÓN PERU
const peruButton = document.getElementById("buttonPer");
peruButton.addEventListener("click", () => {
    document.getElementById("root").innerHTML = "";
    let peru = Object.values(data.PER.indicators);
    let select = document.getElementById("selectPerubian");
    let arrayPeru = [];

    for (let i = 0; i < peru.length; i++) {
        arrayPeru[i] = peru[i].indicatorName;
        select.options[select.options.length] = new Option(arrayPeru[i], i);
    }

    select.style.visibility = "";
});
//FIN BOTÓN PERU

//INICIO BOTÓN BRASIL
const brazilButton = document.getElementById("buttonBra");
brazilButton.addEventListener("click", () => {
    document.getElementById("root").innerHTML = "";
    let brazil = Object.values(data.BRA.indicators);
    let select = document.getElementById("selectBrazilian");
    let arrayBrazil = [];

    for (let i = 0; i < brazil.length; i++) {
        arrayBrazil[i] = brazil[i].indicatorName;
        select.options[select.options.length] = new Option(arrayBrazil[i], i);
    }

    select.style.visibility = "";
});
//FIN BOTÓN BRASIL

//INICIO BOTÓN MÉXICO
const mexicoButton = document.getElementById("buttonMex");
mexicoButton.addEventListener("click", () => {
    document.getElementById("root").innerHTML = "";
    let mexico = Object.values(data.MEX.indicators);
    let select = document.getElementById("selectMexican");
    let arrayMexico = [];

    for (let i = 0; i < mexico.length; i++) {
        arrayMexico[i] = mexico[i].indicatorName;
        select.options[select.options.length] = new Option(arrayMexico[i], i);
    }

    select.style.visibility = "";
});
//FIN BOTÓN MÉXICO
*/