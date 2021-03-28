window.onload = function () {
    const relaised = document.getElementById("relaised");
    const trailers = document.getElementById("trailers");
    relaised.onclick = function () {
        relaised.classList.add("bold");
        trailers.classList.remove("bold");
    };
    trailers.onclick = function () {
        relaised.classList.remove("bold");
        trailers.classList.add("bold");
    };
};
