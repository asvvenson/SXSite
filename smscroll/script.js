/**
 * Frame-by-frame video animation with ScrollMagic and GSAP
 * 
 * Note that your web server must support byte ranges (most do).
 * Otherwise currentTime will always be 0 in Chrome.
 * See here: http://stackoverflow.com/a/5421205/950704
 * and here: https://bugs.chromium.org/p/chromium/issues/detail?id=121765
 */

const video = document.getElementById('video');
const long = document.getElementById('long');
let scrollpos = 0;
let lastpos;
var scene = new ScrollMagic.Scene({
  triggerElement: long,
  triggerHook: "onEnter" });

const startScrollAnimation = () => {
  scene.addTo(controller).
  duration(long.clientHeight).
  on("progress", e => {
    scrollpos = e.progress;
  });

  setInterval(() => {
    if (lastpos === scrollpos) return;
    requestAnimationFrame(() => {
      video.currentTime = video.duration * scrollpos;
      video.pause();
      lastpos = scrollpos;
      // console.log(video.currentTime, scrollpos);
    });
  }, 50);
};

const preloadVideo = (v, callback) => {
  const ready = () => {
    v.removeEventListener('canplaythrough', ready);

    video.pause();
    var i = setInterval(function () {
      if (v.readyState > 3) {
        clearInterval(i);
        video.currentTime = 0;
        callback();
      }
    }, 50);
  };
  v.addEventListener('canplaythrough', ready, false);
  v.play();
};

preloadVideo(video, startScrollAnimation);
// startScrollAnimation();


function openNav(el){
    
    console.log(el);
    console.log(el.id);
    
    const sideNavEl = document.getElementById("mySidenav");

    sideNavEl.style.width = "25%";

  document.getElementById("long").style.backgroundColor = "rgba(0,0,0,0.4)";


//    document.getElementById("main").style.marginLeft = "250px";
//  document.body.style.backgroundColor = "black";
    
    // Get the title element by id in the nav
    const titleEl = document.getElementById("SidenavTitle");
    console.log(titleEl);
    const descrEl = document.getElementById("SidenavP");   
    const linkEl = document.getElementById("SidenavLink");   
    const imageEl = document.getElementById("SidenavImage"); 
        
    if (el.id === "antisenseNav") {
        console.log("id is what we want!");
        titleEl.textContent = "Antisense Strand";
        descrEl.textContent = "The antisense (guide) strand is complementary to the target mRNA sequence. RISC uses the antisense strand to locate and bind the target mRNA sequence.";
        linkEl.href= "https://www.w3schools.com";
        imageEl.src = "https://aswens3.people.uic.edu/he.jpg";
        // More stuff here...
    } else if (el.id === "senseNav") {
        // A different thing
        console.log("id is what we want!");
        titleEl.textContent = "Sense Strand";
        descrEl.textContent = "The sense (passenger) strand is identical to the target mRNA sequence. Once RISC has loaded the siRNA duplex, this strand is ejected and degraded.";
        sourceLink.href= "https://www.facebook.com";
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("long").style.backgroundColor = "rgba(0,0,0,0)";
}


