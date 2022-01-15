// ------------------------------
// Author: Neokazis Charalampos
// Author URI: NeoBabis.gr
// ------------------------------
let path = document.querySelector(".svg_container path");
let length = path.getTotalLength();

path.style.strokeDasharray = length + " " + length;
path.style.strokeDashoffset = length;

window.addEventListener("scroll", () => {
    let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let drawLenght = length * scrollPercentage;
    path.style.strokeDashoffset = length - drawLenght;
});
