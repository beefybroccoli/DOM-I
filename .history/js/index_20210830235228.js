const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const anchorArray = document.querySelectorAll("nav a");
anchorArray.forEach((element, index) => {
  element.innerHTML = siteContent.nav[`nav-item-${index + 1}`];
});

const cta_h1 = document.querySelector(".cta .cta-text h1");
cta_h1.innerHTML = siteContent.cta.h1.replaceAll(" ", "<br>");

const cta_button = document.querySelector(".cta .cta-text button");
cta_button.innerHTML = siteContent.cta.button;

const cta_image = document.querySelector("#cta-img");
cta_image.setAttribute("src", siteContent.cta["img-src"]);

//--------------------------------------------------------------------
const mainContent_topContent_textContent_h4 = document.querySelector(
  ".main-content .top-content .text-content h4"
);
mainContent_topContent_textContent_h4.innerHTML =
  siteContent["main-content"]["features-h4"];

const mainContent_topContent_textContent_p = document.querySelector(
  ".main-content .top-content .text-content p"
);
mainContent_topContent_textContent_p.innerHTML =
  siteContent["main-content"]["features-content"];

//--------------------------------------------------------------------

const mainContent_topContent_textContent_h4_2nd = document.querySelector(
  ".main-content .top-content .text-content:nth-child(2) h4"
);
mainContent_topContent_textContent_h4_2nd.innerHTML =
  siteContent["main-content"]["about-h4"];

const mainContent_topContent_textContent_p_2nd = document.querySelector(
  ".main-content .top-content .text-content:nth-child(2) p"
);
mainContent_topContent_textContent_p_2nd.innerHTML =
  siteContent["main-content"]["about-content"];

  //-----------------------------------------------------------------

  const mid_image = document.querySelector("#middle");
  mid_image.setAttribute("sr")
