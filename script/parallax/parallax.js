'use strict';

window.onload = function (){
    const parallax = document.querySelector('.parallax');

    if(parallax){
         const content = document.querySelector('.parallax__container');
         const clouds  = document.querySelector('.images-parallax__clouds');
         const mountains = document.querySelector('.images-parallax__mountains');
         const human = document.querySelector('.images-parallax__human');


        // Коэффициент

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        // Скорость анимациии

        const speed = 0.05;

        // Обявления переменных

        let positionX = 0;
        let positionY = 0;
        let coordXprocent = 0;
        let coordYprocent = 0;

        function setMouseParallaxStyle () {
            const distX  = coordXprocent - positionX;
            const distY  = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            // передаем стили в css

            clouds.style.cssText = `transform: translate(${positionX / forClouds}%, ${positionY / forClouds}%);`;
            mountains.style.cssText  = `transform: translate(${positionX / forMountains}%, ${positionY / forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%, ${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener('mousemove',function(e){
            // Получение ширины и высоты блока

            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            // Ноль по середине блока

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            // Получаем проценты

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;

        })

        // Паралах при скролле

        let arraySets = [];

        for(let i = 0; i <= 1.0; i += 0.005){
            arraySets.push(i);
        }

        const callback = function(entries, observer) {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight *100;

            setParallaxItemsStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: arraySets
        })

        observer.observe(document.querySelector('.text-content'));

        function setParallaxItemsStyle(scrollTopProcent){
            content.style.cssText =`transform: translate(0%, -${scrollTopProcent / 9}%)`;
            mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%)`;
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%)`
        }


    }
}