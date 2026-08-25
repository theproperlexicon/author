const quotes = [
  { text: "You are here, among your people, taking control of your destiny and shaping the world of Thearie into what it should become.", source: "Viceroy" },
  { text: "I know you’re scared, scared of being alone here. But remember that you’re not alone.", source: "Viceroy" },
  { text: "You belong here.", source: "Viceroy" },
  { text: "The people of Thearie had not found a queen. A queen had found her kingdom.", source: "Monarch" },
  { text: "You will be a great leader, Charlotte. I know you; I know your heart.", source: "Monarch" },
  { text: "I couldn’t just let the opportunity pass me by. If I left without one dance, I’d have regretted it.", source: "Monarch" },
  { text: "Perhaps she would grow to think of him as just a guard and not remember how he had thought the world of her.", source: "Monarch" },
  { text: "You must know that this friendship cannot last.", source: "Monarch" },
  { text: "Like any epically beautiful love story, it doesn’t just begin. It has to be fought for.", source: "How Our Story Ends" },
  { text: "You just have half of one.", source: "How Our Story Ends" },
  { text: "Stories aren’t going to help you. You need to go out and get it.", source: "How Our Story Ends" },
  { text: "Our love was built on truth, and honesty.", source: "How Our Story Ends" },
  { text: "The real love story is so much better than the one that you imagined. It’s real.", source: "How Our Story Ends" },
  { text: "This house breathed around her, embracing her with open arms. It knew all her secrets, held all her truths.", source: "How Our Story Ends" },
  { text: "Love hurts every day. It’s a puzzle that you don’t have all the pieces to.", source: "How Our Story Ends" },
  { text: "As long as I’ve got you, I know I can find all the pieces.", source: "How Our Story Ends" },
  { text: "You may think you hate him, or that he hates you, but you’re so very wrong about that.", source: "How Our Story Ends" },
  { text: "He’s your match in every way.", source: "How Our Story Ends" },
  { text: "You’re never alone as long as you’re a Dragonfly.", source: "Skywards" },
  { text: "A promise to love, to live, to fight.", source: "Skywards" },
  { text: "We don’t have a choice. We’re Dragonflies. We don’t back down.", source: "Dragonflies" },
  { text: "Together or not at all.", source: "Dragonflies" },
  { text: "Dragonflies are the craziest girls you’ll ever meet.", source: "Dragonflies" },
  { text: "I take care of mine.", source: "Skywards" },
  { text: "Because I’m going to kiss you and I don’t want to die.", source: "Skywards" },
  { text: "You want to turn my Dragonflies into assassins.", source: "Freefall" },
  { text: "You can’t make us kill people, Dodge.", source: "Freefall" },
  { text: "You are never to say that again, Greta Byrne.", source: "Freefall" },
  { text: "You’re already my family.", source: "Freefall" },
  { text: "You’re my alpha. My omega. You’re the beginning and the end.", source: "Freefall" },
  { text: "‘Drink,’ she offered, holding it up to him. ‘Drink and be reborn.’", source: "We Would Be Gods" },
  { text: "I am forgetfulness. I am sweet oblivion.", source: "We Would Be Gods" },
  { text: "Time was a construct brought on by the rising of the moon and sun, a construct that Lethe had no interest in. Until, all at once, she met him.", source: "We Would Be Gods" },
  { text: "He was a bloody broken mess of a man, and he remembered every moment of it.", source: "We Would Be Gods" },
  { text: "You’re to fetch your lover and return with me. You owe a debt of blood.", source: "We Would Be Gods" },
  { text: "Time means nothing in Neverland. Some days are longer than others, and the nights sometimes go on forever.", source: "Stars Shine Darkly" },
  { text: "The monsters here don’t care if you’re Hook, a pirate, or a lost boy. And Neverland has never been described as comforting.", source: "Stars Shine Darkly" },
  { text: "Drinking from your own poisoned well, I see.", source: "Stars Shine Darkly" },
  { text: "‘You’re Peter Pan,’ she breathed, awe burbling up through the mounting horror.", source: "Stars Shine Darkly" },
  { text: "The characters she had known her entire life were nothing like the characters she had originally read.", source: "Mercy & Mayhem" },
  { text: "A Word Walker could enter anything that had been written down.", source: "Mercy & Mayhem" },
  { text: "I’m not a hero. I’ve never been a hero. I’m a bookworm, quite literally.", source: "Mercy & Mayhem" },
  { text: "Sometimes the stories need saving, too.", source: "Mercy & Mayhem" },
  { text: "No one can Walk with a broken heart.", source: "Mercy & Mayhem" },
  { text: "I have to save these worlds.", source: "Mercy & Mayhem" },
  { text: "You find that answer, and then you'll find others.", source: "Mercy & Mayhem" },
];

let currentQuote = 30;

const noteNumber = document.querySelector("[data-note-number]");
const quoteText = document.querySelector("[data-quote-text]");
const quoteSource = document.querySelector("[data-quote-source]");
const anotherQuote = document.querySelector("[data-another-quote]");

function renderQuote(index) {
  const quote = quotes[index];
  noteNumber.textContent = String(index + 1).padStart(2, "0");
  quoteText.textContent = `“${quote.text}”`;
  quoteSource.textContent = `— ${quote.source}`;
}

anotherQuote.addEventListener("click", () => {
  let next = currentQuote;
  while (next === currentQuote) next = Math.floor(Math.random() * quotes.length);
  currentQuote = next;
  renderQuote(currentQuote);
});

renderQuote(currentQuote);
