class MemeGenerator {
  constructor() {
    this.generateMemeBtn = document.querySelector(
      ".meme--generator .generate__meme_btn"
    );
    this.memeImage = document.querySelector(".meme--generator img");
    this.memeTitle = document.querySelector(".meme--generator .meme__title");
    this.memeAuthor = document.querySelector(".meme--generator .meme--author");
    this.collapsibles = document.querySelectorAll(".collapsible");
  }

  updateDetails(url, title, author) {
    this.memeImage.setAttribute("src", url);
    this.memeTitle.innerHTML = title;
    this.memeAuthor.innerHTML = `Meme by: ${author}`;
  }

  generateMeme(endpoint = null) {
    this.currentValue = document.querySelector(".meme--generator").title;
    const url = `https://meme-api.com/gimme/${this.currentValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.updateDetails(data.url, data.title, data.author);
      });
  }
  init() {
    this.generateMemeBtn.addEventListener(
      "click",
      this.generateMeme.bind(this)
    );
    this.generateMeme();
    this.collapsibles.forEach((item) =>
      item.addEventListener("click", () => {
        item.classList.toggle("collapsible--expanded");
      })
    );
  }
}

const memeGenerator = new MemeGenerator();
memeGenerator.init();
