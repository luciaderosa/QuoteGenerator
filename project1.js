const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote: `"If you want to be sure that you never forget your wife\’s birthday, just try forgetting it once."`,
    person: `Aldo Cammarota`,
  },
  {
    quote: `"Before you marry a person, you should first make them use a computer with slow Internet service to see who they really are."`,
    person: `Will Ferrell`,
  },
  {
    quote: `"Just be good and kind to your children. Not only are they the future of the world, they’re the ones who can sign you into a home."`,
    person: `Dennis Miller`,
  },
  {
    quote: `"When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway."`,
    person: `Erma Bombeck`,
  },
  {
    quote: `"When your children are teenagers, it’s important to have a dog so that someone in the house is happy to see you."`,
    person: `Nora Ephrom`,
  },
  {
    quote: `"A dog teaches a boy fidelity, perseverance, and to turn around three times before lying down."`,
    person: `Rober Benchley`,
  },
  {
    quote: `"If you think dogs can’t count, try putting three dog biscuits in your pocket and then giving Fido only two of them."`,
    person: `Phil Patoret`,
  },
  {
    quote: `"In order to maintain a well­-balanced perspective, the person who has a dog to worship him should also have a cat to ignore him."`,
    person: `Anonymous`,
  },
  {
    quote: `"Thousands of years ago, cats were worshipped as gods. Cats have never forgotten this."`,
    person: `Anonymous`,
  },
  {
    quote: `"The holy passion of friendship is of so sweet and steady and loyal and enduring a nature that it will last through a whole lifetime, if not asked to lend money."`,
    person: `Mark Twain`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
