const likeButton = document.querySelectorAll(".like-btn")
const likeCountDisplay = document.querySelectorAll(".like-count")
var likesCount = [0,0,0]


likeButton[0].onclick = function() {
    likesCount[0]++;
    likeCountDisplay[0].innerText = likesCount[0]
}

likeButton[1].onclick = function() {
    likesCount[1]++;
    likeCountDisplay[1].innerText = likesCount[1]
}

likeButton[2].onclick = function() {
    likesCount[2]++;
    likeCountDisplay[2].innerText = likesCount[2]
}