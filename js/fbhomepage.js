// defning the container for getting user's date and time last login
let usersLastLogin = document.getElementById("userTime");
console.log(usersLastLogin);
var update = new Date();
// usersLastLogin.innerHTML = "hello"
var date = new Date();
var current_date = date.getDate() + "/ " + (date.getMonth()+1) + " / " + date.getFullYear();
var curent_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
var date_time = update.toDateString() +" " + curent_time;
usersLastLogin.textContent = date_time;
// code to hide the balance of our account
let hideAccountDetails = document.getElementById("Account-Hide");
let account_HideActivateIcon = document.getElementById("hide-Icon").addEventListener("click", function () {
    if (hideAccountDetails.style.display == "none") {
       hideAccountDetails.style.display = "block"
    }else{
        hideAccountDetails.style.display = "none"
    }
})