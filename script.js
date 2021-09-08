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



    if (dayOfTheWeek == 0 && gender == "female") {
        
        akanName = femaleAkanNames[0];
    } else if (dayOfTheWeek == 0 && gender == "male") {
        
        akanName = maleAkanNames[0];


    } else if (dayOfTheWeek == 1 && gender == "female") {
        
        akanName = femaleAkanNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        
        akanName = maleAkanNames[1];


    } else if (dayOfTheWeek == 2 && gender == "female") {
        
        akanName = femaleAkanNames[2];
    } else if (dayOfTheWeek == 2 && gender == "male") {
        
        akanName = maleAkanNames[2];


    } else if (dayOfTheWeek == 3 && gender == "female") {
        
        akanName = femaleAkanNames[3];
    } else if (dayOfTheWeek == 3 && gender == "male") {
        
        akanName = maleAkanNames[3];


    } else if (dayOfTheWeek == 4 && gender == "female") {
        
        akanName = femaleAkanNames[4];
    } else if (dayOfTheWeek == 4 && gender == "male") {
        
        akanName = maleAkanNames[4];


    } else if (dayOfTheWeek == 5 && gender == "female") {
        
        akanName = femaleAkanNames[5];
    } else if (dayOfTheWeek == 5 && gender == "male") {
        
        akanName = maleAkanNames[5];


    } else if (dayOfTheWeek == 6 && gender == "female") {
        
        akanName = femaleAkanNames[6];
    } else if (dayOfTheWeek == 6 && gender == "male") {
        
        akanName = maleAkanNames[6];
    }


    let result = document.getElementById("result").innerHTML = "Drumrolls!!! <br>You were born on a " + bornDay + " your Akan name is " + akanName + "!"
    document.getElementById("akanForm").reset();
});
    





