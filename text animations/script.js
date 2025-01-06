function breakText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var clutter = "";

//   splittedText.forEach(function (elem) {
//     clutter += `<span>${elem}</span>`;
//   });

var half = splittedText.length/2

splittedText.forEach(function (elem,idx) {
    if(idx<half){
        clutter += `<span class="a">${elem}</span>`
    }else{
        clutter += `<span class="b">${elem}</span>`
    }
  });



  h1.innerHTML = clutter;
}

breakText();

// gsap.from("h1 span",{
//     y:50,
//     duration:0.7,
//     delay:0.5,
//     opacity:0,
//     stagger:-0.15
// })

gsap.from("h1 .a",{
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from("h1 .b",{
    y:50,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})
