// //es 6dagi yangi xusussiyatlar
// //interpolatsiya Clonlash 
// // const name = "Shaxnoza"
// // const lastName = "Irgasheva"
// // const fullName = name + "  " + lastName 
// // const fullName2 = `${name}  ${lastName}`
// // console.log(fullName)
// // console.log(fullName2)

// //clonlash yani nusxa kochirish 2turi bor =>{
//     // Shallow copy chuqur bolmagan
//     //Deep copy chuqur bolgan
// //}
//     // Shallow copy chuqur bolmagan
// // const ismlar = ["Javohir","Diyor","Behruz"]

// // const yangiIsmlar = ismlar

// // yangiIsmlar.push("Sardor")
// // console.log(ismlar)
// // console.log(yangiIsmlar)

// //Deep copy

// // const ismlar = ["Javohir","Diyor","Behruz"]

// // const yangiIsmlar = [...ismlar]

// // yangiIsmlar.push("Sardor")
// // console.log(ismlar)
// // console.log(yangiIsmlar)

// // const kontaktlar = ["bohodir ","alisher","javohir"]
// // const maxsusKontakt = [...kontaktlar]
// // maxsusKontakt.push("Aziza")
// // console.log(kontaktlar)
// // console.log(maxsusKontakt)


// // object
// // const inson ={
// //     ismi:"javohir",
// //     familyasi:"nuriddinov",
// //     yoshi:15,
// //     kasbi:"developer",
// //     manzili:{
// //         mahalla:"Beshkappa"
// //     }
// // }
// // // console.log(inson.ismi)

// // const {ismi,yoshi,kasbi,manzili}=inson
// // // console.log(yoshi)
// // // console.log(ismi)
// // // console.log(kasbi)
// // console.log(manzili)

// // const arr = [122,233,434,55]

// // const [birinchi,ikkinchi,...qolgani]=arr
// // console.log(ikkinchi)
// // console.log(birinchi)
// // console.log(qolgani)
// // 
// // for of metodi  arraylar uchun
// // const number = [21, 12, 31, 23]

// // // for(number of num){
// // //     console.log(number)
// // // }

// // for(let i=0;i<number.length;i++){
// //     console.log(number[i])
// // }



// // function nusxaObj(obj){
// // let objNusxa={}
// // for(let key in obj){
// //     objNusxa[key]= obj[key]

// // }
// // return objNusxa
// // }
// // const student ={
// //     name:"Alisher",
// //     manzili:"Boyqozon",
// //     kursi:2,
// //     manzili:{
// //         kocha:"yoshlik",
// //         mahalla:"zamaxshariy"
// //     }
// // }
// // const studentt =nusxaObj(student)
// // nusxaObj()

// // student.name="Shaxnoza"
// // student.kursi=4
// // console.log(studentt)
// // console.log(student)

// const numbers= {
//     x:10,
//     y:5,
//     // z:{
//     //     a:4,
//     //     b:5
//     // }
// }
// // const newNumber = Object.assign({},numbers)
// // newNumber.a=5
// // newNumber.b=15
// const num ={
//     z:17,
// }

// // console.log(newNumber)
// const allNum = Object.assign(numbers,num)
// //2ta objectni birlashtirish
// console.log(allNum)

// const num = [1,2,3]
// const newNumber =num.slice(0,3)
// newNumber[2] ="shaxnoza"
// console.log(num)
// console.log(newNumber)

//spread operatori

// const numGood= [4,5]
// const numBad = [1,2,3]
// const mix = [...numBad , ...numGood]

// console.log(mix)

// const num = [2,4,6]

// function calc(a,b,c){
// console.log(a+b+c)
// }
// calc(...num)
//arraylarda
// const num = ["3","3","4"]
// const newNum = [...num]
// newNum[0]="1"
// console.log(num)
// console.log(newNum)

//objectlarda

// const num ={
//     a:4,
//     b:5
// }

// const newNum = { ...num  }
// num.a = 5
// console.log(num)
// console.log(newNum)

// const string = "Javohir Nuritdinov"
// const string = "Shaxnoza Irgasheva"
// for(char of string){
//     console.log(char)
// }

// import export methods
// import {arr} from "./script.js"
// for(let item of arr){
//     console.log(item)
// }

// import {name} from "./script.js"
// for(let n of name){
//     console.log(n)
// }

// import {num} from "./script.js"
// const newNum = [...num]

// for(let n of newNum){
//     console.log(n)
// }
// function


// import {number} from "./script.js"
// let num1 = prompt("a sonini kiriting")*1
// let num2 = prompt("b sonini kiririting")*1
// console.log(number(num1,num2))
// kopaytirish
// import {number} from "./script.js"
// let num = prompt("a sonini kiriting")*1
// let num1 = prompt("b sonini kiririting")*1
// console.log(number(num,num1))
// bolish
// alert ("1sonni katta ikkinchi sonni kichik kiriting")
// import {number} from "./script.js"
// let num = prompt("a sonini kiriting")*1
// let num1 = prompt("b sonini kiririting")*1
// console.log(number(num,num1))

// import {number} from "./script.js"
// let num = prompt("a sonini kiriting")*1
// let num1 = prompt("b sonini kiririting")*1
// console.log(number(num,num1))