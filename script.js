document.getElementById("first").addEventListener('click', function() {
    Swal.fire({
        title: "Good job! Your Reservation is Successful!",
        text: "Thanks For Choosing Dine!",
        icon: "success",
        button: "Thank you"


    });
});




function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}