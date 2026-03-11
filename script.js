/*
   script.js — Image Slider Script
   Míriam Domínguez Martínez - 11.03.2026
*/

/*
   STEP 1: SELECT ALL SLIDES AND DOTS
   querySelectorAll returns all elements with that class
*/

const slides = document.querySelectorAll(".slide");
const dots   = document.querySelectorAll(".dot");

/*
   STEP 2: TRACK THE CURRENT SLIDE
   We start at index 0 (the first image)
*/

let currentSlide = 0;

/*
   STEP 3: FUNCTION TO MOVE TO THE NEXT SLIDE
*/

function nextSlide() {

  // Remove "active" from the current slide and dot
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // Move to the next index
  // % slides.length resets back to 0 after the last slide
  currentSlide = (currentSlide + 1) % slides.length;

  // Add "active" to the new current slide and dot
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

/*
   STEP 4: START THE AUTOMATIC LOOP
   setInterval runs nextSlide() every 3000ms (3 seconds)
*/

setInterval(nextSlide, 3000);
