// console.log("Hello word");

// const myName = "Diego Misseroni";

// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Automatic data update

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigatio work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// STICKY NAVIGATION
///////////////////////////////////////////////////////////

const sectionHeroEL = document.querySelector('.stickytrigger');
const disp = document.querySelector('.logo-title-cont');
const sp = document.querySelector('.space');
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) document.body.classList.add('sticky');

    if (ent.isIntersecting === true) document.body.classList.remove('sticky');

    if (ent.isIntersecting === false) sp.style.display = 'none';
    if (ent.isIntersecting === true) sp.style.display = 'Block';

    if (ent.isIntersecting === false) disp.style.display = 'Block';
    if (ent.isIntersecting === true) disp.style.display = 'none';
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHeroEL);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open');
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js