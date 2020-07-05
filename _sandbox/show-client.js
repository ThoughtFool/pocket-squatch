const showClient = function (timer) {
    const counter = document.getElementById("counter-span");
    counter.innerHTML = timer;
};

module.exports = showClient;