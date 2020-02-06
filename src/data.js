import img01 from "./images/01-best-plant.svg"
import img02 from "./images/02-flash-frozen.svg"
import img03 from "./images/03-extract.svg"
import img04 from "./images/04-pure.svg"
import img05 from "./images/05-enjoy.svg"

import goldSeal from "./images/f-gold-seal.png"
import cookies from "./images/f-cookies.png"
import sherbinskis from "./images/f-sherbinskis.png"

import icnBudder from "./images/t-budder.svg"
import icnSauce from "./images/t-sauce.svg"
import icnSugar from "./images/t-sugar.svg"
import icnDiamonds from "./images/t-diamonds.svg"
import icnThca from "./images/t-thca.svg"
import icnShatter from "./images/t-shatter.svg"
import icnVapes from "./images/t-vapes.svg"

import tpBudder from "./images/t-p-budder.jpg"

import story01 from './images/story-01.png'
import story02 from './images/story-02.png'
import story03 from './images/story-03.png'
import story04 from './images/story-04.png'

export const THEME = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

export const MENU_ITEMS = [
  { link: `/products/`, label: `Products`, color: `#FF4438` },
  { link: `/our-process/`, label: `Our Process`, color: `#FF9E18` },
  { link: `/our-story/`, label: `Our Story`, color: `#1DCAD3` },
  { link: `/faq/`, label: `FAQ`, color: null },
]

export const FOOTER_MENU_ITEMS = [
  { link: `/`, label: `Home` },
  { link: `/products/`, label: `Products` },
  { link: `/our-process/`, label: `Our Process` },
  { link: `/our-story/`, label: `Our Story` },
  { link: `/faq/`, label: `FAQ` },
  { link: `/contact-us/`, label: `Contact` },
  { link: `/store-locator/`, label: `Store Locator` },
]

export const PROCESS_STEPS = [
  {
    image: img01,
    color: "#A2D45E",
    title: "Pick the Best Plant",
    text:
      "First we select the finest cannabis plants, and harvest them at their aromatic peak. Each plant we select has the perfect balance of cannabinoids, flavonoid and terpenes, providing a flavorful, full-bodied experience.",
  },
  {
    image: img02,
    color: "#1DCAD3",
    title: "Flash Frozen for Flavor",
    text:
      "At the moment of harvest, we flash-freeze our plants and keep them cool throughout the extraction process. This helps us preserve the volatile terpenes – the source of the plant’s unique flavor profile.",
  },
  {
    image: img03,
    color: "#FCD199",
    title: "Extract the Good Stuff",
    text:
      "We use hydrocarbon solvents (n-butane) to pull out and preserve the terpenes, which ensures the things you love most about cannabis – the aroma, the flavor, the potency – doesn’t dry up or degrade at all once it’s concentrated.",
  },
  {
    image: img04,
    color: "#FF9E18",
    title: "Pure Concentration",
    text:
      "From there, we remove all solvent and finish the resin into its purest concentrate form – vape cartridges, budders, sauces, diamonds, sugars, shatters, and THCA crystalline.",
  },
  {
    image: img05,
    color: "#FF4438",
    title: "And Enjoy",
    text:
      "Straight from the seed and into your hand – you’re holding the purest way to consume cannabis in the world. Take a hit and enjoy. Pure and simple.",
  },
]

export const FRIENDS_DATA = [
  { name: "Gold Seal", image: goldSeal, link: "#" },
  { name: "Cookies", image: cookies, link: "#" },
  { name: "Sherbinskis", image: sherbinskis, link: "#" },
]

export const FORMS_TEXTURES_DATA = [
  {
    name: "Budder",
    icon: icnBudder,
    productLink: "/products/",
    store: "/store-locator/",
    image: tpBudder,
    description:
      "After extraction, we whip the concentrate by hand to combine the cannabinoids and terpenes in a method similar to making a vinaigrette using oil and vinegar. Budder is the easiest concentrate to dab with because it sticks to the tool, so you can grab the right amount, and easily collect it from the bottom of the jar, resulting in less waste.",
    level:
      "Deep flavor combined with ease of use makes budder a superb choice for newer users and connoisseurs alike.",
  },
  {
    name: "Sauce",
    icon: icnSauce,
    productLink: "/products/",
    store: "/store-locator/",
    image: tpBudder,
    description: "",
    level: "",
  },
  {
    name: "Sugar",
    icon: icnSugar,
    productLink: "/products/",
    store: "/store-locator/",
    image: tpBudder,
    description: "",
    level: "",
  },
  {
    name: "Diamonds",
    icon: icnDiamonds,
    productLink: "/products/",
    store: "/store-locator/",
    image: tpBudder,
    description: "",
    level: "",
  },
  {
    name: "THCA Crystalline",
    icon: icnThca,
    productLink: "/products/",
    store: "/store-locator/",
    image: tpBudder,
    description: "",
    level: "",
  },
  {
    name: "Shatter",
    icon: icnShatter,
    productLink: "/products/",
    store: "/store-locator/",
    image: tpBudder,
    description: "",
    level: "",
  },
  {
    name: "Vapes",
    icon: icnVapes,
    productLink: "/products/",
    store: "/store-locator/",
    image: tpBudder,
    description: "",
    level: "",
  },
]

export const TIMELINE_DATA = [
  {
    title: "Recreational Legalization Begins",
    description:
      "In 2012, Colorado and Washington become the first two states to legalize the recreational use of cannabis, following the passage of Amendment 64 and Initiative 502. Massachusetts approved a ballot measure to legalize medical cannabis",
    photo: null,
    position: "left",
  },
  {
    title: "Kind Bill",
    description:
      "Live resin originated in late 2013 with William “Kind Bill” Fenger, who developed the unique extraction process alongside a talented, terpene-chasing few who dared to try something different.",
    photo: story01,
    position: "right",
  },
  {
    title: "Live Resin",
    description:
      "When seeing this entirely new product for the first time and deciding what to call it on the shelf, Phillip “Tierra Rojo” Hague (the head cultivator at the facility) suggested the name “Live Resin”, which stuck, and the product was put onto Colorado dispensary shelves immediately, sparking the cannabis flavor revolution.",
    photo: story02,
    position: "left",
  },
  {
    title: "Absolute Best",
    description:
      "Quickly, instead of thinking about concentrate as a by product of flower production, it started to be the focus, with Bill and Phillip going through the entire “Indoor Acre” facility and picking only a handful of the absolute best plants for the purposes of live resin extraction.",
    photo: story03,
    position: "right",
  },
  {
    title: "Live Resin Project",
    description:
      "Today, Bill and Phillip have joined forces with a passionate team of of trailblazers, taste-makers and high-flying cannabis connoisseurs to bring you Live Resin Project.",
    photo: story04,
    position: "left",
  },
  {
    title: "Award Winning",
    description:
      "Since that point, live resin has won the vast majority of cannabis extract competitions and has single-handedly changed the way growers think about their plants, how they are harvested, and even how customers shop.",
    photo: null,
    position: "right",
  },
]
