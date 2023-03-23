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
    this.$div.innerHTML = `<div class="htmlSovBigBoxInformVideoOne">CSS - ${num} Վիդեոդաս</div>
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

for (i = 1; i <= 4; i++) {
  new NewVideoDiv(i, `https://www.youtube.com/watch?v=_SQKwV2hlJg&list=PLPENrJQeKNLbCorz6Ue8RGHiViQ3g28vP&index=${1}`)
  console.log(i)
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
