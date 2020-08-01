let reA = /[^a-zA-Z]/g;
let reN = /[^0-9]/g;

const sortAlphaNum = function (a, b) {
    let aA = a.replace(reA, "");
    let bA = b.replace(reA, "");
    if (aA === bA) {
        let aN = parseInt(a.replace(reN, ""), 10);
        let bN = parseInt(b.replace(reN, ""), 10);
        return aN === bN ? 0 : aN > bN ? 1 : -1;
    } else {
        return aA > bA ? 1 : -1;
    }
};

module.exports = sortAlphaNum;