const forename = document.getElementById("forename")
const surname = document.getElementById("surname")
const age = document.getElementById("age")

function submit(){
    if(forename.value == '' || surname.value == '' || age.value == ''){
        document.getElementById("alert-form").style.display = block
    } else if(forename.value.trim() !== '' || surname.value.trim() !== '' || age.value.trim() !== ''){
       
    }
}