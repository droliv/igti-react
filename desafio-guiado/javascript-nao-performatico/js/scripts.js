window.addEventListener('load', start);

const clickArray = [];

function start() {
    const button = document.querySelector('#clickButton');
    button.addEventListener('click', randleButtonClick);
}

function randleButtonClick() {
    const now = getTimestampFormat();
    clickArray.push(now);
    console.log(clickArray);
    render();
}

function render() {
    let ul = document.querySelector('#data');
    ul.innerHTML = '';
    let lis = '';
    clickArray.map(item => {
        lis += `<li> ${item} </li>`
    })
    ul.innerHTML = lis

    document.title = clickArray.length;
}