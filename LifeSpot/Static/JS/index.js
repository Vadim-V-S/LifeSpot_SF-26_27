setTimeout(() => alert("Do you like LifeSpot?\n" + "Subscribe our Instagram channel @lifespot777"), 30000);

    let session = new Map()

let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result);
    }
}

function handleSession() {
    session.set("userAgent", window.navigator.userAgent);
    session.set("startDate", startDate);
    return session;
}

function checkAge() {
    session.set("age", prompt("Input your age"));

    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();
        alert("Welcome on LifeSpot\n" + "Current time is " + startDate);
    }
    else {
        alert("Access is denied for age under 18. You will be redirected to the google page");
        window.location.href = "http://www.google.com"
    }
}


function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}


