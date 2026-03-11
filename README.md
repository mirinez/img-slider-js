## Image Slider – Homework
**Author:** Míriam Domínguez Martínez  
**Date:** 11.03.2026  
**Course:** Full Stack Web Development – DBE Academy  
**Topic:** HTML, CSS & JavaScript – Image Slider with Loops

---

### Project Description

This project is an interactive image slider built with HTML, CSS and JavaScript. The goal of the task was to apply core JavaScript concepts in a practical way: loops (`setInterval`), DOM manipulation, and dynamic class management. The slider automatically cycles through four images every 3 seconds in an infinite loop, with smooth fade transitions and dot indicators that sync with the current slide. The slider is centered on the page with rounded corners and a floating shadow effect.

---

### File Structure
```
/
├── index.html         
├── style.css         
├── script.js
└── img/
    ├── img1.jpg
    ├── img2.jpg
    ├── img3.jpg
    ├── img4.jpg
    └── favicon.png      
└── README.md           
```

---

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#f0f4f8` | Page background |
| `--white` | `#ffffff` | Footer, dots |
| `--primary` | `#4f86c6` | Accent color |
| `--text` | `#1a1a2e` | Main text |
| `--muted` | `#8892a4` | Subtitle text |

---

### Key Concepts Used

- **`setInterval()`** — runs the `nextSlide()` function every 3000ms automatically
- **`querySelectorAll()`** — selects all slide images and dot indicators at once
- **`classList.add/remove()`** — toggles the `.active` class to show/hide slides
- **Modulo `%`** — resets the index back to 0 after the last slide, creating the infinite loop
- **CSS `opacity` + `transition`** — creates smooth fade effects between slides

---

*Full Stack Web Development Course – DBE Academy, 2026.*
