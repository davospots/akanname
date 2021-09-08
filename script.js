let akanForm = document.getElementById("akanForm");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();

    gender = document.getElementById("gender").value
    dateOfBirth = document.getElementById("date").value
    dateOfBirth = new Date(dateOfBirth);


    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();

    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth


    dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    dayOfTheWeek = parseInt(dayOfTheWeek);

    let akanName;

    maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    let dob;


    if (dayOfTheWeek == 0 && gender == "female") {
        dob = "Sunday";
        akanName = femaleNames[0];
    } else if (dayOfTheWeek == 0 && gender == "male") {
        dob = "Sunday";
        akanName = maleNames[0];


    } else if (dayOfTheWeek == 1 && gender == "female") {
        dob = "Monday";
        akanName = femaleNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        dob = "Monday";
        akanName = maleNames[1];


    } else if (dayOfTheWeek == 2 && gender == "female") {
        dob = "Tuesday";
        akanName = femaleNames[2];
    } else if (dayOfTheWeek == 2 && gender == "male") {
        dob = "Tuesday";
        akanName = maleNames[2];


    } else if (dayOfTheWeek == 3 && gender == "female") {
        dob = "Wednesday";
        akanName = femaleNames[3];
    } else if (dayOfTheWeek == 3 && gender == "male") {
        dob = "Wednesday";
        akanName = maleNames[3];


    } else if (dayOfTheWeek == 4 && gender == "female") {
        dob = "Thursday";

        akanName = femaleNames[4];
    } else if (dayOfTheWeek == 4 && gender == "male") {
        dob = "Thursday";
        akanName = maleNames[4];


    } else if (dayOfTheWeek == 5 && gender == "female") {
        dob = "Friday";
        akanName = femaleNames[5];
    } else if (dayOfTheWeek == 5 && gender == "male") {
        dob = "Friday";
        akanName = maleNames[5];


    } else if (dayOfTheWeek == 6 && gender == "female") {
        dob = "Saturday";
        akanName = femaleNames[6];
    } else if (dayOfTheWeek == 6 && gender == "male") {
        dob = "Saturday";
        akanName = maleNames[6];
    }

    result = document.getElementById("result").innerHTML = "You were born on a " + dob + " your Akan name is " + akanName + "!"
    document.getElementById("akanForm").reset();
});
