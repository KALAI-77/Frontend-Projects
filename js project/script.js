
var popup_overlay=document.querySelector(".overlay")
var popup_popupbox=document.querySelector(".popupbox")
var popup_popupbtn=document.querySelector(".popupbtn")
var cancelbtn=document.getElementById("cancel")
var addbtn=document.getElementById("addbtn")
var clear =document.getElementById("clear")


popup_popupbtn.addEventListener("click",function(){
    popup_overlay.style.display="block"
    popup_popupbox.style.display="block"

    names.value="";
    Author_name.value="";
    text.value="";
})

var audio=new Audio();
audio.src="click.mp3"


cancelbtn.addEventListener("click",function(event){
  event.preventDefault()
  popup_overlay.style.display="none"
  popup_popupbox.style.display="none"
})


//select .container , .contain , #head , #name , #description

var container=document.querySelector(".container")
var contain=document.querySelector(".contain")
var names=document.getElementById("name")
var Author_name=document.getElementById("author_name")
var text=document.getElementById("textarea")
var btn=document.getElementById("btn")


addbtn.addEventListener("click",function(event){
    event.preventDefault()
    popup_overlay.style.display="none"
    popup_popupbox.style.display="none"

    var div =document.createElement('div')
    div.setAttribute("class","contain")
    div.innerHTML=`<h1 id="h1">${names.value}</h1>
    <h3>${Author_name.value}</h3>
    <p>${text.value}<p>
    <button onclick="cancels(event),audio.play()">Cancel</button>`
    container.append(div)
    
})

// if click the cancel button total conatin will remove

function cancels(event) {
    event.target.closest('.contain').remove(); // Removes the whole .contain element
}


