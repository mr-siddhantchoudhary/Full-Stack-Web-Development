const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function validateLinkedIn(url) {
    if (regex.test(url)) {
        console.log(`${url} is a valid LinkedIn Profile Url`);
    } else {
        console.log(`${url} is not a valid LinkedIn Profile Url`);
    }
}


validateLinkedIn("https://www.linkedin.com/in/john-doe_123");
validateLinkedIn("https://www.linkedin.com/in/john-doe!123");
