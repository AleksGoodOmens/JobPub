//event listener for submit button
const messageForm = document.querySelector(#message - form);
if (messageForm) {
    messageForm.addEventListener("submit", function (e) {
        SubmitForm(e, this);
    })
};

async function submitForm(e, form) {
    // prevent page refresh
    e.preventDefault();

    // user interaction
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);

    // build json body
    const jsonFormData = buildJsonFormData(form);

    // build headers
    const headers = buildHeaders();

    // request and response
    const response = await fetchService.performPostHttpRequest('../forum.html', headers, jsonFormData);
    console.log(response);
    //inform user of result
    if (response) {
        window.location = `/success.html?FirstName-${response.FirstName}&LastName-${response.LastName}&Message-${response.Message}&id-${response.id}`;
    } else {
        alert('An error occured.')
    }
}