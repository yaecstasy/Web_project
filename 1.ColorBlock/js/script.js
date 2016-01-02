function changeColor(hi) {
    var R = Math.floor(Math.random() * 255);
    var G = Math.floor(Math.random() * 255);
    var B = Math.floor(Math.random() * 255);
    console.log(R);
    hi.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";

}
