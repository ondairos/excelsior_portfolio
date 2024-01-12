quotes = [
  {
    id: 1,
    quote: `"Lorem Ipsum is simply dummy text of the printing and typesetting industry."`,
  },
  {
    id: 2,
    quote: `"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"`,
  },
  {
    id: 3,
    quote: `" It has survived not only five centuries"`,
  },
  {
    id: 4,
    quote: `"It is a long established fact that a reader will be distracted by the readable content"`,
  },
  {
    id: 5,
    quote: `"There are many variations of passages of Lorem Ipsum available"`,
  },
];

const heroHeading = document.querySelector(".hero-heading");
const logoBtn = document.querySelector(".logo-btn");
const siteLogo = document.querySelector(".logo-img");

let currentQuoteIndex = 0;

function changeQuote() {
  heroHeading.style.opacity = 0;
  setTimeout(() => {
    heroHeading.textContent = quotes[currentQuoteIndex].quote;
    heroHeading.style.opacity = 1;
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }, 500);
}

changeQuote();

setInterval(changeQuote, 6000);

siteLogo.addEventListener("mouseover", () => {
  siteLogo.src = "assets/mrci.gif";
});

siteLogo.addEventListener("mouseout", () => {
  siteLogo.src = "assets/logo_ex.png";
});
