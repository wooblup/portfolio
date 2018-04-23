let tl = new TimelineMax();

if (document.getElementById('main')) {

    let preTextDiv = document.getElementById('pre-text-div');
    let welcomeNameDiv = document.getElementById('welcome-name-div');
    let welcomeTaglineDiv = document.getElementById('welcome-tagline-div');
    let tweenArray = [preTextDiv, welcomeNameDiv, welcomeTaglineDiv];

    let hamburger = document.getElementById('menu-toggle');

    let downArrow = document.getElementById('down-arrow');


    tl.add( TweenMax.fromTo('#pentagon', 2, {opacity:0}, {opacity:1}) );
    TweenMax.fromTo('#pentagon', 2, {scale:1}, {scale:20,delay:2});

    tl.add( TweenMax.staggerFromTo(tweenArray, 1, {left:'-10vw',opacity:0}, {left:0,opacity:1,delay:1}, 0.2) );
    tl.add( TweenMax.fromTo([hamburger, downArrow], 0.5, {opacity:0}, {opacity:1}));

    downArrow.addEventListener('click', function(e) {
        e.preventDefault();
        TweenLite.fromTo(window, 1, {scrollTo: window.scrollY}, {scrollTo:"#works-section", ease:Power3.easeOut});
    });

}

if (document.getElementById('project')) {

    let projectOverview = document.getElementById('project-overview-div');
    let projectInfo = document.getElementById('project-info');

    let projectDownArrow = document.getElementById('project-down-arrow');

    tl.add( TweenMax.fromTo('#project-title', 1, {position:'relative',left:'-10vw',opacity:0}, {position:'relative',left:0,opacity:1}) );
    TweenMax.fromTo('#project-overview-div', 1, {position:'relative',left:'-10vw',opacity:0}, {position:'relative',left:0,opacity:1,delay:0.5});
    TweenMax.fromTo('#project-info', 1, {position:'relative',right:'-10vw',opacity:0}, {position:'relative',right:0,opacity:1,delay:0.5});
    TweenMax.fromTo(projectDownArrow, 1, {opacity:0}, {opacity:1,delay:0.5});

    projectDownArrow.addEventListener('click', function(e) {
        e.preventDefault();
        TweenLite.fromTo(window, 1, {scrollTo: window.scrollY}, {scrollTo:".project-photos", ease:Power3.easeOut});
    });

}

let menuToggle = document.getElementById('menu-toggle');
let menuOverlay = document.getElementById('menu-overlay');

menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    this.classList.toggle('active');
    menuOverlay.classList.toggle('open');
}