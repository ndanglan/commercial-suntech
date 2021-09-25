
(()=>{
    // BANNER-SLIDER
    const sliderContainer = document.querySelector(".main-slider"),
    slide = sliderContainer.querySelector(".main-slider-container"),
    prevBtn = document.querySelector(".slider-banner .slider-control-left"),
    nextBtn = document.querySelector(".slider-banner .slider-control-right");

    let slides = document.querySelectorAll(".slider-item");
    let index = 1;

    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    slide.append(firstClone);
    slide.prepend(lastClone);
    // sau buowcs nay slides van chi la 2

    const slideWidth = slides[index].clientWidth;
    // console.log(slideWidth);
    slide.style.transform = `translateX(${-slideWidth * index}px)`;

    const startSlide =()=>{
        setInterval(()=>{
            moveToNextSlide();
        },8000)
    }
    const getSlide= () => document.querySelectorAll(".slider-item");
   
    slide.addEventListener('transitionend',()=>{
        slides = getSlide();
        if(slides[index].id === firstClone.id){
            slide.style.transition = 'none';
            index = 1;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
        if(slides[index].id === lastClone.id){
            slide.style.transition = 'none';
            index = slides.length - 2;
            slide.style.transform = `translateX(${-slideWidth * index}px)`;
        }
    })

    const moveToNextSlide = ()=>{

        slides = getSlide();
        if(index >= slides.length -1) return;
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '0.7s';
        
    }
    const moveToPrevSlide = () => {

        slides = getSlide();
        if(index <= 0) return;
        index--;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '0.7s';
    }

    nextBtn.addEventListener('click',moveToNextSlide);
    prevBtn.addEventListener('click',moveToPrevSlide);
    startSlide();
    // BANNER-SLIDER END

    //PRODUCT-SLIDER
    const featuredProductNextBtn = document.querySelector('.featured-products .slider-control-right'),
        featuredProductPrevBtn = document.querySelector('.featured-products .slider-control-left'),
        featuredProductsList = document.querySelector('.featured-products-list'),
        featuredProducts  = featuredProductsList.querySelectorAll(".product-item"),
        upsellProductList = document.querySelector('.product-upsell .product-list'),
        upsellProducts = document.querySelectorAll('.product-upsell .product-item'),
        upsellNextBtn = document.querySelector('.product-upsell .slider-control-right'),
        upsellPrevBtn = document.querySelector('.product-upsell .slider-control-left');

    let movePerFeaturedProduct = featuredProducts[0].clientWidth;
    let movePerUpsellProduct = upsellProducts[0].clientWidth;
    let calculateMaxMove = (products, movePer)=>{
        return movePer * (products.length - 6) + 0.2;
    };
    let maxMoveFeaturedProduct = calculateMaxMove(featuredProducts,movePerFeaturedProduct);
    let maxMoveUpsellProducts = calculateMaxMove(upsellProducts,movePerUpsellProduct);

    // function used controls slide 
    // object's name and name can customize
    // can be rewrite without big object
    var nameProductList= {
        featured:{
            index:0,
            paces:0,
            movePer:movePerFeaturedProduct,
            maxMove:maxMoveFeaturedProduct,
        },
        upsell:{
            index:0,
            paces:0,
            movePer:movePerUpsellProduct,
            maxMove:maxMoveUpsellProducts
        }
    };
    let changeIndex = function(obj,name,method){
        if(method === "next"){
            if(obj[name]["paces"] > obj[name]["maxMove"]){
                // obj[name]["paces"]=0;
                return;    
            }
            obj[name]["index"]++;
            obj[name]["paces"] = obj[name]["movePer"]*obj[name]["index"];
        }
        else if(method === "prev"){
            if(obj[name]["paces"] <= 0){
                return;
            }
            obj[name]["index"]--;
            obj[name]["paces"] = obj[name]["movePer"]*obj[name]["index"];
        }   
    }
    let moveProduct = function (list,name,method){
        changeIndex(nameProductList,name,method);
        list.style.transform = `translateX(${-nameProductList[name]["paces"]}px)`;
        list.style.transition = '0.3s';
    }
    // add event to button
    featuredProductNextBtn.addEventListener('click', ()=>{
       
        moveProduct(featuredProductsList,"featured","next");
    });
    featuredProductPrevBtn.addEventListener('click',()=>{
        
        moveProduct(featuredProductsList,"featured","prev");
    });
    upsellNextBtn.addEventListener('click',()=>{

        moveProduct(upsellProductList,"upsell","next");
    });
    upsellPrevBtn.addEventListener('click',()=>{

        moveProduct(upsellProductList,"upsell","prev");
    });
    //PRODUCT-SLIDER END

})();



    


   
