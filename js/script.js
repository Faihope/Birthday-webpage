
function OnSubmit(){
    validDate();
    validMonth();
    validYear();

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