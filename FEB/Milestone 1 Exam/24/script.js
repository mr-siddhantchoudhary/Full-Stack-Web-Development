const paragraph = document.querySelector('p');

const words = paragraph.textContent.split(' ');

for (let i=0; i<words.length; i++) {
    if (words[i].length > 8) {
        const span = document.createElement('span');
        span.textContent = words[i];
        span.style.backgroundColor = 'yellow';
        span.style.color = 'black';

        words[i] = span.outerHTML
    }
}

paragraph.innerHTML = words.join(' ');