const range = document.querySelector('input');
const paragraph = document.querySelector('p');

range.addEventListener('input', () => {
    paragraph.style.webkitLineClamp = range.value;
})