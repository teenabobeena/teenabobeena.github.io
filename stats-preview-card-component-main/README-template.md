# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Desktop](/stats-preview-card-component-main/stats-preview-card-desktop-ss.png)

![Mobile 1](/stats-preview-card-component-main/stats-preview-card-mobile-ss1.png)

![Mobile 2](/stats-preview-card-component-main/stats-preview-card-mobile-ss2.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62/hub)
- Live Site URL: [GitHub Pages](https://LadyLucyfurr.github.io/stats-preview-card-component-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

I used the picture element to include both the mobile and desktop versions of the header image with the mobile image as a fallback:
```html
<picture>
    <source media="(min-width:375px)" srcset="images/image-header-desktop.jpg">
    <source media="(min-width:768px)" srcset="images/image-header-mobile.jpg">
    <img src="images/image-header-mobile.jpg" alt="">
</picture>
```
I tried a new way of centering the main div, setting it to 90% width and left and right margin of auto:
```css
main {
    width: 90%;
    background-color: var(--dark-desaturated-blue);
    margin: 5% auto 8% auto;
    text-align: center;
    border-radius: 8px;
    overflow: hidden;
}
```

To get the slightly transparent color overlay on the .hero class image, I used the after psuedo-element with a z-index of 1 to place it on top:
```css
.hero {
    position: relative;
    display: inline-block;
}
  
.hero::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    background-color: hsla(277, 64%, 61%, 0.356);
    z-index: 1;
}
```

### Continued development

In the future I would like to learn the correct way to use float and clear. I also want to explore CSS grid.

### Useful resources

- [W3Schools CSS Media Query Breakpoints](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp) - This page lists common breakpoints to use for responsive design.
- [W3Schools HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp) - This page lists and describes when to use semantic HTML elements. It was helpful in moving from using a div for everything to using more descriptive elements.

## Author

- Frontend Mentor - [@LadyLucyfurr](https://www.frontendmentor.io/profile/ladylucyfurr)
