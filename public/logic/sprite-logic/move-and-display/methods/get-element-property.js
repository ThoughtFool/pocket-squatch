const css = function (element, property) {

    return element.getBoundingClientRect()[property];
};

module.exports = css;