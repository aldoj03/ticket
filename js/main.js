
   
function checkNumber(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
    
   
function checkText(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}
    
window.onload = ()=> {
    const select = document.querySelector('.select_container select')

    select.addEventListener("focus", function (){
        console.log(select.parentElement);
        select.parentElement.classList.add("clicked")
        })
    select.addEventListener("blur", function (){
        console.log(select.parentElement);
        select.parentElement.classList.remove("clicked")
        })
}