

// const ism = "salom"

// localStorage.setItem("name" , ism)
// const getname = localStorage.getItem("name")

// console.log(getname)


// const ismlar = ["farrux" , "javohir"]
// localStorage. setItem("name" , JSON.stringify(ismlar))

// const namearr = JSON.parse(localStorage.getItem("name"))
// console.log(namearr)

// const ismlarku = ["salom " , "qalaysan"]
// localStorage.setItem("nima",JSON.stringify(ismlarku))


$(document).ready(function(){

   
//     $(".btn").click(()=>{    
//    let get = $(".ism").val()
//    let set = $(".ismm").val()
//    localStorage.setItem( get, set)  
//     }) 
     
//     $('.btn').click(function() {
//         $(".doska").append('<tr><td></td><td></td></tr>');
//       });


$(".btn").click(function() {
    let get = $(".ism").val();
    let set = $(".ismm").val();
    localStorage.setItem( get, set)
    $(".doska").append(' <tr><td>' + get +'</td>' +'<td>' + set + '</td></tr>');
});

$('.remove').click(function(){
   $("td").remove(); 

})

$('.ls').click(function(){
    localStorage.clear()
 
 })
 

 })
 
// import {add} from "./app.js"


 

  

