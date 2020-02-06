import img01 from "./images/01-best-plant.svg"
import img02 from "./images/02-flash-frozen.svg"
import img03 from "./images/03-extract.svg"
import img04 from "./images/04-pure.svg"
import img05 from "./images/05-enjoy.svg"

import goldSeal from "./images/f-gold-seal.png"
import cookies from "./images/f-cookies.png"
import sherbinskis from "./images/f-sherbinskis.png"

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
  { name: "Gold Seal", image: goldSeal, link: '#' },
  { name: "Cookies", image: cookies, link: '#' },
  { name: "Sherbinskis", image: sherbinskis, link: '#' },
]
