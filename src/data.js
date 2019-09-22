//Filtro para pempleabilidad, recibe la data del país seleccionado
const filterEMP = (data, i) => {
   let dataCountry = Object.values(data.indicators);

    //Realiza el filtro por género y por laboral/empleo, retorna el valor de cada opción en el select
    if (dataCountry[i].indicatorCode.includes(".FE.") && (dataCountry[i].indicatorCode.includes(".EMP.") || dataCountry[i].indicatorCode.includes(".PART.") || dataCountry[i].indicatorCode.includes(".TLF."))) {
        let nameOption = dataCountry[i].indicatorName;
        return nameOption;
    }
}

// Filtro para educación, recibe la data del país seleccionado e índice
const filterED = (data, i) => {
    let dataCountry = Object.values(data.indicators);

    //Realiza el filtro por género y por educación, retorna el valor de cada opción del select
    if (dataCountry[i].indicatorCode.includes(".FE.") && dataCountry[i].indicatorName.includes("educación")) {
        let nameOption = dataCountry[i].indicatorName;
        return nameOption;
    }
}

window.filterEMP = filterEMP;
window.filterED = filterED;