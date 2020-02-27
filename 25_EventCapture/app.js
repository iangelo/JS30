const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // stop bubbling!
}

// Once property: unbind the eventlistener
divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));

button.addEventListener('click', () => {
    console.log('Click!!!');
}, {
    once: true,
})

// Capture property (false by default)
/* divs.forEach(div => div.addEventListener('click', logText, {
    capture: true
})); */