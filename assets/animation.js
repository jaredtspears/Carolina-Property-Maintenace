 
 
 
 var btn = document.getElementById('cta');
//  may not need this button at all (might convert it into something else)
 var btn2 = document.getElementById('cta2');
 
//  creating an onclick call for the morphing
 btn.onclick = function(){
     // morphing testing:
 var morphing = anime({
    targets: '.polymorph',
    points: [
      { value: "360.5,207.5 0.5,207.5 286,154 360.5,-0.5 " },
    ],
    easing: 'easeOutQuad',
    duration: 2000,
  });

//   may not need this feature this just hides the handyman button
  anime({
    targets:'#cta',
    opacity:0, 
    duration:500,
    translateY: -800
})

//   animation for the blip
  anime({
      targets:'#blip',
      opacity:1, 
      duration:500,
      translateY: 150
  })

//   this promise is made to revert the animation reversed the values
  var promise = morphing.finished.then(() => {
    //   make sure you wrap in button click
    btn2.onclick = function(){
    var morphing = anime({
        targets: '.polymorph',
        points: [
          { value: "360.5,207.5 0.5,207.5 286,154 360.5,-0.5 " },
          { value: "360.5,207.5 0.5,207.5 0,0 360.5,-0.5 " }
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop:false
      });
    //   this hides the blip & secondary button and reverts back to starting point. 
      anime({
        targets:'#blip',
        opacity:0, 
        duration:500,
        translateY: -800
    })
    };
  })
 }
 
 //   for logo possibly on on the home screen: 
anime.timeline()
.add({
  targets: '.ml5 .line',
  opacity: [0.5,1],
  scaleX: [0, 1],
  easing: "easeInOutExpo",
  duration: 700
}).add({
  targets: '.ml5 .line',
  duration: 600,
  easing: "easeOutExpo",
  translateY: function(e, i, l) {
    var offset = -0.625 + 0.625*2*i;
    return offset + "em";
  }
}).add({
  targets: '.ml5',
  opacity: [0,1],
  scaleY: [0.5, 1],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=600'
}).add({
  targets: '.ml5 .letters-left',
  opacity: [0,1],
  translateX: ["0.5em", 0],
  easing: "easeOutExpo",
  duration: 600,
  offset: '-=300'
}).add({
  targets: '.ml5 .letters-right',
  opacity: [0,1],
  translateX: [10,"-0.4em"],
  easing: "easeOutExpo",
  duration: 900,
  offset: '-=900',
  rotate: {
      value:'1turn',
      direction:'reverse',
      easing:'easeInOutSine',
    },
  opacity: 1,
})