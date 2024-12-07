function validateForm() {
    let usn = document.getElementById('usn').value;
    let name = document.getElementById('name').value;
    let rollNumber = document.getElementById('rollNumber').value;
    let classSection = document.getElementById('classSection').value;
    let photo = document.getElementById('photo').files[0];

    // Check if all fields are filled
    if (usn === "" || name === "" || rollNumber === "" || classSection === "" || !photo) {
        alert("Please fill all fields and upload a photo.");
        return false;
    }

    // Further validations can be added here if necessary

    // If everything is valid, alert success message
    alert("Student details submitted successfully!");
    return true;
}