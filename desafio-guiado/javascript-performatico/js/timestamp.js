function leftPad(value, count = 2, char = '0') {
    let newValue = value.toString();
    value = value.toString();
    if(value.length < count) {
        for (let i = 0; i < count - value.length; i++) {
            newValue = char + value;
        }
    }
    return newValue;
}
function getTimestampFormat() {
    const now = new Date();
    let result = '';
    result += leftPad(now.getDate()) + '/';
    result += leftPad(now.getMonth() + 1) + '/';
    result += now.getFullYear() + ' ';
    result += leftPad(now.getHours()) + ':';
    result += leftPad(now.getMinutes()) + ':';
    result += leftPad(now.getSeconds())+ '.';
    result += leftPad(now.getMilliseconds(), 3);
    return result;
}