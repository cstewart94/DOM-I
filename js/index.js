const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br>Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




//NAV
const allNav=document.querySelectorAll('nav a');
allNav[0].textContent=siteContent.nav['nav-item-1'];
allNav[1].textContent=siteContent.nav['nav-item-2'];
allNav[2].textContent=siteContent.nav['nav-item-3'];
allNav[3].textContent=siteContent.nav['nav-item-4'];
allNav[4].textContent=siteContent.nav['nav-item-5'];
allNav[5].textContent=siteContent.nav['nav-item-6'];


//CTA
const ctaText=document.querySelector('.cta .cta-text h1');
ctaText.innerHTML=siteContent['cta']['h1'].replace(/ /g, '<br>');

const ctaButton=document.querySelector('.cta .cta-text button');
ctaButton.textContent=siteContent['cta']['button'];

const ctaImg=document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


//Main Content
const mainContent=document.querySelectorAll('.main-content .top-content .text-content');
mainContent[0].children[0].textContent=siteContent['main-content']['features-h4'];
mainContent[0].children[1].textContent=siteContent['main-content']['features-content'];
mainContent[1].children[0].textContent=siteContent['main-content']['about-h4'];
mainContent[1].children[1].textContent=siteContent['main-content']['about-content'];

const midImg=document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const bottomContent=document.querySelectorAll('.main-content .bottom-content .text-content');
bottomContent[0].children[0].textContent=siteContent['main-content']['services-h4'];
bottomContent[0].children[1].textContent=siteContent['main-content']['services-content'];
bottomContent[1].children[0].textContent=siteContent['main-content']['product-h4'];
bottomContent[1].children[1].textContent=siteContent['main-content']['product-content'];
bottomContent[2].children[0].textContent=siteContent['main-content']['vision-h4'];
bottomContent[2].children[1].textContent=siteContent['main-content']['vision-content'];


//Contact
const contactH4=document.querySelector('.contact h4');
contactH4.textContent=siteContent['contact']['contact-h4'];

const contactP=document.querySelectorAll('.contact p');
contactP[0].innerHTML=siteContent['contact']['address']/*.replace(/ /, '<br>')*/;
contactP[1].textContent=siteContent['contact']['phone'];
contactP[2].textContent=siteContent['contact']['email'];


//Footer
const bottomFooter=document.querySelector('footer p');
bottomFooter.textContent=siteContent['footer']['copyright'];

//Task 3: New Content
const navColor=document.querySelectorAll('header nav a');
navColor.forEach(element=>{
  element.style.color='green';
});

const newNav=document.querySelector('nav');

const navOne=document.createElement('a');
navOne.setAttribute('href', '#');
navOne.textContent="One";
newNav.prepend(navOne);

const navTwo=document.createElement('a');
navTwo.setAttribute('href', '#');
navTwo.textContent="Two";
newNav.appendChild(navTwo);