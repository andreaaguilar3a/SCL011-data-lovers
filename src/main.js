/* Manejo del DOM */

//const dataWorldBank = WORLDBANK
//const dataBrasil = WORLDBANK.BRA.indicators
//const dataPeru = WORLDBANK.PER.indicators
//const dataChile = WORLDBANK.CHL.indicators
//const dataMex = WORLDBANK.MEX.indicators

//Función para crear un SELECT en HTML con distintos id (así las opciones no se van sumando dentro de la lista del select)
const country = document.getElementsByClassName('country');


for (let i = 0; i < country.length; i++) {
    country[i].addEventListener("click", () => {  //evento click
        let countryName = country[i].value; //define variable para que compare, toma el valor del boton seleccionado y lo compara con las demas 
        if (countryName === 'BRA') { //pregunta por brasil...etc, hace lo mismo con cada pais si es igual igual a BRA (o el que sea)se va a la data
            const data = window.WORLDBANK.BRA; // variable de los del WORLDBANK
            selectCountries('brasil', data); //llama a la funcion selctCountries "brasil" que es el id del select y la data
        } else if (countryName === 'CHL') {
            data = window.WORLDBANK.PER;
            selectCountries('peru', data);
        } else if (countryName === 'PER') {
            data = window.WORLDBANK.MEX;
            selectCountries('mexico', data);
        } else if (countryName === 'MEX') {
            data = window.WORLDBANK.CHL;
            selectCountries('chile', data);
        }

    });
}
const selectCountries = (id, data) => {
    //Variable que crea un elemento SELECT en HTML
    let select = document.createElement("SELECT");
    //Una vez creado el select le asigna el id (brasil, peru, mexico o chile) Equivalente a <select id="brasil">OPCIONES</select>
    select.setAttribute("id", id); //el "id" del select es la variable id
    document.body.appendChild(select);

    //Recorre según largo del objeto según país
    for (let i = 0; i < data.indicators.length; i++) {
        //Crea elemento option, que son las opciones dentro del selectes equivalente a hacerlo en HTML:
        let option = document.createElement("option"); //es lo mismo que <select name="brasil"> <option value="ejemplo">Ejemplo</option> </select> 
        let country = data.indicators[i]; //variable creada para darle el "indice" de la data correspondiente a lo que se le pide
        option.setAttribute("value", i); //es el atributo de la opcion esteo fijan el valor de la opcion escogida dentro del select (el listado) 
        if (country.indicatorCode.includes(".FE.") && country.indicatorCode.includes(".EMP.")) { //Verifica cuales son los que contienen .FE. y .EMP.
            let description = document.createTextNode(country.indicatorName);// variable creada para nombrar al textNode creado con los datos de country e indicatorName, se usa indicatorName porque es un string y se puede imprimir
            option.appendChild(description); //Nombre de la opción
            document.getElementById(id).appendChild(option);//Asigna al select correspondiente según id de la opción que cumple con la condición del if mas arriba
        }
    }
}


