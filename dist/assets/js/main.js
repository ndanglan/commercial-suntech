(()=>{
    // HEADER CONTROL
    const languageButton = document.querySelector('.header__navbar-item-right .arrow-down').parentElement,
        registerButton = document.querySelector('.header__navbar-item-right .register-icon').parentElement,
        allButton = document.querySelector('.header__search-category'),
        optionList = document.querySelectorAll('.header__navbar-item-option');

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
})();