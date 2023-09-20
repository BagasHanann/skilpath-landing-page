function handleGetFormData() {
	let name = document.getElementById('name').value;
	let city = document.getElementById('city').value;
	let email = document.getElementById('email').value;
	let zipCode = document.getElementById('zip-code').value;
	let status = document.getElementById('status').checked;

	return {
		name,
		city,
		email,
		zipCode,
		status,
	};
}

function isNumber(input) {
	return !isNaN(input);
}

function checkboxIsChecked() {
	return document.getElementById('status').checked;
}

function validateFormData(formData) {
	return formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()
		? true
		: false;
}

function submit() {
	const warningMessage = document.getElementById('warning');

	validateFormData(handleGetFormData())
		? (warningMessage.innerHTML = '')
		: (warningMessage.innerHTML = 'Periksa form anda sekali lagi');
}

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function (event) {
	event.preventDefault();

	submit();
});
