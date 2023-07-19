const nav = document.querySelector(".nav-mobile__items");
const navMain = document.querySelector(".nav-mobile__main");
const burgerBtn = document.querySelector(".burger-btn");
const logo = document.querySelector(".fa-solid");
const allNavLinks = document.querySelectorAll(".nav-mobile__item");
const footerYear = document.querySelector(".footer__year");
const allDesktopItems = document.querySelectorAll(".nav-desktop__item");
const scrollSpySections = document.querySelectorAll(".section");

const showNav = () => {
	nav.classList.toggle("nav-mobile--active");
	if (nav.classList.contains("nav-mobile--active")) {
		burgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
		burgerBtn.style.color = "rgb(2, 70, 2)";
		navMain.classList.remove("nav-mobile__main--active");
	} else {
		burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
		burgerBtn.style.color = "#fff";
		showMainNav();
	}
};

allNavLinks.forEach(item =>
	item.addEventListener("click", () => {
		nav.classList.remove("nav-mobile--active");
		burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
		burgerBtn.style.color = "#fff";
	})
);

const showMainNav = () => {
	if (window.scrollY > 200) {
		navMain.classList.add("nav-mobile__main--active");
	} else {
		navMain.classList.remove("nav-mobile__main--active");
	}
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

const handleScrollSpy = () => {
	if (document.body.classList.contains("main-page")) {
		const sections = [];

		scrollSpySections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 70) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				allDesktopItems.forEach(item =>
					item.classList.remove("scrollspy-active")
				);

				activeSection.classList.add("scrollspy-active");
			}
		});
	}
};

if (!document.body.classList.contains("main-page")) {
	allDesktopItems.forEach(el => {
		el.classList.remove("scrollspy-active");
	});
}

burgerBtn.addEventListener("click", showNav);
window.addEventListener("scroll", showMainNav);
handleCurrentYear();
window.addEventListener("scroll", handleScrollSpy);
