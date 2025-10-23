function greeting() {
    let username = document.getElementById('username').value;
    let placeToShow = document.getElementById('greetingText');

    placeToShow.textContent = `Hello ${username}, let's start!`

}