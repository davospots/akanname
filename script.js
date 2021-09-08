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


    dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    dayOfTheWeek = parseInt(dayOfTheWeek);

    let akanName;

    maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


    femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    if (dayOfTheWeek == 0 && gender == "female") {
        
        akanName = femaleAkanNames[0];

    } else if (dayOfTheWeek == 0 && gender == "male") {

        akanName = maleAkanNames[0];

}
