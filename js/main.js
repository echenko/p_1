function function_slider(slider, counter_index, total_index = 1) {
    function inner() {
        for (i = 0; i < slider.length; i ++) {
            if (i == total_index) {
                m_slider[i].classList.add("slide-image-active");
            } else {
                m_slider[i].classList.remove("slide-image-active");
            }
        }
        console.log(total_index);
        total_index = (total_index + counter_index) % slider.length;
    }
    return inner
}

let m_slider = document.querySelectorAll(".main-slide .slide-image");
let temp = function_slider(m_slider, 1);
let button = document.querySelector(".main-slide").onclick = () =>  temp();

