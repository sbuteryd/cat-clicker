
const picture = document.querySelector(".picture");
const clickCount =  document.querySelector(".click-count");
let count = 0;

picture.addEventListener("click",function () {
    count +=1;
    clickCount.textContent = count;
});
