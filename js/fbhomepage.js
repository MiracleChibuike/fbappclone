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

// displaying the navbar on the click on the menu icon

let dropDownNav = document.querySelector(".dripDownAccounts");
var navDisplay = document.getElementById("navbarShow");

function showNav() {
    if (dropDownNav.style.display = "none") {
        dropDownNav.style.display = "block"
        navDisplay.style.display = "none";
        console.log(navClose)
        navClose.style.display = "block"
    }
}
var mBody = document.body

let navClose = document.querySelector("#navbarRemove");
function removeNav() {
    if (dropDownNav.style.display = "block") {
        dropDownNav.style.display = "none";
        navClose.style.display = "none";
        navDisplay.style.display = "block"
    }

}
    function closeOnBody() {
         if (dropDownNav.style.display = "block") {
        dropDownNav.style.display = "none"
         navClose.style.display = "none";
                 navDisplay.style.display = "block"

    }
    }

   
   
