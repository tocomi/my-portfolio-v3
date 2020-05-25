type Link = {
  url: string;
  image: object;
  alt: string;
}

const links: Link[] = [
  {
    url: "https://twitter.com/tocomi0112",
    image: require("../assets/images/twitter.png"),
    alt: "twitter",
  },
  {
    url: "https://github.com/tocomi",
    image: require("../assets/images/github.png"),
    alt: "github",
  },
  {
    url: "https://qiita.com/tocomi",
    image: require("../assets/images/qiita.png"),
    alt: "qiita",
  },
  {
    url: "https://tocomi.hatenablog.com/",
    image: require("../assets/images/hatena.svg"),
    alt: "hatena",
  },
  {
    url: "https://www.facebook.com/kenta.tsunemi.5",
    image: require("../assets/images/facebook.png"),
    alt: "facebook",
  },
]

export default links;
