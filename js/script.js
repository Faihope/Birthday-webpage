
function OnSubmit(){
    console.log("submitted");
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