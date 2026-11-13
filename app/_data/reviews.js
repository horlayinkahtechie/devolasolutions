// Single source of truth for the dedicated /reviews page.
//
// This does NOT replace the text testimonials already shown inline on the
// home page, about page, service pages, the ecommerce landing page, or
// individual case studies — those stay exactly as they are. This file only
// feeds the standalone "all reviews" page those sections link out to.

// Text reviews here are the ones backed by a verifiable project — each
// links either to the real case study on the portfolio, or straight to the
// client's live site when there's no case-study write-up.
export const textReviews = [
  {
    quote:
      "I love the fact that you are very professional. You communicated effectively and help us achieve all we can't achieve on WordPress.",
    name: "No Lans",
    role: "Project Manager, Dwelcore",
    href: "/portfolio/dwelcore",
    external: false,
  },
  {
    quote:
      "I love the UI of my E-commerce website, the payment integration and the admin management system. And the fact I can add products myself. And also the support of multiple currencies.",
    name: "Olusanya Rofiat",
    role: "Founder, That Local Girl",
    href: "/portfolio/that-local-girl",
    external: false,
  },
  {
    quote:
      "The website loads faster compared to our previous website. The image doesn't even take time to load. You also took your time to look into what we want and delivered exactly what we needed.",
    name: "Mr Femi",
    role: "IT Engineer, GTA Hotels Group",
    href: "/portfolio/gta-hotels",
    external: false,
  },
  {
    quote:
      "I was referred to you by Mr. Vincent and honestly, you did not disappoint. The logo design was amazing and the website is very responsive. I love the fact that you are very professional and you delivered on time.",
    name: "Yordson Apartments",
    role: "CEO, Yordson Apartments",
    href: "/portfolio/yordson-apartments",
    external: false,
  },
  {
    quote:
      "I saw his ads and I messaged him and he responded immediately and I paid a upfront payment and he delivered in just 3 days.",
    name: "Tom De Best",
    role: "Owner, Tom De Best",
    href: "/portfolio/tom-de-best",
    external: false,
  },
  {
    quote:
      "I love the simplicity of the website design, and how fast you implemented the changes I requested. You also delivered the project on time.",
    name: "Mr Sodiq",
    role: "CEO, Ayora Tribe Limited",
    href: "/portfolio/ayora-tribe-limited",
    external: false,
  },
  {
    quote:
      "I love the UI of my E-commerce website, the payment integration and the admin management system. And the fact I can add products myself.",
    name: "Adebayo Lola",
    role: "CEO, LolasElan",
    href: "https://lolaselan.netlify.app",
    external: true,
  },
  {
    quote:
      "I love how fast you deliver the project and how everything works. I also love your fast response time.",
    name: "AMZ",
    role: "CEO, Amazon World",
    href: "https://amazonworld.com",
    external: true,
  },
];

// Screenshot reviews — real chat/email/review-site screenshots, for proof a
// typed quote can't give. Empty until the images exist; the page hides this
// section entirely until then, so nothing breaks in the meantime.
//
// To add one: save the image under public/reviews/ (e.g. public/reviews/
// dwelcore-whatsapp.png) and add an entry here:
//   {
//     image: "/reviews/dwelcore-whatsapp.png",
//     name: "No Lans",
//     role: "Project Manager, Dwelcore",
//   }
export const screenshotReviews = [];
