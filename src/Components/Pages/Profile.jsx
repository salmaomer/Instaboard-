export default function likeUser(userId) {
  const liked = JSON.parse(localStorage.getItem('likedUsers')) || [];
  if (!liked.includes(userId)) {
    liked.push(userId);
    localStorage.setItem('likedUsers', JSON.stringify(liked));
  }
}
