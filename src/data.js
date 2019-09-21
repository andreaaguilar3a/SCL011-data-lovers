window.WORLDBANK;

//Filtro para empleabilidad, recibe la data del país seleccionado e índice
filterEMP = (data, i) => {
    let dataCountry = Object.values(data.indicators);

    //Realiza el filtro por género y por empleabilidad, retorna el valor de cada opción del select
    if (dataCountry[i].indicatorCode.includes(".FE.") && dataCountry[i].indicatorCode.includes(".EMP.")) {
        let nameOption = dataCountry[i].indicatorName;
        return nameOption;
    }
}

// Filtro para educación, recibe la data del país seleccionado e índice

filterED = (data, i) => {
    let dataCountry = Object.values(data.indicators);

    //Realiza el filtro por género y por educación, retorna el valor de cada opción del select
    if (dataCountry[i].indicatorCode.includes(".FE.") && dataCountry[i].indicatorName.includes("educación")) {
        let nameOption = dataCountry[i].indicatorName;
        return nameOption;
    }
}