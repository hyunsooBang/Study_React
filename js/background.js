const images =["0.jpg", "1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// body 요소에 배경 이미지 설정
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
//document.body.appendChild(bgImage);