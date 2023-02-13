const likeButton = document.querySelector(".like-btn")
const likeCountDisplay = document.querySelector(".like-count")
var likesCount = 0

likeButton.onclick = function() {
    likesCount++;
    console.log(likesCount);
    likeCountDisplay.innerText = likesCount
}