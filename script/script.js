//TESTING JAVASCRIPT

function register() {

    //Main form Validatios
    let errorArray = ["Name", "Email", "Password", "Phone", "Birthday"]
        
    
    const inputForm = document.getElementsByClassName("form-input")
    const errorMsg = document.getElementsByClassName("input-error")
    console.log(inputForm)
    //console.log(errorMsg)
        
    //Name validation check
    if(inputForm[0].value.length < 4 || !inputForm[0].value.match(/[ ]/g)) {
        errorMsg[0].innerHTML = errorArray[0] + " Invalid";
    } else {
        errorMsg[0].innerHTML = "";
    }

    //Email validation check
    if(inputForm[1].value.match(/[A-Z]/) || inputForm[1].value.match(/[À-ú]/) || inputForm[1].value.length == 0) {
        errorMsg[1].innerHTML = errorArray[1] + " Invalid";
    } else {
        errorMsg[1].innerHTML = "";
    }

    //Password validation check
    if(inputForm[2].value.match(/[^6-9]/) || inputForm[1].value.length == 0) {
        errorMsg[2].innerHTML = errorArray[2] + " Invalid";
    } else {
        errorMsg[2].innerHTML = "";
    }
        
    //Phone validation check
    if(inputForm[3].value.length != 11 || inputForm[3].value.match(/\D/g)) {
        errorMsg[3].innerHTML = errorArray[3] + " Invalid";
    } else {
        errorMsg[3].innerHTML = "";
    }

    //Date validation check
    let date = new Date(inputForm[4].value);
    let age = 2022 - date.getFullYear() 
    if(age < 18) {
        errorMsg[4].innerHTML = errorArray[4] + " Invalid";
    } else {
        errorMsg[4].innerHTML = "";
    }
        
    //Footer Form Validation Check
    //Checkbox Validation check

    //const checkBox = document.getEl

}