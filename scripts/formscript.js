function mooncorpAjaxGo() {
    // GET FORM DATA
    var data = new FormData();
    data.append("name", document.getElementById("contact-name").value);
    data.append("email", document.getElementById("contact-email").value);
    data.append("subject", document.getElementById("contact-subject").value);
    data.append("message", document.getElementById("contact-message").value);

    // AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "scripts/contactForm.py");
    xhr.onload = function() {
        console.log(this.response)
    };
    xhr.send(data);
    console.log("sent");

    // PREVENT HTML FORM SUBMIT
    return false;
}

function newsletterAjaxGo() {
    // GET FORM DATA
    var data = new FormData();
    data.append("email", document.getElementById("newsletter-email").value);

    // AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../scripts/newsletter.py");
    xhr.onload = function() {
        console.log(this.response)
    };
    xhr.send(data);
    console.log("sent");

    // PREVENT HTML FORM SUBMIT
    return false;
}

function contactAjaxGo() {
    // GET FORM DATA
    var data = new FormData();
    data.append("name", document.getElementById("contact-name").value);
    data.append("email", document.getElementById("contact-email").value);
    data.append("subject", document.getElementById("contact-subject").value);
    data.append("message", document.getElementById("contact-message").value);

    // AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../scripts/contactForm.py");
    xhr.onload = function() {
        console.log(this.response)
    };
    xhr.send(data);
    console.log("sent");

    // PREVENT HTML FORM SUBMIT
    return false;
}