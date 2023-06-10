let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('fa-bars');
	navbar.classList.toggle('open');
}
