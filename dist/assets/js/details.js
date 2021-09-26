(()=>{
    const mainItems = document.querySelectorAll(".main-item"),
        mainContainer = document.querySelector(".main-slider-container"),
        nextBtn = document.querySelector(".control.right"),
        prevBtn = document.querySelector(".control.left"),
        navSlide = document.querySelector(".product-nav-container"),
        navItems = document.querySelectorAll(".product-slide-nav .item");

    let movePerMainItem = mainItems[0].clientWidth,
        movePerNavItem = navItems[0].clientHeight,
        index1 = 0,
        index2 = 0;

    nextBtn.addEventListener('click', ()=>{
        if(index1 >= mainItems.length -1){
            return;
        }
        index1 ++;
        
        mainContainer.style.transform = `translateX(${-index1*movePerMainItem}px)`;
        mainContainer.style.transition = '0.5s';
        
        index2 ++;
        if(index2 >= 11){
            return;
        }
        navSlide.style.transform = `translateY(${-index2*movePerNavItem}px)`;
        navSlide.style.transition = '0.5s';
    });

    prevBtn.addEventListener('click', ()=>{
        if(index1 <= 0){
            return;
        }
        index1 --;
        
        mainContainer.style.transform = `translateX(${-index1*movePerMainItem}px)`;
        mainContainer.style.transition = '0.5s';
        index2 --;
        if(index2 <=0 || index2 >=11){
            return;
        }
        navSlide.style.transform = `translateY(${-index2*movePerNavItem}px)`;
        navSlide.style.transition = '0.5s';
    })
})();