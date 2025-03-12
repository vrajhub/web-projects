// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });


gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

//     ------->>>>
locoScroll.on("scroll", (obj) => {
    console.log(obj.scroll); // Check if scrolling logs updates
  });
  

  // Listen to the window load event and update both ScrollTrigger and Locomotive Scroll
window.addEventListener("load", () => {
    ScrollTrigger.refresh(); // Refresh ScrollTrigger
    locoScroll.update(); // Ensure Locomotive Scroll is updated
  });
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh(); // Refresh on resize to ensure correct calculations
  });
  



  



//////////////////////////////////////////////////////////////////
////////////////// Dom part
//////////////////////////////////////////////////////////////////


/// Creating cursor 
let cursor = document.querySelector(".cursor");
let main = document.querySelector("#main");
let videoPage1 = document.querySelector("#pag1Vid");
let page1 = document.querySelector("#page1");
let box = document.querySelectorAll(".box");


main.addEventListener("mousemove",function(event){
   cursor.style.left=event.x+-10+"px";
   cursor.style.top=event.y+-10+"px";

});
// videoPage1.muted=true;
// videoPage1.addEventListener("mouseenter",function(event){
//     cursor.innerHTML="<h2>Sound On</h2>";
//     cursor.style.width="100px";
//     videoPage1.muted=false;
    // videoPage1.play();
//     videoPage1.style.border = '2px solid white';
// }
// );
// videoPage1.addEventListener('mouseleave', function() {
//     videoPage1.muted = true;   // Turns sound off
//     // Reset to default appearance
//     videoPage1.style.border = 'none'; 
//     videoPage1.paush(); // Removes border
// });

// Ensure video is muted on load
// videoPage1.addEventListener("loadeddata", () => {
//     videoPage1.muted = true;
//     videoPage1.autoplay = true;
// });

videoPage1.muted = true;
videoPage1.play();
function cursorONVideo(){
    videoPage1.addEventListener("mouseenter",function(){
        cursor.style.width="100px";
        videoPage1.autoplay = true;
        cursor.style.opacity="1";
        cursor.style.height="25px";
        console.dir(cursor.textContent);
        cursor.style.borderRadius="50px";
        cursor.innerHTML= videoPage1.muted ? "<h3>Sound Off</h3>" : "<h3>Sound On</h3>";

        // cursor.style.transition = "all 1s ease-in";
        cursor.style.transition = "auto";
        // page1.style.zIndex="9"
        // cursor.style.zIndex="8";
        cursor.style.pointerEvents="none";
 
            videoPlay();
    });


};

    videoPage1.addEventListener("mouseout",function(){
    
         cursor.style.width="20px";
         videoPage1.autoplay = true;
         cursor.style.height="20px";
        //  console.log(cursor.style);

         cursor.style.borderRadius="50%";
         cursor.innerHTML="";
         cursor.style.transition = "none";
        //  page1.style.zIndex="9"
        //  cursor.style.zIndex="8";
         cursor.style.pointerEvents="none";
 
 
     });



// cursorOutVideo();

function videoPlay(){
    videoPage1.addEventListener("click",function(){
                // Toggle the mute state
                videoPage1.muted = !videoPage1.muted;

                // Update the cursor text based on mute state
                cursor.innerHTML = videoPage1.muted ? "<h3>Sound Off</h3>" : "<h3>Sound On</h3>";

        // cursor.style.zIndex="10";
       

    })
};

cursorONVideo();

for ( let boxs of box){
    boxs.addEventListener("mouseenter",function (event) {
        boxs.opacity="1";
        // boxs.style.backgroundColor="red";
       
        // console.log(img);
        // let img = document.createElement("img");
        let imgurl = boxs.getAttribute("dataImage");
        cursor.style.backgroundImage=`url(${imgurl})`;
        cursor.style.backgroundSize="cover";
        cursor.style.backgroundPosition = "center";
        console.dir(cursor.style.backgroundImage);
        cursor.style.borderRadius="0px";
        cursor.style.border="none";
        cursor.style.height="500px";
        cursor.style.width="600px";
        cursor.style.pointerEvents="none";
            // Position the cursor at the center of the target element


         

    })
    boxs.addEventListener("mouseleave",function () {
        cursor.style.removeProperty("background-image");
        cursor.style.removeProperty("border-radius");
        cursor.style.removeProperty("border");
        cursor.style.removeProperty("height");
        cursor.style.removeProperty("width");
        cursor.style.removeProperty("opacity");
        cursor.style.removeProperty("backgroundPosition");
        cursor.style.pointerEvents="none";
        

        

    })
}




//////////////////////////////////////////////////////////////////
////////////////// Gsap animation part
//////////////////////////////////////////////////////////////////




// let tl22 = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"#main",
//         markers:true,
//         start:"top 60%",
//         end:"top 28%",
//         scrub:2


//     }

// })
// tl22.to("#page1 video",{
//     width:"50%",
// },"anim");
// gsap.to("#page1", {
//     scrollTrigger: {
//       trigger: "#page1",
//       start: "top top",
//       end: "bottom+=100% top",
//       scrub: true,

//     }
//   });


let tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        markers:false,
        start:"top 24%",
        end:"top -100%",
        scrub:1


    }

})

tl.to("#page1 h1",{
    x: -100,
    y: 100,
    opacity:0.3,
},"anim")
tl.to("#page1 h2",{
    x:150,
    y:100,
    opacity:0.3,
},"anim");
tl.to("#page1 video",{
    width:"85%",
    // scaleY: 2,                            // Scale the video on the X-axis when scrolling
    // transformOrigin: "center center",     // Transform from the center
    // rotationY: 30,                        // Add slight rotation on the X-axis (optional)
    // ease: "2", 

},"anim");

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        markers:false,
        start:"top -100%",
        end:"top -110",
        scrub:2


    }

})
tl2.to("#main",{
backgroundColor:"#fff",
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        markers:false,
        start:"top -400%",
        end:"top -490%",
        scrub:3


    }

})
tl3.to("#main",{
backgroundColor:"#000",
})