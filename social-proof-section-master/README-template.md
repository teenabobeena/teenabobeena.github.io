# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the section depending on their device's screen size

### Screenshot

![Desktop](./screenshots/Screenshot%20from%202023-12-25%2013-12-43.png)
![Mobile (1 of 3)](./screenshots/sp-mobile1.png)
![Mobile (2 of 3)](./screenshots/sp-mobile2.png)
![Mobile (3 of 3)](./screenshots/sp-mobile3.png)

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/semantic-html-mobilefirst-social-proof-section--JiKUfedfT)
- Live Site URL: [GitHub Pages](https://teenabobeena.github.io/social-proof-section-master/index.html)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

I used the ::before pseudoselector for the first time to make the half-circle at the top of the mobile site. This was also my first time using clip-path to make a shape.

```css
header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--light-grayish-magenta);
    width: 375px;
    height: 350px;
    z-index: -1;
    clip-path: circle(65.8% at 37% 1%);
}
```

For this project I focused on learning semantic HTML tags for improved accessibility and SEO and where is the best place to use them.

```html
<figure>
  <img src="./images/image-colton.jpg" alt="">
</figure>
<figcaption>
  Colton Smith<br />
  <span class="pink">Verified Buyer</span>
</figcaption>

</section>
</main>
<footer>
  <div class="attribution center">Challenge by <a 
    href="https://www.frontendmentor.io?ref=challenge" 
    target="_blank">Frontend Mentor
  </a>. Coded by <a href="#">Christina</a>.
  </div>
</footer>
```

### Continued development

I need to work on positioning with CSS. Absolute vs relative, best practices. Also how to group elements together to make it easier to go from mobile to desktop.

### Useful resources

- [Clippy - Clip Path Generator](https://bennettfeely.com/clippy/) - This tool let me draw the circle and move the radius and edge to position it the way I wanted. This came in very handy because the clip-path property was a bit confusing.

## Author

- Website - [GitHub Pages](https://teenabobeena.github.io)
- Frontend Mentor - [@LadyLucyfurr](https://www.frontendmentor.io/profile/ladylucyfurr)
- Twitter - [@chr1st1nac0des](https://www.twitter.com/chr1st1nac0des)
