const mobileOpenMenuButton = document.getElementById('mobileOpenMenu');
const mobileMenu = document.getElementsByClassName('mobileMenuLinks')[0];

let mobileMenuOpen = false;

mobileOpenMenuButton.addEventListener('click', () => {

	if (!mobileMenuOpen) {
		mobileMenu.style.display = "block";
		mobileMenuOpen = true;
	} else {
		mobileMenu.style.display = "none";
		mobileMenuOpen = false;
	}
});

// Automatically close mobile menu links when window gets too big

window.addEventListener('resize', () => {
	if (window.innerWidth >= 900) {
		mobileMenu.style.display = "none";
		mobileMenuOpen = false;
	}
})