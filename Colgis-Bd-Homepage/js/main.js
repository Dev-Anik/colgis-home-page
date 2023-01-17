
$("#HeaderContent").load("header.html"); 
$("#FooterContent").load("footer.html"); 



window.onload = function () {
	$('.preload-block').hide();
	// Applying active menu for header and footer
let navMenu = document.querySelectorAll('#navbar-sticky ul li a');
let footerNavMenu = document.querySelectorAll('.footer-link li a');

// Setting the Active Menu for Header Nav and Footer Nav
let fileName = location.href.split("/").slice(-1);
if (fileName == "index.html") {
	navMenu[0].classList.add('active');
	footerNavMenu[0].classList.add('active');
}


if (fileName == "work-style.html") {
	navMenu[1].classList.add('active');
	footerNavMenu[1].classList.add('active');
}


if (fileName == "BtoJ-hrd.html") {
	navMenu[2].classList.add('active');
	footerNavMenu[2].classList.add('active');
}


if (fileName == "about-us.html") {
	navMenu[3].classList.add('active');
	footerNavMenu[3].classList.add('active');

} 

else{
	return 0;
}


$('.ham-burg').click(function (){
	let navMenu = document.querySelector("#navbar-sticky");
	navMenu.classList.toggle("hidden");
});


// enabling dark mode by storing value in session storage
$('.theme-change').click(function () {
	// $('html').toggleClass('dark')

	if (sessionStorage.getItem("mode") == "null" || sessionStorage.getItem("mode") == null) {
		sessionStorage.setItem("mode", "dark");
		$('html').addClass('dark');
	}
	else if (sessionStorage.getItem("mode") == "dark") {
		sessionStorage.setItem("mode", "null");
		$('html').removeClass('dark');
	}
});

if (sessionStorage.getItem("mode") == "dark") {
	$('html').addClass('dark');
}
else {
	$('html').removeClass('dark');
}


};

// pageloader
$('.preload-block').preloader(

);



// section animate
AOS.init();
AOS.init({
	offset: 100,
	once: true,
	duration: 1000,
});




// sending mail
function sendMail() {

	let inputName = document.getElementById("name").value;
	let inputEmail = document.getElementById("email").value;
	let inputSubject = document.getElementById("subject").value;
	let inputMessage = document.getElementById("message").value;


	let validName = validateName(inputName);
	let validEmail = validateEmail(inputEmail);
	let validSubject = validateSubject(inputSubject);
	let validMessage = validateMessage(inputMessage);
    

	if (validName != false && validEmail != false && validSubject != false && validMessage != false) {

		window.location.reload();

	
	}

	else{
		
		return false;
	}


}


// form validation
// validating name
function validateName(inputName) {
	if (inputName != "") {
		if (isNaN(inputName)) {
			return true;
		}
		else {
			document.getElementById("nameError").innerHTML = "Invalid Name*";
			return false;
		}
	}
	else {
		document.getElementById("nameError").innerHTML = "Name Must be Filled in*";
		return false;
	}
}


// validating email
function validateEmail(inputEmail) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputEmail != "") {
		if (inputEmail.match(mailformat)) {
			return true;
		}
		else {
			document.getElementById("emailError").innerHTML = "Invalid Email Address*";
			return false;
		}
	}

	else {
		document.getElementById("emailError").innerHTML = "Email Must be Filled in*";
		return false;
	}
}


// subject validation
function validateSubject(inputSubject) {
	if (inputSubject != "") {
		return true;
	}
	else {
		document.getElementById("subjectError").innerHTML = "Subject Must be Filled in*";
		return false;
	}
}


// subject validation
function validateMessage(inputMessage) {
	if (inputMessage != "") {
		return true;
	}
	else {
		document.getElementById("messageError").innerHTML = "Message Must be Written*";
		return false;
	}
}



