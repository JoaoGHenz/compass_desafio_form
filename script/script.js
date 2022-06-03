//TESTING JAVASCRIPT

function register() {

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
        if(inputForm[1].value.match(/[A-Z]/) || inputForm[1].value.match(/[À-ú]/)) {
            errorMsg[1].innerHTML = errorArray[1] + " Invalid";
        } else {
            errorMsg[1].innerHTML = "";
        }

}