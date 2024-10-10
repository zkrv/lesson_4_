//// dom- document object model

// console.dir(document);
//
// document.body.style.background = "#000000";
//
// document.title = "dom";


//// window

// console.log(window.document)

// var h2 = document.getElementsByClassName("name")
// var firstH2=h2[0];
// var secondP=h2[1]
// secondP.style.color = "purple"
//
// firstH2.style.color = "red"
//
// console.log(h2)


// var p = document.getElementById("name")
// console.log(p)


// var btns = document.getElementsByTagName("button");
//
// var btn1=btns[0];
// btn1.style.width = "400px"
// btn1.style.height = "400px"
// btn1.style.background = "aqua"
// console.log(btns);

// var element = document.querySelector("#btn");
// var element2 = document.querySelector(".btn2");
// var element3 = document.querySelector("span");
//
// var element4 = document.querySelectorAll("button")
// console.log(element4);

//// event

// var btn=document.querySelector(".btn2");
// var h2 = document.querySelector("h2")
// btn.onclick = ()=>{
//     console.log("click")
// }
// console.dir(btn);
// console.dir(h2)
// var count = 0
// btn.addEventListener("click",()=>{
//     count++
//     console.log(count);
// });

// var input=document.querySelector("input")
// input.addEventListener("input", (event)=>{
//     h2.innerHTML=event.target.value
//     console.log(event.target.value)
// })
//
// input.oninput = (event)=> (h2.innerHTML=event.target.value){}


// var posY=document.querySelector("#posY")
// var posX=document.querySelector("#posX")
//
// window.addEventListener("mousemove",(e)=>{
//     posY.innerHTML=e.screenY;
//     posX.innerHTML=e.screenX;
//     console.log(e);
// })


// var btn=document.querySelector("button")
// var h2=document.createElement("div")
// h2.innerHTML="hello js"
// btn.onclick = ()=>{
//     document.body.append(h2)
// }
// console.log(h2)










