function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  const words = str.trim().split(/\s+/);
  const hashtagWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");

  const hashtag = "#" + hashtagWords;

  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}
