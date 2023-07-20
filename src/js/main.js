"use strict";
const menu = document.querySelector(".navbar__list");
const allNavItems = document.querySelectorAll(".navbar__item a");
const burgerBtn = document.querySelector(".navbar__burger-btn");
const logo = document.querySelector(".fa-solid");
const allSections = document.querySelectorAll(".section");

const footerYear = document.querySelector(".footer__year");

const showNav = () => {
	menu.classList.toggle("show-menu");

	if (menu.classList.contains("show-menu")) {
		burgerBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
		burgerBtn.style.color = "rgb(2, 70, 2)";
	} else {
		burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
	}
};

allNavItems.forEach(item =>
	item.addEventListener("click", () => {
		menu.classList.remove("show-menu");
		burgerBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
	})
);

const handleScrollSpy = () => {
	if (document.body.classList.contains("main-page")) {
		const sections = [];

		allSections.forEach(section => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 80) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				allNavItems.forEach(item =>
					item.classList.remove("navbar__item--active")
				);

				activeSection.classList.add("navbar__item--active");
			}
		});
	}
};

console.log(allNavItems[0].parentElement);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.textContent = year;
};

burgerBtn.addEventListener("click", showNav);
window.addEventListener("scroll", handleScrollSpy);
handleCurrentYear();
