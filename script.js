let akanForm = document.getElementById("formAkan");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();

    gender = document.getElementById("gender").value
    dateOfBirth = document.getElementById("date").value
    dateOfBirth = new Date(dateOfBirth);
    
    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth




