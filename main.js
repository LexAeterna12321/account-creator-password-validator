btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    const login = document.querySelector("#loginInput").value;
    const pass = document.querySelector("#passwordInput").value;
    const alertW = document.querySelector("#alerts");

   
    if(login == "" && pass == ""){
        alertW.innerHTML = "Please enter some chars in login and password area";
    }
    else if (pass == "") {
        alertW.innerHTML = "Please enter some chars in password area";
    }
     else if (login == "") {
         alertW.innerHTML = "Please enter some chars in login area";
     }else{
        if (pass.length>8 && pass.match(/[a-z]/g) && pass.match(/[0-9]/g) && pass.match(/[A-Z]/g) && pass.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
             alertW.innerHTML = `Hasło prawidłowe. Konto utworzone. Witaj ${login}`;
         }
        else if (!(pass.length > 8) && pass.match(/[a-z]/g) && pass.match(/[0-9]/g) && pass.match(/[A-Z]/g) && pass.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)){
            alertW.innerHTML = `Hasło jest za krótkie.`;
         }
        else if (pass.length > 8 && !(pass.match(/[a-z]/g)) && pass.match(/[0-9]/g) && pass.match(/[A-Z]/g) && pass.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
            alertW.innerHTML = `Brak małych liter w haśle.`;
        }
        else if (pass.length > 8 && pass.match(/[a-z]/g) && !(pass.match(/[0-9]/g)) && pass.match(/[A-Z]/g) && pass.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
            alertW.innerHTML = `Brak cyfr w haśle.`;
        }
        else if (pass.length > 8 && pass.match(/[a-z]/g) && pass.match(/[0-9]/g) && !(pass.match(/[A-Z]/g)) && pass.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
            alertW.innerHTML = `Brak dużych liter w haśle.`;
        }
        else if (pass.length > 8 && pass.match(/[a-z]/g) && pass.match(/[0-9]/g) && pass.match(/[A-Z]/g) && !(pass.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/))) {
            alertW.innerHTML = `Brak symboli w haśle.`;
        }
         else{
            alertW.innerHTML = `Wpisz poprawne hasło.`;
         }
     }
    
})