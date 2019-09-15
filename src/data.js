window.WORLDBANK;

filterEMP = (data, i) => {
    var dataPais = Object.values(data.indicators);
    
        if (dataPais[i].indicatorCode.includes(".FE.") && dataPais[i].indicatorCode.includes(".EMP.")){
            var nameOption = dataPais[i].indicatorName;
            return nameOption;
        }
}

filterED = (data, i) => {
    var dataPais = Object.values(data.indicators);
    
        if (dataPais[i].indicatorCode.includes(".FE.") && dataPais[i].indicatorName.includes("educación")){
            var nameOption = dataPais[i].indicatorName;
            return nameOption;
        }
}


/* otro filtro

filterFem = (filteredData, WORLDBANK, selectCountries) => { 
    filteredData=filterCountries(WORLDBANK, selectCountries);
    const resultFilterFemale = WORLDBANK.filterFem(element => {
        return element.countries === selectCountries;
    });
    return resultFilterCountries;

}
window.filter.filterCountries = filterCountries;


*/



/*filterData: (data) => {
    for (i = 0; i < data.indicators.length; i++) {
    let country = data.indicators[i];
    if (country.indicatorCode.includes(".FE.")) {
        console.log(".FE");
    }
}
}*/