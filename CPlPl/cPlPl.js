// Header Burger

const burgerBigBox = document.querySelector(".burgerBigBox");
let i = 0;
function burgerMenu() {
  i++;
  burgerBigBox.style.animationIterationCount = i;
}

// Header Burger Close

// Akardion + Video

const akardionBigBox = document.querySelector(".htmlSovBigBoxInformVideo")

class NewVideoDiv {
  constructor(num, src) {
    this.$div = document.createElement("div");
    this.$div.innerHTML = `<div class="htmlSovBigBoxInformVideoOne">C++ - ${num} Վիդեոդաս</div>
    <div class="htmlSovBigBoxInformVideoOneVideo">
      <iframe
        width="100%"
        height="100%"
        src=${src}
      >
      </iframe>
    </div>`;
    akardionBigBox.appendChild(this.$div)
  }
}

for (a = 1; a <= 12; a++) {
  new NewVideoDiv(a, `https://www.youtube.com/watch?v=hi38vVvJvFE&list=PLkVo56yGU5PpBU1YjOlNzGH5xGgGaTGg3&index=${a}`)
  console.log(a)
}

const videoText = document.querySelectorAll(".htmlSovBigBoxInformVideoOne");
const videoYoutub = document.querySelectorAll(
  ".htmlSovBigBoxInformVideoOneVideo"
);

videoText.forEach((item, index) => {
  item.onclick = () => {
    videoYoutub[index].classList.toggle("height");
  };
});

// Akardion + Video Close
