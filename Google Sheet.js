const scriptURL = "https://script.google.com/macros/s/AKfycbz4qvOx95uTCHd_80y4DCedX2ZQuT87k1yA0Gv2EAXAex9Uym79F8KVEh3iBJhiCAOq/exec"
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thank you! your form is submitted successfully." ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})
