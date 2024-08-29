document.getElementById("u-icon").addEventListener("click", function () {
    document.getElementById("user").style.display = "block";
});



function display(){
    document.getElementById("btn").addEventListener("click", function () {
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
    
        // Reset error messages
        document.getElementById("p1").style.display = "none";
        document.getElementById("p2").style.display = "none";
    
        if (email === "" && pass === "") {
            document.getElementById("p1").style.display = "block";
            document.getElementById("p2").style.display = "block";
        } else if (email === "") {
            document.getElementById("p1").style.display = "block";
        } else if (pass === "") {
            document.getElementById("p2").style.display = "block";
        } else {
            // Hide error messages
            document.getElementById("p1").style.display = "none";
            document.getElementById("p2").style.display = "none";
            alert("login successfully...");
    
            // Create new elements
            let main = document.getElementById("user");
            let div1 = document.createElement("div");
            div1.setAttribute("class", "col");
            div1.className = "div1"
    
            let p1 = document.createElement("p");
            p1.innerText = "Email: " + email;
    
            let p2 = document.createElement("p");
            p2.innerText = "Password: " + pass;
    
            let i1 = document.createElement("input");
            i1.setAttribute("placeholder", "Your name");
            i1.setAttribute("class", "in")
            i1.setAttribute("id" , "em")
            i1.style.display = "none"
    
    
            let i2 = document.createElement("input");
            i2.setAttribute("placeholder", "Your password");
            i2.setAttribute("class", "in")
            i2.setAttribute("id" , "ps")
            i2.style.display = "none"
    
    
    
            let b1 = document.createElement("button");
            b1.innerText = "EDIT";
            b1.classList.add("btn2");

            b1.addEventListener("click", function () {
                i1.style.display = "block"
                i2.style.display = "block"
                b1.innerHTML = "UPDATE"
                
             
            
            b1.addEventListener("click" , function(){
                let new_id = document.getElementById("em").value 
            let new_ps = document.getElementById("ps").value

            p1.innerText = "Email: " + new_id;
    
            p2.innerText = "Password: " + new_ps;
            
            i1.style.display = "none"
            i2.style.display = "none"
            b1.innerHTML = "EDIT"
            display()

            })
               
                
            })
      
    
            // Append elements
            div1.append(p1, p2, i1, i2, b1 );
            main.append(div1);
    
    
    
            
        }
    
    });
}


display()


document.getElementById("closes").addEventListener("click", function () {
    document.getElementById("user").style.display = "none";
});
