const sliderBox = document.querySelector(".slider__boxes");
const leftBtn = document.querySelector(".slider__btn--left");
const rightBtn = document.querySelector(".slider__btn--right");
const carouselImages = document.querySelectorAll(".slider__boxes-img");
const indicators = document.querySelectorAll(".slider__indicator-btn");
const sliderInfo = document.querySelectorAll(".slider__info-text");
const wrapper = document.querySelector(".wrapper");
const unImg = document.querySelectorAll(".under-section__img");
const unTextBox = document.querySelectorAll(".under-section__box-info");
const wdImgBox = document.querySelectorAll(".w-img");
const ttTextBox = document.querySelectorAll(".title-anim");
const ttTextBoxB = document.querySelector(".title-section__box-text--fourth");
const ttTextBoxT = document.querySelector(".title-section__box-text--third");
const footerYear = document.querySelector(".footer_year");
const burgerBtn = document.querySelector(".nav__mobile-box-btn");
const barsIco = document.querySelector(".nav__mobile-menu-ico");
const xIco = document.querySelector(".nav__mobile-x-ico");
const nav = document.querySelector(".nav__mobile-items");
const navItemsD = document.querySelectorAll(".nav__item");
const scrollSpySections = document.querySelectorAll(".section");
const authorBtn = document.querySelector(".footer__media-thanks");
const authorBox = document.querySelector(".footer__content-authors");

const carouselSpeed = 3000;

let carouselWidth = wrapper.clientWidth;
let index = 0;
let indicatorIndex = 0;
let animDelay = 0.3;
let i = 0;

const handleNav = () => {
	nav.classList.toggle("active-menu");
	barsIco.classList.toggle("hide");
	xIco.classList.toggle("hide");
};

const deleteNavClass = () => {
	navItemsD.forEach((item) => {
		item.classList.remove("active");
	});
};

const handleCarousel = () => {
	index++;
	indicators[indicatorIndex].classList.remove("active-btn");
	sliderInfo[indicatorIndex].classList.remove("active-info");
	indicatorIndex++;
	changeImage();
};

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0;
		indicatorIndex = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
		indicatorIndex = 2;
		indicators[indicatorIndex].classList.add("active-btn");
		sliderInfo[indicatorIndex].classList.add("active-info");
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;

	indicators[indicatorIndex].classList.add("active-btn");
	sliderInfo[indicatorIndex].classList.add("active-info");
};

const handleRightArrow = () => {
	index++;
	if (indicators[indicatorIndex].classList.contains("active-btn")) {
		indicators[indicatorIndex].classList.remove("active-btn");
		sliderInfo[indicatorIndex].classList.remove("active-info");
	} else {
		indicatorIndex++;
		indicators[indicatorIndex].classList.add("active-btn");
		sliderInfo[indicatorIndex].classList.add("active-info");
	}
	indicatorIndex++;
	resetInterval();
};

const handleLeftArrow = () => {
	index--;
	if (indicators[indicatorIndex].classList.contains("active-btn")) {
		indicators[indicatorIndex].classList.remove("active-btn");
		sliderInfo[indicatorIndex].classList.remove("active-info");
	} else {
		indicatorIndex--;
		indicators[indicatorIndex].classList.add("active-btn");
		sliderInfo[indicatorIndex].classList.add("active-info");
	}
	indicatorIndex--;
	resetInterval();
};

const resetInterval = () => {
	changeImage();
	clearInterval(startCarousel);
	startCarousel = setInterval(handleCarousel, carouselSpeed);
};

const changeViewport = () => {
	carouselWidth = wrapper.clientWidth;
};

unImg.forEach((img) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				img.classList.add("grow-anim");
				return;
			}

			img.classList.remove("grow-anim");
		});
	});
	observer.observe(img);
});

unTextBox.forEach((text) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				text.classList.add("text-anim");
				return;
			}

			text.classList.remove("text-anim");
		});
	});
	observer.observe(text);
});

wdImgBox.forEach((img) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				img.classList.add("show-world-anim");
				return;
			}

			img.classList.remove("show-world-anim");
		});
	});
	observer.observe(img);
});

ttTextBox.forEach((text) => {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				text.classList.add("title-text-anim");
				return;
			}
		});
	});
	observer.observe(text);
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			ttTextBoxB.classList.add("title-text-b-anim");
			return;
		}
	});
});
observer.observe(ttTextBoxT);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

const handleScrollSpy = () => {
	if (document.body.classList.contains("main-page")) {
		const sections = [];
		const colors = ["#fff", "#fff", "#11171a", "#11171a", "#11171a"];

		scrollSpySections.forEach((section) => {
			if (
				window.scrollY <=
				section.offsetTop + section.offsetHeight - 50
			) {
				sections.push(section);

				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				navItemsD.forEach((item) => {
					item.classList.remove("active");
					item.classList.remove("active-s");
					if (
						!activeSection.classList.contains("first-s") &&
						!activeSection.classList.contains("second-s")
					) {
						item.style.color = `#11171a`;
					} else {
						item.style.color = `#fff`;
					}
				});

				if (
					!activeSection.classList.contains("first-s") &&
					!activeSection.classList.contains("second-s")
				) {
					burgerBtn.style.color = "#11171a";
				} else {
					burgerBtn.style.color = "#fff";
				}

				if (
					!activeSection.classList.contains("first-s") &&
					!activeSection.classList.contains("second-s")
				) {
					activeSection.classList.add("active-s");
				} else {
					activeSection.classList.add("active");
				}
			}
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 200
			) {
				const lastSection = document.querySelector("a:last-of-type");

				navItemsD.forEach((item) => item.classList.remove("active-s"));

				lastSection.classList.add("active-s");
			}
		});
	}
	i++;
};

const showAuthors = () => {
	authorBox.classList.toggle("active-authors");
};

window.addEventListener("scroll", handleScrollSpy);
burgerBtn.addEventListener("click", handleNav);
navItemsD.forEach((item) =>
	item.addEventListener("click", () => {
		deleteNavClass();
		item.classList.add("active");
	})
);
rightBtn.addEventListener("click", handleRightArrow);
leftBtn.addEventListener("click", handleLeftArrow);
wdImgBox.forEach((img) =>
	img.addEventListener("click", () => {
		img.classList.toggle("show-world-img");
	})
);
window.addEventListener("resize", changeViewport);
authorBtn.addEventListener("click", showAuthors);
document.addEventListener("mouseup", (e) => {
	if (!authorBox.contains(e.target)) {
		authorBox.classList.add("active-authors");
	}
});
