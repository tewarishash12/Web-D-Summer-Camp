function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const timeMorning = document.getElementById('timeMorning').checked;
    const timeAfternoon = document.getElementById('timeAfternoon').checked;
    const timeEvening = document.getElementById('timeEvening').checked;
    const experience = document.getElementById('experience').value.trim();

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    if (email === "") {
        alert("Email must be filled out");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return false;
    }

    if (rating === "" || rating < 1 || rating > 10) {
        alert("Please enter a rating between 1 and 10");
        return false;
    }

    if (!timeMorning && !timeAfternoon && !timeEvening) {
        alert("Please select a time of day");
        return false;
    }

    if (experience === "") {
        alert("Please describe your positive experience");
        return false;
    }

    return true;
}
        