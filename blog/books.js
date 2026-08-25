const entries = [
  { title: "A Field Guide to the Author (Do Not Startle)", label: "The author, catalogued", series: "An important field note", note: "The creature responsible for everything filed in this archive.", file: "aboutme.html", status: "published", art: 16, about: true },
  { number: "001", title: "Monarch", series: "Thearie · Book 1", note: "A queen, a kingdom, and the story of finding where you belong.", file: "monarch.html", status: "coming-soon", art: 1 },
  { number: "002", title: "Viceroy", series: "Thearie · Book 2", note: "What happened after the crown—and how Thearie continued to change.", file: "viceroy.html", status: "coming-soon", art: 2 },
  { number: "003", title: "Dragonflies", series: "Dragonflies · Book 1", note: "The beginning of the girls who learned they never had to stand alone.", file: "dragonflies.html", status: "published", art: 3 },
  { number: "004", title: "Skywards", series: "Dragonflies · Book 2", note: "The story grew wings, and the Dragonflies learned how far they could fly.", file: "skywards.html", status: "published", art: 4 },
  { number: "005", title: "Freefall", series: "Dragonflies · Book 3", note: "The final fall, the hardest choices, and the end of the first flight.", file: "freefall.html", status: "published", art: 5 },
  { number: "006", title: "Mercy and Mayhem", series: "Mercy & Mayhem · Book 1", note: "A bookworm who could walk into stories—and discovered some needed saving.", file: "mercy-and-mayhem.html", status: "coming-soon", art: 6 },
  { number: "007", title: "Mayday", series: "Mercy & Mayhem · Book 2", note: "The next chapter for a Word Walker with worlds still depending on her.", file: "mayday.html", status: "coming-soon", art: 7 },
  { number: "008", title: "How Our Story Ends", series: "A standalone story", note: "A love story about truth, memory, and finding the missing pieces.", file: "how-our-story-ends.html", status: "coming-soon", art: 8 },
  { number: "009", title: "Stars Shine Darkly", series: "A standalone story", note: "Neverland, old monsters, and a familiar story seen from its shadows.", file: "stars-shine-darkly.html", status: "published", art: 9 },
  { number: "010", title: "We Would Be Gods", series: "Gods · Book 1", note: "Lethe, memory, and the dangerous intimacy of sweet oblivion.", file: "we-would-be-gods.html", status: "published", art: 10 },
  { number: "011", title: "Styx", series: "Gods · Book 2", note: "The river after forgetfulness—and the debt that could not be erased.", file: "styx.html", status: "coming-soon", art: 11 },
  { number: "012", title: "Wonderworld", series: "A standalone story", note: "A strange door, a stranger world, and the story waiting on the other side.", file: "wonderworld.html", status: "coming-soon", art: 12 },
  { number: "013", title: "Stardust in Our Veins", series: "Red & Wolfe · Book 1", note: "A broken fairytale, a reluctant partnership, and the crime scene where it began.", file: "stardust-in-our-veins.html", status: "coming-soon", art: 13 },
  { number: "014", title: "Beauty in the Dark", series: "Red & Wolfe · Book 2", note: "An old curse, a sleeping illness, and what waited beneath the familiar tale.", file: "beauty-in-the-dark.html", status: "coming-soon", art: 14 },
  { number: "015", title: "The Unravelling of Time", series: "Red & Wolfe · Book 3", note: "Impossible thefts, ancient artifacts, and a conspiracy to rewrite history.", file: "the-unravelling-of-time.html", status: "coming-soon", art: 15 }
];

const grid = document.querySelector("#book-grid");
entries.forEach((entry) => {
  const published = entry.status === "published";
  const card = document.createElement(published ? "a" : "article");
  card.className = `book-card ${published ? "is-published" : "is-coming"}${entry.about ? " about-card" : ""}`;
  if (published) card.href = `/blogposts/${entry.file}`;
  else card.setAttribute("aria-label", `${entry.title} — coming soon`);
  card.innerHTML = `
    <img class="card-bloom" src="assets/blooming/flower-${entry.art}.png" alt="" aria-hidden="true">
    <span class="card-number">${entry.label || `Specimen ${entry.number}`}</span>
    <span class="book-series">${entry.series}</span>
    <h3>${entry.title}</h3>
    <p>${entry.note}</p>
    <span class="open-label">${published ? "Read the archive <b>→</b>" : "Coming soon"}</span>`;
  grid.append(card);
});

document.querySelector("#year").textContent = new Date().getFullYear();
