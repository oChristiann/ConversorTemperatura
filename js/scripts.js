
var div = document.getElementById("result");

function convert_result(){

    let campo = parseInt(document.getElementById("campo").value);

    let ops = document.getElementById("operadores").value;

    let text;

    switch(ops){

        case "fahrenheit":
            text = `<p> ${campo * 9/5 + 32}° Fahrenheit </p>`;
            break;
        default:
            text = `<p> ${campo + 273.15}° Kelvin </p>`;
    }

    div.innerHTML = text;

}