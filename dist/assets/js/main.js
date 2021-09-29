(()=>{
    // HEADER CONTROL
    const languageButton = document.querySelector('.header__navbar-item-right .arrow-down').parentElement,
        registerButton = document.querySelector('.header__navbar-item-right .register-icon').parentElement,
        allButton = document.querySelector('.header__search-category'),
        optionList = document.querySelectorAll('.header__navbar-item-option'),
        mediaSize = 1024;

    // control by button
    languageButton.addEventListener('click',()=>{
        if(!optionList[0].classList.contains('active')){
            optionList[1].classList.remove('active');
            optionList[0].classList.add('active');
            optionList[2].classList.remove('active');
        }else{
            optionList[0].classList.remove('active');
        }
    });
    registerButton.addEventListener('click',()=>{
        if(!optionList[1].classList.contains('active')){
            optionList[0].classList.remove('active');
            optionList[1].classList.add('active');
            optionList[2].classList.remove('active');
        }else{
            optionList[1].classList.remove('active');
        }
    });

    allButton.addEventListener('click',()=>{
        if(!optionList[2].classList.contains('active')){
            optionList[1].classList.remove('active');
            optionList[0].classList.remove('active');
            optionList[2].classList.add('active');
        }else{
            optionList[2].classList.remove('active');
        }
    })
    // deactive when click to element is not button
    window.addEventListener('click',(e)=>{
        let target = e.target.parentElement.closest('.toggle-button');
        // if(e.target.classList.contains('option-item')){
        //     // console.log(e.target);
        //     return;
        // }
        if(!target){
            for(let i = 0; i < optionList.length; i++){
                optionList[i].classList.remove('active');
            }
        } 
    })
    // Prevent removing when click on option's area
    for(let i = 0; i < optionList.length; i++){
        optionList[i].addEventListener('click',(e)=>{
            e.stopPropagation();
        })
    }
    
    // OverLay
    const saleButton = document.querySelector('.onsale').parentElement,
            categoryButton = document.querySelector('.category-option').parentElement,
            bgOverlay = document.querySelector('.header-overlay');

    saleButton.addEventListener('mousemove',()=>{
        bgOverlay.classList.add('active');
    })
    saleButton.addEventListener('mouseleave',()=>{
        bgOverlay.classList.remove('active');
    })

    categoryButton.addEventListener('mousemove',()=>{
        bgOverlay.classList.add('active');
    })
    categoryButton.addEventListener('mouseleave',()=>{
        bgOverlay.classList.remove('active');
    })
    // Overlay end
    // HEADER CONTROL end

    // MObile control
    const btnHamburger = document.querySelector(".header__logo-hamburger"),
        headerMenuMobileTablet = document.querySelector(".header-menu-tablet-mobile");
        

    function toggleMenu(){
        if(!headerMenuMobileTablet.classList.contains("active")){
            headerMenuMobileTablet.style.maxHeight = headerMenuMobileTablet.scrollHeight +"px";
            headerMenuMobileTablet.classList.add('active');
        }else{
            headerMenuMobileTablet.removeAttribute("style");
            headerMenuMobileTablet.classList.remove('active');
            collapseMenu()
        }
    }

    function collapseMenu(){
        headerMenuMobileTablet.querySelector(".header-menu-tablet-mobile-item.active .sub-menu-tablet-mobile").removeAttribute("style");
        headerMenuMobileTablet.querySelector(".header-menu-tablet-mobile-item.active").classList.remove("active");
    }

    btnHamburger.addEventListener('click',toggleMenu);

    headerMenuMobileTablet.addEventListener('click',(e)=>{

        if(e.target.hasAttribute("data-toggle")){
            const subMenuItemHasChildren = e.target.parentElement;
            
            if(subMenuItemHasChildren.classList.contains("active")){
                collapseMenu()
            }else{
                if(headerMenuMobileTablet.querySelector(".header-menu-tablet-mobile-item.active")){
                    collapseMenu()
                }
                subMenuItemHasChildren.classList.add("active");
                subMenuItemHasChildren.querySelector(".sub-menu-tablet-mobile").style.maxHeight = subMenuItemHasChildren.querySelector(".sub-menu-tablet-mobile").scrollHeight +"px";
                headerMenuMobileTablet.style.maxHeight = headerMenuMobileTablet.scrollHeight + subMenuItemHasChildren.scrollHeight +"px";
            }
        }
    })

    function resize(){
        if(headerMenuMobileTablet.classList.contains("active")){
            headerMenuMobileTablet.classList.remove('active');
            headerMenuMobileTablet.removeAttribute("transition");
            headerMenuMobileTablet.removeAttribute("style");
            collapseMenu();
        }

        if(headerMenuMobileTablet.querySelector(".header-menu-tablet-mobile-item.active")){
            collapseMenu();
        }
    }

    window.addEventListener('resize',function(){
        if(this.innerWidth > mediaSize){
            resize();
        }
    })

    //Mobile search button
    const searchBtn = document.querySelector(".search-icon-mobile"),
    searchInput = document.querySelector(".header-with-search-input-mobile");

    searchBtn.addEventListener('click',()=>{
        if(searchInput.classList.contains("active")){
            searchInput.classList.remove("active");
        }else{
            searchInput.classList.add("active");
        }
    })
})();