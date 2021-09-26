(()=>{
    const mainItems = document.querySelectorAll(".main-item"),
        mainContainer = document.querySelector(".main-slider-container"),
        nextBtn = document.querySelector(".control.right"),
        prevBtn = document.querySelector(".control.left"),
        navSlide = document.querySelector(".product-nav-container"),
        navItems = document.querySelectorAll(".product-slide-nav .item"),
        colorOptions = document.querySelectorAll(".color-option");

    let movePerMainItem = mainItems[0].clientWidth,
        movePerNavItem = navItems[0].clientHeight,
        index1 = 0,
        index2 = 0;

    let moveItem = function(container,movePer,index,direction){
        container.style.transform = `translate${direction}(${-index*movePer}px)`;
        container.style.transition = '0.5s';
    }

    nextBtn.addEventListener('click', ()=>{
        if(index1 >= mainItems.length -1){
            return;
        }
        index1 ++;
        moveItem(mainContainer,movePerMainItem,index1,"X");

        index2 ++;
        if(index2 >= 12){
            return;
        }
        moveItem(navSlide,movePerNavItem,index2,"Y");
    });

    prevBtn.addEventListener('click', ()=>{
        if(index1 < 0){
            return;
        }
        index1 --;
        moveItem(mainContainer,movePerMainItem,index1,"X");

        index2 --;
        if(index2 <0 || index2 >=12){
            return;
        }
        moveItem(navSlide,movePerNavItem,index2,"Y");
    })

    Array.from(navItems).forEach((e)=>{
        e.addEventListener('click', function(){
            index1 = this.getAttribute('data-index');
            index2 = this.getAttribute('data-index');

            moveItem(mainContainer,movePerMainItem,index1,"X");
            if(index2 >=12){
                return;
            }
            moveItem(navSlide,movePerNavItem,index2,"Y");
        })
    })

    Array.from(colorOptions).forEach((e)=>{
        e.addEventListener('click', function(){
            index1 = this.getAttribute('color-index');
            index2 = this.getAttribute('color-index');

            moveItem(mainContainer,movePerMainItem,index1,"X");
            if(index2 >=12){
                index2 = 11; 
            }
            moveItem(navSlide,movePerNavItem,index2,"Y");
        })
    })
})();