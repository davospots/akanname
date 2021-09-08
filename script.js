const daysOfTheWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const maleNames = ["kwasi", "Kwandwo", "Kwabena", "kwaku", "yaw", "kofi", "kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function birthIndex(d, m, yr) {
    let dd = parseInt(d);
    let mm = parseInt(m);
    let cc = Math.floor(yr / 100);
    let yy = parseInt(yr.slice(2, 4));
    let dayOfTheWeek = Math.floor((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7);
    return dayOfTheWeek;
}

