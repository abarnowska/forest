const contactformName = document.querySelector("#name");
const contactformEmail = document.querySelector("#email");
const contactformMsg = document.querySelector("#msg");
const contactformButton = document.querySelector(".contact-site__button");
const contactformError = document.querySelector(".contact-site__error");
const msgStatus = document.querySelector(".contact-site__msg-status");
const closeMsgStatusBtn = document.querySelector(".contact-site__close-btn");

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".contact-site__error");
	errorMsg.textContent = msg + "!";
};

const clearError = input => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".contact-site__error");
	errorMsg.textContent = "";
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, "Email jest niepoprawny");
	}
};


const sendSucces = () => {
	msgStatus.textContent = "Wiadomość została wysłana!";
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll(".contact-site__error");
	let errorCount = 0;

	allInputs.forEach(el => {
		if (el.textContent !== "") {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		msgStatus.style.display = "flex";
	}
};

contactformButton.addEventListener("click", e => {
	e.preventDefault();
	checkForm([contactformName, contactformEmail, contactformMsg]);
	checkMail(contactformEmail);
	checkErrors();
});

closeMsgStatusBtn.addEventListener("click", e => {
	e.preventDefault();
	msgStatus.style.display = "none";
	[contactformName, contactformEmail, contactformMsg].forEach(el => {
		el.value = "";
	});
});
