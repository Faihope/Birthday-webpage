
function OnSubmit() {
    var dateEntered = validDate();
    var monthEntered = validMonth();
    var yearEntered = validYear();
    var GenderEntered = validGender();
    var calculatedDay = calculateDayOfWeek(dateEntered, monthEntered, yearEntered);
    var akanName = determineName(GenderEntered, calculatedDay);
    document.getElementById("Display").innerHTML = "Wow! Your Akan Name Is " + akanName;

}

function validDate() {
    var date = document.getElementById("Date").value;
    if (date) {
        if (date >= 1 && date <= 31) {
            return date;
        } else {
            alert("date should be 1-31");
        }
    } else {
        alert("please enter date")
    }
}

function validMonth() {
    var month = document.getElementById("Month").value;
    if (month) {
        if (month >= 1 && month <= 12) {
            return month;
        } else {
            alert("month should be 1-12");
        }
    } else {
        alert("please enter month")
    }

}

function validYear() {
    var year = document.getElementById("Year").value;
    if (year) {
        if (year >= 1000 && year <= 9999) {
            return year;
        } else {
            alert("year should be a four digit in the format xxxx");
        }
    } else {
        alert("please enter year")
    }

}
function validGender() {
    var gender = document.getElementById("mygender").value;
    if (gender) {
        if (gender == "male" || gender == "female") {
            return gender;
        } else {
            alert("gender should be either male or female");
        }
    } else {
        alert("please enter the gender")
    }
}

function calculateDayOfWeek(day, month, year) {
    var DD = day;
    var MM = month;
    var YY = parseInt(String(year).slice(2, 4));
    var CC = parseInt(String(year).slice(0, 2));
    var dayOfTheWeek = Math.round((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);
    var dayPerIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sartuday"];
    var indexOfTheDay = dayOfTheWeek - 1;
    var nameOfTheDay = dayPerIndex[indexOfTheDay];
    return nameOfTheDay;

}

function determineName(gender, dayOfWeek) {
    var dayGender = {
        male: {
            Sunday: 'Kwasi',
            Monday: 'Kwadwo',
            Tuesday: 'Kwabena',
            Wednesday: 'Kwaku',
            Thursday: 'Yaw',
            Friday: 'Kofi',
            Sartuday: 'Kwame'

        },
        female: {
            Sunday: 'Akosua',
            Monday: 'Adwoa',
            Tuesday: 'Abenaa',
            Wednesday: 'Akua',
            Thursday: 'Yaa',
            Friday: 'Afua',
            Sartuday: 'Ama'
        }

    }
    return dayGender[gender][dayOfWeek];
}
