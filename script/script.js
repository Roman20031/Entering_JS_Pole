const nabidka = ["CPU", "GPU", "RAM", 5, [3,5, "tea"]];
const kosik = [];

/*console.log("Zde je pole:", kosik[])
function vypis(array, ouput){

}

function Add(){

}
*/

function vypis_pole_do_elementu(array, output){
    let out_value = document.getElementById(output);
    for(let i = 0; i<array.length; i++){
        out_value.innerHTML += i + 1 + ". " + array[i] + "<br>"
    }
}



vypis_pole_do_elementu(nabidka, "content");



