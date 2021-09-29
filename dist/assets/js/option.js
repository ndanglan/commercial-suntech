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

    // CONTROL PAGINATION 
    const product = [
        {
            id:1,
            dataItem:"trang",
            img:"./assets/img/img-product/product-1.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"485.000₫",
            netPrice:""
        },
        {
            id:2,
            dataItem:"do",
            img:"./assets/img/img-product/product-2.jpg",
            desc:"Quần âu baggy cạp cao tôn dáng 20AGAIN QAA1213 chất liệu tuyết mưa mềm mại không nhăn",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:3,
            dataItem:"den",
            img:"./assets/img/img-product/product-3.jpg",
            desc:"Quần Baggy Cạp Liền Ly 20AGAIN thiết kế công sở vải bền định hình form cực chuẩn QGA1084",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:4,
            dataItem:"cam",
            img:"./assets/img/img-product/product-4.jpg",
            desc:"Quần dài suông cạp lệch 2 cúc 20 AGAIN QAA0956",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:5,
            dataItem:"be",
            img:"./assets/img/img-product/product-5.jpg",
            desc:"Quần ống rộng cạp cao có đai liền 20AGAIN, hàng thiết kế phong cách công sở thanh lịch, tôn dáng QAA1070",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:6,
            dataItem:"chamtrang",
            img:"./assets/img/img-product/product-6.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:7,
            dataItem:"chambe",
            img:"./assets/img/img-product/product-7.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:8,
            dataItem:"hoatietden",
            img:"./assets/img/img-product/product-8.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:9,
            dataItem:"chamden",
            img:"./assets/img/img-product/product-1.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:10,
            dataItem:"ghi",
            img:"./assets/img/img-product/product-2.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:11,
            dataItem:"ghidam",
            img:"./assets/img/img-product/product-3.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:12,
            dataItem:"hoatietbe",
            img:"./assets/img/img-product/product-4.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:13,
            dataItem:"hoatietcam",
            img:"./assets/img/img-product/product-5.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:14,
            dataItem:"hoatietdo",
            img:"./assets/img/img-product/product-6.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:15,
            dataItem:"hoatiettrang",
            img:"./assets/img/img-product/product-7.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:16,
            dataItem:"hoatiettim",
            img:"./assets/img/img-product/product-8.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:17,
            dataItem:"hoatietvang",
            img:"./assets/img/img-product/product-1.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:18,
            dataItem:"hoatietxanh",
            img:"./assets/img/img-product/product-2.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:19,
            dataItem:"hongdam",
            img:"./assets/img/img-product/product-3.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:20,
            dataItem:"hongnhat",
            img:"./assets/img/img-product/product-4.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:21,
            dataItem:"kedo",
            img:"./assets/img/img-product/product-5.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:22,
            dataItem:"ketrang",
            img:"./assets/img/img-product/product-6.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:23,
            dataItem:"kexanh",
            img:"./assets/img/img-product/product-7.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:24,
            dataItem:"kecaroghi",
            img:"./assets/img/img-product/product-8.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:25,
            dataItem:"cam",
            img:"./assets/img/img-product/product-2.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:26,
            dataItem:"cam",
            img:"./assets/img/img-product/product-2.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:27,
            dataItem:"cam",
            img:"./assets/img/img-product/product-2.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:28,
            dataItem:"cam",
            img:"./assets/img/img-product/product-2.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:29,
            dataItem:"cam",
            img:"./assets/img/img-product/product-3.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:30,
            dataItem:"cam",
            img:"./assets/img/img-product/product-3.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:31,
            dataItem:"cam",
            img:"./assets/img/img-product/product-3.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:32,
            dataItem:"cam",
            img:"./assets/img/img-product/product-3.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:33,
            dataItem:"cam",
            img:"./assets/img/img-product/product-4.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:34,
            dataItem:"cam",
            img:"./assets/img/img-product/product-4.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:35,
            dataItem:"cam",
            img:"./assets/img/img-product/product-4.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:36,
            dataItem:"cam",
            img:"./assets/img/img-product/product-4.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:37,
            dataItem:"cam",
            img:"./assets/img/img-product/product-5.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:38,
            dataItem:"cam",
            img:"./assets/img/img-product/product-5.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:39,
            dataItem:"cam",
            img:"./assets/img/img-product/product-5.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:40,
            dataItem:"cam",
            img:"./assets/img/img-product/product-5.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:41,
            dataItem:"cam",
            img:"./assets/img/img-product/product-6.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:42,
            dataItem:"cam",
            img:"./assets/img/img-product/product-6.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:43,
            dataItem:"cam",
            img:"./assets/img/img-product/product-6.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:44,
            dataItem:"cam",
            img:"./assets/img/img-product/product-6.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:45,
            dataItem:"cam",
            img:"./assets/img/img-product/product-7.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:46,
            dataItem:"cam",
            img:"./assets/img/img-product/product-7.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:47,
            dataItem:"cam",
            img:"./assets/img/img-product/product-7.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        },
        {
            id:48,
            dataItem:"cam",
            img:"./assets/img/img-product/product-7.jpg",
            desc:"Quần tây nữ 92WEAR âu baggy công sở, đi chơi QAW0454",
            price:"242.500₫",
            netPrice:"485.000₫"
        }
    ]

    let perPage = 24,
    currentPageFull = 1,
    start = 0;
    end = perPage,
    totalPages = Math.ceil(product.length/perPage);

    function getCurrentPage(currentPage){
        start = (currentPage - 1) * perPage;
        end = currentPage * perPage;
    }

    function changePage(currentPage,product){
        const currentPages = document.querySelectorAll(".index-page");
        
        for(let i = 0; i < currentPages.length; i++){
            currentPages[i].addEventListener('click',()=>{
                let value = i + 1;
                currentPage = value;

                activeIndexPage(currentPages,currentPages[i])
                getCurrentPage(currentPage);
                render(product,start,end);
            })
        }
    }

    function activeIndexPage(pages,page){
        for(let j = 0; j < pages.length; j++){
            pages[j].classList.remove("active");
        }
        page.classList.add("active");
    }

    function render(product,start,end){
        html = '';
        const content = product.map((item,index)=>{
            
            if(index >= start && index < end){
                html +=`<div class=" product-item" data-item ="${item.dataItem}">`;
                html +=`<div class="product-item-info">`;
                html += `<div class="product-item-img">`;
                html +=`<a href="#">`;
                html +=`<img src="${item.img}" alt="">`;
                html +=`</a>`;
                html +=`</div>`;            
                html +=`<div class="product-item-details">`;            
                html +=`<a class="product-item-desc" href="#">${item.desc}</a>`;                
                html +=`<div class="product-item-price">`;            
                html +=`<span>${item.price}</span>`;        
                html +=`<span class="net-price">${item.netPrice}</span>`;        
                html +=`</div>`;            
                html +=`</div>`;         
                html +=`</div>`;  
                html +=`</div>`;    
                ;

                return html;
            }
        })

        document.querySelector(".product-list").innerHTML = html;
    }

    function renderListPage(product,start,totalPages){
        let html = '';
        html += '<li class="pagination_control-prev">';
        html += '<a href="#">‹</a>';
        html+='</li>';
        html += '<li class="active index-page">';
        html += '<a href="#">1</a>';
        html += '</li>'

        const content = product.map((item,index)=>{
            if(index - 1 >= start && index - 1 < totalPages -1){
                html += '<li class="index-page">';
                html += `<a href="#">${index + 1}</a>`;
                html += '</li>'

                return html;
            }
        })
        html += '<li class="pagination_control-next">';
        html += '<a href="#">›</a>';
        html+='</li>';

        document.querySelector(".pagination ul").innerHTML = html;
    }
    
    render(product,start,end);
    renderListPage(product,start,totalPages);
    clickActionBtn(product,currentPageFull,totalPages);
    changePage(currentPageFull,product);

    // CLICK FUNCTION 
    function clickActionBtn(list,currentPage,totalPages){
        const btnNext = document.querySelector(".pagination_control-next"),
        btnPrev = document.querySelector(".pagination_control-prev");

        btnNext.addEventListener('click', ()=>{
            const currentPages = document.querySelectorAll(".index-page");
            currentPage++;
            if(currentPage > totalPages){
                currentPage = totalPages;
            }
            
            getCurrentPage(currentPage);
            activeIndexPage(currentPages,currentPages[currentPage-1]);
            render(list,start,end);
        })

        btnPrev.addEventListener('click',()=>{
            const currentPages = document.querySelectorAll(".index-page");
            currentPage--;
            if(currentPage < 1){
                currentPage = 1;
            }

            getCurrentPage(currentPage);
            activeIndexPage(currentPages,currentPages[currentPage-1]);
            render(list,start,end);
        })
    }
    // FILTER 
    const filterColors = document.querySelectorAll(".item");
    let filteredProducts;

    function getLocalStorage(){
        return localStorage.getItem("filteredProducts") ? JSON.parse(localStorage.getItem("filteredProducts")) : [];
    }

    function count(products,data,flag){
        for(let i = 0; i < products.length; i++) {
            if (products[i].dataItem === data){
                flag++;
            }
        }

        return flag;
    }
    
    Array.from(filterColors).forEach(function (element) {
        element.addEventListener('click', function () {
            let dataFilter = this.getAttribute("data-filter");
            
            filteredProducts = getLocalStorage();

            if (this.classList.contains("active")) {
                this.classList.remove("active");
                let flag = 0;
                for(let i = 0; i < filteredProducts.length; i++) {
                    if (filteredProducts[i].dataItem === dataFilter){
                        filteredProducts.splice(i,count(filteredProducts,dataFilter,flag));
                    }
                }

                localStorage.setItem("filteredProducts",JSON.stringify(filteredProducts));
        
            }else{
                this.classList.add("active");

                product.forEach((item)=>{
                    if (item.dataItem === dataFilter){
                        filteredProducts.push(item);
                    }
                })
                localStorage.setItem("filteredProducts",JSON.stringify(filteredProducts));
            }

            if(filteredProducts.length == 0){
                totalPages = Math.ceil(product.length / perPage);
                currentPageFull = 1;

                getCurrentPage(currentPageFull)
                render(product,start,end);
                renderListPage(product,start,totalPages);
                clickActionBtn(product,currentPageFull,totalPages);
                changePage(currentPageFull,product);
            }else{
                totalPages = Math.ceil(filteredProducts.length / perPage); 
                let currentPageFilter = 1;

                getCurrentPage(currentPageFilter)
                renderListPage(filteredProducts,start,totalPages);
                render(filteredProducts,start,end);
                clickActionBtn(filteredProducts,currentPageFilter,totalPages);
                changePage(currentPageFilter,filteredProducts);
            }
        })
    })

    // delete local storage after reloaded
    window.addEventListener('load', function () {
        localStorage.setItem("filteredProducts",[]);
    });

    
