
function OnSubmit(){
    validDate();
    validMonth();

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