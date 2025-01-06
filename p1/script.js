//.to kyun? initial "to" final
//.from? final to initial
// gsap.to("#box1",{
//     //we can set css properties here
//     x:500,
//     duration: 2, //2sec tk animaton hoga
//     delay:1, //1 sec ke baad animation shuru hoga
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius: "50%",
//     scale: 0.5,
//     repeat: -1, //-1 for infinite times repeat
//     yoyo:true, //jaake wapas ayega, fir vapas jayega

// })

// gsap.from("#box2",{
//     //we can set css properties here
//     x:500,
//     duration: 2, //2sec tk animaton hoga
//     delay:1, //1 sec ke baad animation shuru hoga
//     opacity:0,
//     //stagger:1
//     repeat:-1,

// })

// var tl = gsap.timeline();

// tl.from("h2",{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:0.5
// })

// tl.from("h4",{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:0.5,
//     stagger:0.3,
// })

// tl.from("h1",{
//     y:20,
//     opacity:0,
//     duration:0.5,
//     scale:0.2
// })

// scrolltrigger
// gsap.from("#pg1 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
// })

// gsap.from("#pg2 #box", {
//     scale:0,
//     // delay:1,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#pg2 #box"
//     scrollTrigger:{
//         trigger:"#pg2 #box",
//         scroller:"body",
//         markers: true,
//         start:"top 60%",
//     }
// })

// gsap.from("#pg2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#pg2 h1",
//         scroller:"body",
//         markers: true,
//         start:"top 50%"
//     }
// })

// gsap.from("#pg2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#pg2 h2",
//         scroller:"body",
//         markers: true,
//         start:"top 50%"
//     }
// })

// gsap.from("#pg2 #box", {
//     scale:0,
//     opacity:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#pg2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub: 2,
//         pin: true
//     }
// })

gsap.to("#pg2 h1", {
  transform: "translateX(-150%)",

  scrollTrigger: {
    trigger: "#pg2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    // //for pin property(here h1), trigger parent(here pg2)
    pin: true,
  },
});
