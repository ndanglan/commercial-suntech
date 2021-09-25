(()=>{
    // COntrol toolbar 
    const toolBar = document.querySelector('.toolbar');
    
    toolBar.addEventListener('click', (e)=>{
        let toolBarOption = e.target.parentElement.closest('.toolbar-option');

        if(toolBarOption && !toolBarOption.classList.contains('active')){

            if(toolBar.querySelector('.active')){
                toolBar.querySelector('.active').classList.remove('active');
            }
            toolBarOption.classList.add("active");
        }
    })
     // COntrol toolbar  end

    // //  left page control
    // const items = document.querySelector('.items')
    
    // items.addEventListener('click', (e)=>{
    //     let item = e.target.parentElement.closest('.item');
    //     console.log(item);
    //     if(item && !item.classList.contains('active')){
            
    //         if(items.querySelector('.active')){
    //             items.querySelector('.active').classList.remove('active');
    //         }
    //         item.classList.add("active");
    //     }
    // })

    //filter items 
    const filterColors = document.querySelectorAll(".item"),
        filterItems = document.querySelectorAll(".product-item");
    let flag = 0;

        Array.from(filterColors).forEach(function(element) {
            element.addEventListener('click',function(){
                if(this.classList.contains("active")){
                    this.classList.remove("active");
                    flag--;
                }else{
                    this.classList.add("active");
                    flag++;
                    document.querySelector(".pagination").style.display = "none";

                    let dataFilter = this.getAttribute("data-filter");
                    
                    Array.from(filterItems).forEach(function(ele){
                        if(ele.getAttribute("data-item") === dataFilter){
                            ele.style.display = "block";
                            // console.log(ele.getAttribute("data-item"));
                        }else{
                            ele.style.display = "none";
                        }
                    })
                    
                }
                if(flag === 0){
                    for(let i = 0; i < filterItems.length; i++){
                        filterItems[i].style.display="block";
                    }
                    document.querySelector(".pagination").style.display = "flex";
                }
            })
        })
})();