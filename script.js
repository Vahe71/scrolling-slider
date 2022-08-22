let slider = {
    slide: document.querySelector('.slider'),
    image: ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'],
    item: document.querySelectorAll('.slide .slider .item'),
    deltaCurrent: 0,
    mouse: document.querySelector('.slide .scroll'),
    mouseCurrent: 0,
};

for (let i = 0; i < slider.image.length; i++) {
    slider.item[i].style.background = `url(${slider.image[i]}) center / cover`;
}

slider.slide.onmousewheel = event => {
    slider.deltaCurrent = slider.deltaCurrent + Math.floor(event.deltaY);
    slider.deltaCurrent > 0 ? slider.deltaCurrent = slider.deltaCurrent - 1 : '';
    slider.deltaCurrent < 0 ? slider.deltaCurrent = 400 : '';
    slider.deltaCurrent > 500 ? slider.deltaCurrent = 0 : '';
    slider.deltaCurrent < -500 ? slider.deltaCurrent = 0 : '';
    if (slider.deltaCurrent > 0 && slider.deltaCurrent < 100) {
        slider.deltaCurrent = 100;
    } else if (slider.deltaCurrent > 100 && slider.deltaCurrent < 200) {
        slider.deltaCurrent = 200;
    } else if (slider.deltaCurrent > 200 && slider.deltaCurrent < 300) {
        slider.deltaCurrent = 300;
    } else if (slider.deltaCurrent > 300 && slider.deltaCurrent < 400) {
        slider.deltaCurrent = 400;
    } else if (slider.deltaCurrent > 400 && slider.deltaCurrent < 500) {
        slider.deltaCurrent = 0;
    } else if (slider.deltaCurrent > -100 && slider.deltaCurrent < 0) {
        slider.deltaCurrent = -100;
    } else if (slider.deltaCurrent > -200 && slider.deltaCurrent < -100) {
        slider.deltaCurrent = -200;
    } else if (slider.deltaCurrent > -300 && slider.deltaCurrent < -200) {
        slider.deltaCurrent = -300;
    } else if (slider.deltaCurrent > -400 && slider.deltaCurrent < -300) {
        slider.deltaCurrent = -400;
    } else if (slider.deltaCurrent > -500 && slider.deltaCurrent < -400) {
        slider.deltaCurrent = 0;
    }
    slider.slide.style.top = '-' + Math.abs(slider.deltaCurrent) + '%';
    slider.deltaCurrent == 0 ? slider.mouse.style.top = 0 : '';
    slider.deltaCurrent == 100 ? slider.mouse.style.top = '20%' : '';
    slider.deltaCurrent == 200 ? slider.mouse.style.top = '40%' : '';
    slider.deltaCurrent == 300 ? slider.mouse.style.top = '60%' : '';
    slider.deltaCurrent == 400 ? slider.mouse.style.top = '80%' : '';
    console.log(slider.mouseCurrent);
    console.log(slider.deltaCurrent);
}





















