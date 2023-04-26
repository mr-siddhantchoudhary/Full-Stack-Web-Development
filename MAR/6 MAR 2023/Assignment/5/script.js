const urls = [
    "https://www.google.com",
    "https://www.example.com/page.html",
    "https://123.456.789.0:8080/index.html",
    "https://localhost:3000",
    "ftp://invalidurl.com"
]

const urlPattern = /^(https:\/\/|http:\/\/)[\w\d\S]+.[a-zA-Z]+$/;

urls.forEach((url) => {
    if(urlPattern.test(url)) {
        console.log(`${url} is a valid URL`);
    } else {
        console.log(`${url} is not a valid URL`);
    }
})