fetch("https://fakestoreapi.com/products")

    .then((res) => {
        return res.json()
    }).then((json) => {
        console.log(json)
        displayData(json)
    })

function displayData(json) {

    json.map((el, index) => {

        let div = document.createElement("div")
        div.setAttribute("class", "div1")

        let text = document.createElement("h3")
        text.innerHTML = el.category;
        text.setAttribute("class", "text1")

        let img = document.createElement("img")
        img.setAttribute("src", el.image)
        img.setAttribute("class", "img")


        let price = document.createElement("p")
        price.innerHTML = "Price : ₹" + el.price
        price.className = "price"

        let input = document.createElement("input")
        input.className = "input"
        input.setAttribute("placeholder", "Enter Price to update")

        let input1 = document.createElement("input")
        input1.className = "input1"
        input1.setAttribute("placeholder", "Enter category to change")

        let btn1 = document.createElement("button")
        btn1.innerHTML = "Edit"
        btn1.setAttribute("class", "btn1")


        let btn2 = document.createElement("button")
        btn2.innerHTML = "Update"
        btn2.setAttribute("class", "btn1")

        let btn3 = document.createElement("button")
        btn3.innerHTML = "Delete"
        btn3.setAttribute("class", "btn1")


        let btn4 = document.createElement("button")
        btn4.innerHTML = "Add To Cart"
        btn4.setAttribute("class", "btn1 button4")


        div.append(img, text, price, input, input1,btn4, btn1, btn2, btn3 )
        document.getElementById("main").append(div)



        btn1.addEventListener("click", function () {
            input.value = el.price;
            input1.value = el.category;

            localStorage.setItem("Edit_value", JSON.stringify(el.price))
            localStorage.setItem("Category", JSON.stringify(el.category))

            input.style.display = "block"
            input1.style.display = "block"
        })

        btn2.addEventListener("click", function () {
            let newPrice = input.value
            let newCategory = input1.value

            price.innerHTML = "Price : ₹" + newPrice
            text.innerHTML = newCategory

            localStorage.setItem("Updated_value", JSON.stringify(newPrice))
            localStorage.setItem("Category", JSON.stringify(newCategory))

        })

        btn3.addEventListener("click", function () {

            div.remove()

            localStorage.removeItem("Edit_value")
            localStorage.removeItem("Updated_value");
            localStorage.removeItem("Category");

        })

        btn4.addEventListener("click", function () {
            console.log(el.image);
            console.log(el.price);

            alert("ADD SUSSCEFULLY")
            let cart_div = document.getElementById("mainCartDiv");

            let cart_div1 = document.createElement("div");
            cart_div1.className = "Addtocart"

            let cart_img = document.createElement("img");
            cart_img.setAttribute("src", el.image);
            cart_img.setAttribute("class", "cartImg");

            let cart_price = document.createElement("p");
            cart_price.innerHTML = "Price : ₹" + el.price;
            cart_price.setAttribute("class", "cartPrice");

            let icon = document.createElement("i")
            icon.setAttribute("class", "fa-solid fa-trash")
            icon.style.marginRight = "15px"

            icon.addEventListener("click" , function(){
                cart_div1.remove()
            })

            cart_div1.append(cart_img, cart_price, icon);
            cart_div.append(cart_div1);
        })




    })

}



$(document).ready(function(){
    $(".icon").click(function(){
        $(".add").css("display" , "block")
    })

    $(".icon").dblclick(function(){
        $(".add").css("display" , "none")
    })
})