

btn.addEventListener('click', function (e) {


    const inputName = document.querySelector("#NomID").value.trim();
    const inputPrenom = document.querySelector("#prenomID").value.trim();
    const inputEmail = document.getElementById("emailID").value.trim();
    const inputTel = document.querySelector("#telephoneID").value.trim();
    const inputMessage = document.querySelector("#messageID").value.trim();
    const inputPostal = document.getElementById("postalID").value.trim();

    const nomError = document.getElementById("NomError");
    const prenomError = document.getElementById("PrenomError");
    const emailError = document.getElementById("EmailError");
    const telephoneError = document.getElementById("TelephoneError");
    const messageError = document.getElementById("MessageError");
    const postalError = document.getElementById("PostalError");



    const nameRegex = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/;
    const prenomRegex = /^[A-Za-zÀ-ÿ\s'-]{2,50}$/;
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    const telRegex = /^(?:\+32|0)[1-9]\d{7,8}$/;
    const messageRegex = /^.{5,300}$/;
    const postalRegex = /^[1-9][0-9]{3}$/;

    let isValid = true;

    // Prénom
    if (inputPrenom === "") {
        prenomError.textContent = "Prénom est vide";
        prenomError.style.color = "red";
        isValid = false;
        
    } else if (prenomRegex.test(inputPrenom) === false) {
        prenomError.textContent = "Prénom n'est pas valide";
        prenomError.style.color = "red";
        isValid = false;
    } else {
        prenomError.textContent = "";
    }

    // Nom
    if (inputName === "") {
        nomError.textContent = "Nom est vide";
        nomError.style.color = "red";
        isValid = false;
    } else if (nameRegex.test(inputName) === false) {
        nomError.textContent = "Nom n'est pas valide";
        nomError.style.color = "red";
        isValid = false;
    } else {
        nomError.textContent = "";
    }



    // Email
    if (inputEmail === "") {
        emailError.textContent = "Email est vide";
        emailError.style.color = "red";
        isValid = false;
    } else if (emailRegex.test(inputEmail) === false) {
        emailError.textContent = "Email n'est pas valide";
        emailError.style.color = "red";
        isValid = false;
    } else {
        emailError.textContent = "";
    }
    // code postal
    if (inputPostal === "") {
        postalError.textContent = "Code postal est vide";
        postalError.style.color = "red"
        isValid = false;
    } else if (postalRegex.test(inputPostal) === false) {
        postalError.textContent = "Code postal n'est pas valide";
        postalError.style.color = "red";
        isValid = false;
    } else {
        postalError.textContent = " ";
    }


    // Téléphone
    if (inputTel === "") {
        telephoneError.textContent = "Téléphone est vide";
        telephoneError.style.color = "red";
        isValid = false;
    } else if (telRegex.test(inputTel) === false) {
        telephoneError.textContent = "Téléphone n'est pas valide";
        telephoneError.style.color = "red";
        isValid = false;
    } else {
        telephoneError.textContent = "";
    }

    // Message
    if (inputMessage === "") {
        messageError.textContent = "Message est vide";
        messageError.style.color = "red";
        isValid = false;
    } else if (messageRegex.test(inputMessage) === false) {
        messageError.textContent = "Message n'est pas valide";
        messageError.style.color = "red";
        isValid = false;
    } else {
        messageError.textContent = "";
    }





    if (isValid === false) {
        e.preventDefault();
    }
});
