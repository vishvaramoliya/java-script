$(document).ready(function(){
    $(window).scroll(function() { 
      if ($(document).scrollTop() > 80) { 
        $(".header").css("background-color", "black");
        $(".header").css("top", "0");
        $(".hide").hide()
      } else {
        $(".header").css("background-color", "transparent");
        $(".hide").show() 
    }
    });
  });

let home = [

    {
        id : 1,
        name : "Easy Blur Foundation",
        pri : "$48.00",
        hm_img : "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwe62616e0/images/easy-blur/HB_EASY-BLUR-FOUNDATION_PDP_PACKSHOT_19-MACCHIATO-400G.jpg?sw=600&sh=600&sm=fit", 
    },

    {
        id : 2,
        name : "Easy Blur Foundation Mini",
        pri : "$23.00",
        hm_img : "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw3bca5ad8/images/easy-blur-mini/HB-EasyBlur-Sample-Packshot-Texture-Macchiato.jpg?sw=600&sh=600&sm=fit", 
    },

    {
        id : 3,
        name : "Easy BLur Silicone-Free Smoothing Primer",
        pri : "$48.00",
        hm_img : "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwb881a676/images/easy-blur-primer/HB_EASY-BLUR-PRIMER_PDP_FINAL_PACKSHOT.jpg?sw=600&sh=600&sm=fit", 
    },

    {
        id : 4,
        name : "Blush Filter Liquid Blush",
        pri : "$29.00",
        hm_img : "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw7e9a9634/images/sunset-blushed-duo%E2%80%8B/HB_BLUSH-PDP-PACKSHOTS_COTTON-CANDY.jpg?sw=600&sh=600&sm=fit", 
    }
]


    console.log(home)
    

    let main = document.getElementById("home1")

    for(let i = 0 ; i <= home.length ; i++)
    {

        let div = document.createElement("div")
        div.setAttribute("class" , "col col-12 col-lg-3")

        let div1 = document.createElement("div")
        div1.setAttribute("class" , "hm_div1")

        let img = document.createElement("img")
        img.src = home[i].hm_img
        img.setAttribute("class" , "hm_img2")

        let p1 = document.createElement("p")
        p1.innerHTML = home[i].name
        p1.setAttribute("class" , "p1")

        let pr = document.createElement("p")
        pr.innerHTML = home[i].pri
        pr.setAttribute("class" , "pri")

     

        let btn = document.createElement("button")
        btn.innerHTML = "NOTIFY ME"
        btn.setAttribute("class" , "btn2")
        
        div1.append(img , p1 , pr , btn);
        div.append(div1);
        main.append(div);

    }




