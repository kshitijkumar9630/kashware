var tlFirstScroll = new TimelineMax();

tlFirstScroll
    .set(".title-text-wrapper", { scale: 1, opacity: "1", transformOrigin: "center" })
    .to(".title-text-wrapper", 1, { scale: 0, y: "50%", opacity: "0" })


var controller = new ScrollMagic.Controller();

// Scene 1

var scene1 = new ScrollMagic.Scene({
    triggerElement: ".trigger1",
    triggerHook: 0,
    duration: "100%"
})

.setTween(tlFirstScroll)

.addTo(controller);

/*--------------------*/



var tlSecondScroll = new TimelineMax();

tlSecondScroll
    .set(".single-card-wrapper", { scale: 4, opacity: "0" })
    .to(".single-card-wrapper", 10, { scale: 0.8, y: "40%", opacity: "1" })
    .to(".single-card-wrapper", 1, { scale: 0.8, y: "40%", opacity: "0.7" })
    .to(".single-card-wrapper", 1, { scale: 0.8, y: "40%", opacity: "0" })


var controller = new ScrollMagic.Controller();

// Scene 2

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".trigger2",

    duration: "100%"
})

.setTween(tlSecondScroll)

.addTo(controller);


/*--------------------*/


var tlThirdScroll = new TimelineMax();

tlThirdScroll
    .set(".multiple-card-wrapper", { scale: 4, opacity: "0" })
    .to(".multiple-card-wrapper", 5, { scale: 1, y: "50%", opacity: "1" })
    .to(".multiple-card-wrapper", 5, { scale: 0.75, y: "50%", opacity: "1" })



var controller = new ScrollMagic.Controller();

// Scene 3

var scene3 = new ScrollMagic.Scene({
    triggerElement: ".trigger3",

    duration: "100%"
})

.setTween(tlThirdScroll)

.addTo(controller);



/*--------------------*/