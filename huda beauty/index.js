let arr = [
    {
        id : 1,
        pr_name : "Marrakesh in a Bottle Orange Blossom | 24 Eau de Parfum",
        pri : "32.00",
        img : "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwb08aa409/images/marrakesh-orange-blossom/KY-VacayInABottle-Marrakesh-10ml-Packshots_11.jpg?sw=600&sh=600&sm=fit", 
        ret : "4.8 (142)"
    },
    {
        id : 2,
        pr_name : "Capri in a Bottle Lemon Sugar | 14 Eau de Parfum",
        pri: "32.00", 
        img :  "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw5af4c892/images/capri-lemon-sugar/KY-VacayInABottle-Capri-10ml-Packshots1.jpg?sw=600&sh=600&sm=fit" ,
        ret : "4.9 (182)",
    },

    {
        id : 3,
        pr_name : "Maui in a Bottle Sweet Banana | 37 Eau de Parfum",
        pri: "32.00", 
        img :  "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwcfeabdb5/images/maui-sweet-banana/KY-VacayInABottle-Maui-10ml-Packshots_11.jpg?sw=600&sh=600&sm=fit",
        ret : "4.9 (165)"
    },

    {
        id : 4,
        pr_name : "Maldives in a Bottle Ylang Coco | 20 Eau de Parfum",
        pri: "32.00", 
        img :  "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw3a1616e6/images/ylang-coco/KY-VacayInABottle-Maldives-10ml-Packshots_11.jpg?sw=600&sh=600&sm=fit",
        ret : "4.9 (161)"
    },

    {
        id : 5,
        pr_name : "Vacay in a Bottle Miniature Set",
        pri: "105.00", 
        img :  "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw2df0eebc/images/vacay-bottle-miniature-set/KY-VacayinabottleSet-Packshot-2-2.jpg?sw=600&sh=600&sm=fit",
        ret : "4.8 (187)"
    },

    {
        id : 6,
        pr_name : "Vacay in a Bottle Discovery Set",
        pri: "15.00", 
        img :  "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw17a10d91/images/vacay-bottle-discovery-set/KY-Vacayinabottle-DiscoveryLayeringSet-Packshot-3.jpg?sw=600&sh=600&sm=fit",
        ret : "4.8 (49)"
    },


]

document.getElementById("cart_icon").addEventListener("click",function()
{
    document.getElementById("cart").style.display = "block"
    document.getElementById("cart").style.width = "35%"
    document.getElementById("cart").style.height = "76vh"
    // document.getElementById("cart").style.padding = "50px"
    document.getElementById("cart").style.backgroundColor = "#f6f1ee"
    document.getElementById("cart").style.overflow = "scroll"
})

document.getElementById("closes").addEventListener("click",function()
{
    document.getElementById("cart").style.display = "none"
  
})
   


    localStorage.setItem("product" , JSON.stringify(arr))
    console.log(arr)


    let main = document.getElementById("main3")

    for(let i = 0 ; i <= arr.length ; i++)
    {

        let div = document.createElement("div")
        div.setAttribute("class" , "col col-12 col-lg-4")

        let div1 = document.createElement("div")
        div1.setAttribute("class" , "div1")

        let img = document.createElement("img")
        img.src = arr[i].img
        img.setAttribute("class" , "img2")

        let p1 = document.createElement("p")
        p1.innerHTML = arr[i].pr_name
        p1.setAttribute("class" , "p1")

        let pr = document.createElement("p")
        pr.innerHTML = arr[i].pri

        let ret = document.createElement("p")
        ret.innerHTML = arr[i].ret

        let btn = document.createElement("button")
        btn.innerHTML = "ADD TO CART"
        btn.setAttribute("class" , "btn1")
        
        div1.append(img , p1 , pr , ret , btn);
        div.append(div1);
        main.append(div);





        btn.addEventListener("click" , function(){
        
        console.log(arr[i].pr)
        alert(
            "PRODUCT NAME: " + arr[i].pr_name +  
            "  SHOW YOUR PRODUCT CLICK ON CART ICON"
        )
        
        // document.getElementById("txt").innerHTML = ""

        let main = document.getElementById("main4")
            
        let div_cart = document.createElement("div")
        div_cart.setAttribute("class" , "col col-2")

        let div1_cart = document.createElement("div")
        div1_cart.setAttribute("class" , "div1")

        let cart_img = document.createElement("img");
            cart_img.src = arr[i].img;
            cart_img.setAttribute("class", "img2");


        let cart_p1 = document.createElement("p")
        cart_p1.innerHTML = arr[i].pr_name
        cart_p1.setAttribute("class" , "p1")



        let cart_pr = document.createElement("p")
        cart_pr.innerHTML = arr[i].pri


        let cart_ret = document.createElement("p")
        cart_ret.innerHTML = arr[i].ret


        let cart_btn = document.createElement("button")
        cart_btn.innerHTML = "REMOVE FROM CART"
        cart_btn.setAttribute("class" , "btn1 delet")

        localStorage.setItem("cart" , JSON.stringify(arr[i]))

             

        div_cart.append(div1_cart)
        div1_cart.append(cart_img , cart_p1 , cart_pr , cart_ret , cart_btn)

        main.append(div1_cart)
        
        cart_btn.addEventListener("click" , function(){
            div1_cart.remove()
            alert("Item Removed Sucefully")
        })

        })



    }



    localStorage.setItem("cart" , JSON.stringify(arr))

