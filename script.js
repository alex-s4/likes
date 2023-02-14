const likeButton = document.querySelectorAll(".like-btn")
const likeCountDisplay = document.querySelectorAll(".like-count")
var likesCount2 = [0,0,0]


likeButton[0].onclick = function() {
    likesCount2[0]++;
    likeCountDisplay[0].innerText = likesCount2[0]
}

likeButton[1].onclick = function() {
    likesCount2[1]++;
    likeCountDisplay[1].innerText = likesCount2[1]
}

likeButton[2].onclick = function() {
    likesCount2[2]++;
    likeCountDisplay[2].innerText = likesCount2[2]
}