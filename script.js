window.onscroll = () => {
    const scrollPosition = window.scrollY;
    const rotation = scrollPosition * 0.2; // Adjust the multiplier to control the rotation speed
    document.querySelector(".moon").style.transform = "rotate(-"+ (scrollY / 5.5 )+"deg)";
    document.querySelector(".stars").style.marginBottom = scrollY / 1 + "px";
    document.querySelector(".Hero_name").style.opacity = (300 - scrollY) / 200;
};
