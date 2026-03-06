const forename = document.getElementById("forename")
const surname = document.getElementById("surname")
const age = document.getElementById("age")
const alertForm = document.getElementById("alert-form")

function submit(){
    if(forename.value.trim() === '' || surname.value.trim() === '' || age.value.trim() === ''){
        alertForm.className = "text-red-700";
        alertForm.style.display = "block";
    } else {
        alertForm.textContent = "Data diterima";
        alertForm.className = "text-green-700";
        alertForm.style.display = "block";
        forename.value = '';
        surname.value = '';
        age.value = '';
    }                 
}