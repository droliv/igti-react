window.addEventListener('load', start);

const clickArray = [];

function start() {
    const button = document.querySelector('#clickButton');
    button.addEventListener('click', randleButtonClick);
}

function randleButtonClick() {
    const now = getTimestampFormat();
    clickArray.push(now);
    render(now);
}

function render(item) {
    let ul = document.querySelector('#data');
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li)
}