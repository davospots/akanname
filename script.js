let akanForm = document.getElementById("form");
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
        
        akanName = femaleNames[0];
    } else if (dayOfTheWeek == 0 && gender == "male") {
        
        akanName = maleNames[0];


    } else if (dayOfTheWeek == 1 && gender == "female") {
        
        akanName = femaleNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        
        akanName = maleNames[1];


    } else if (dayOfTheWeek == 2 && gender == "female") {
        
        akanName = femaleNames[2];
    } else if (dayOfTheWeek == 2 && gender == "male") {
        
        akanName = maleNames[2];


    } else if (dayOfTheWeek == 3 && gender == "female") {
        
        akanName = femaleNames[3];
    } else if (dayOfTheWeek == 3 && gender == "male") {
        
        akanName = maleNames[3];


    } else if (dayOfTheWeek == 4 && gender == "female") {
        
        akanName = femaleNames[4];
    } else if (dayOfTheWeek == 4 && gender == "male") {
        
        akanName = maleNames[4];


    } else if (dayOfTheWeek == 5 && gender == "female") {
        
        akanName = femaleNames[5];
    } else if (dayOfTheWeek == 5 && gender == "male") {
        
        akanName = maleNames[5];


    } else if (dayOfTheWeek == 6 && gender == "female") {
        
        akanName = femaleNames[6];
    } else if (dayOfTheWeek == 6 && gender == "male") {
        
        akanName = maleNames[6];
    }


    result = document.getElementById("result").innerHTML = "Your Akan name is " + akanName + "!"
    document.getElementById("form").reset();
});
    





