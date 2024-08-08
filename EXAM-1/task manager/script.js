let editIndex = -1;

function DisplayData(){

  // let div = document.createElement("div")
  document.getElementById("userList").innerHTML = " "

    let users = JSON.parse(localStorage.getItem("Users")) || []


    users.forEach((element,index) => {
        
      let div = document.createElement("div")
      div.setAttribute("class" , "col-2")


        let h1 = document.createElement("p")
        h1.innerHTML = `<p><b style="color:black">Admin: </b><span style="color:#cec7b5">${element.name}</span></p> `

        let h2 = document.createElement("p")
        h2.innerHTML = `<p><b style="color:black">Subject: </b>${element.sub}</p> `

        let h3 = document.createElement("p")
        h3.innerHTML = `<p><b style="color:black">Info: </b>${element.desc}</p> `

        let btn = document.createElement("button")
        btn.innerText = "Delete"
        btn.setAttribute("class" , "btn1")


        btn.addEventListener("click" , function(){
            let users = JSON.parse(localStorage.getItem("Users"))
            users.splice(index,1)
            localStorage.setItem("Users",JSON.stringify(users))
            DisplayData()
        })

        let editbtn = document.createElement("button")
        editbtn.innerText = "Edit"
        editbtn.setAttribute("class" , "btn1")

        editbtn.addEventListener("click" , function(){

          editData(element.name , index , element.sub , element.desc)
        })

        div.append(h2 , h1  , h3 , btn , editbtn)
        document.getElementById("userList").append(div)
    });


}


function editData(name , index , sub , desc){

  let user = document.getElementById("UserName").value = name
  let subj = document.getElementById("sub").value = sub
  let info = document.getElementById("description").value = desc

  document.getElementById("editUser").style.display = 'inline'
  document.getElementById("addUser").style.display = 'none'

  editIndex = index

}



document.getElementById("addUser").addEventListener("click" , function(){

    let users = JSON.parse(localStorage.getItem("Users")) || []

    let user = document.getElementById("UserName").value 
    let subject = document.getElementById("sub").value
    let des = document.getElementById("description").value
    let obj = {
        name:user,
        sub:subject,
        desc:des
    }   
    

    users.push(obj)

    localStorage.setItem("Users" , JSON.stringify(users))
    DisplayData()
    document.getElementById("UserName").value=""

    
})



document.getElementById("editUser").addEventListener("click" , function(){

  let users = JSON.parse(localStorage.getItem("Users")) || []

  let user = document.getElementById("UserName").value 
  
  users[editIndex].name = user 

  localStorage.setItem("Users" , JSON.stringify(users))
  DisplayData()
  document.getElementById("UserName").value=""

  editIndex = -1


  document.getElementById("editUser").style.display = 'none'
  document.getElementById("addUser").style.display = 'inline'

})







DisplayData()
