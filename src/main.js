const data1 = window.WORLDBANK;

let peru = Object.values(data1.PER.indicators);

const peruButton = document.getElementById("buttonPer");
peruButton.addEventListener("click", dataPeru);

function dataPeru() {
    let initialDiv1 = document.getElementById("root").innerHTML = "";

    for (let i = 0; i < peru.length; i++) {
        let container = document.createElement("div");
        let nameIndicatorPer = document.createElement("h4");

        nameIndicatorPer.textContent = peru[i].indicatorName;
        container.appendChild(nameIndicatorPer);
        document.getElementById("root").appendChild(container).innerHTML;
    }
}

let mexico = Object.values(data1.MEX.indicators);

const mexicoButton = document.getElementById("buttonMex");
mexicoButton.addEventListener("click", dataMexico);

function dataMexico() {
    let initialDiv2 = document.getElementById("root").innerHTML = "";

    for (let i = 0; i < mexico.length; i++) {
        let container = document.createElement("div");
        let nameIndicatorMex = document.createElement("h4");

        nameIndicatorMex.textContent = mexico[i].indicatorName;
        container.appendChild(nameIndicatorMex);
        document.getElementById("root").appendChild(container).innerHTML;

    }
}

let brasil = Object.values(data1.BRA.indicators);

const brasilButton = document.getElementById("buttonBra");
brasilButton.addEventListener("click", dataBrasil);

function dataBrasil() {
    let initialDiv3 = document.getElementById("root").innerHTML = "";

    for (let i = 0; i < brasil.length; i++) {
        let container = document.createElement("div");
        let nameIndicatorBra = document.createElement("h4");

        nameIndicatorBra.textContent = brasil[i].indicatorName;
        container.appendChild(nameIndicatorBra);
        document.getElementById("root").appendChild(container).innerHTML;

    }
}

let chile = Object.values(data1.CHL.indicators);

const chileButton = document.getElementById("buttonChl");
chileButton.addEventListener("click", dataChile);

function dataChile() {
    let initialDiv4 = document.getElementById("root").innerHTML = "";

    for (let i = 0; i < chile.length; i++) {
        let container = document.createElement("div");
        let nameIndicatorChl = document.createElement("h4");

        nameIndicatorChl.textContent = chile[i].indicatorName;
        container.appendChild(nameIndicatorChl);
        document.getElementById("root").appendChild(container).innerHTML;
    }
}