function check() {
  const tweets = document.querySelectorAll('.post');
  tweets.forEach(function (tweet) {
    if (tweet.getAttribute("data-load") != null) {
      return null;
    }
    tweet.setAttribute("data-load", "true");
    tweet.addEventListener("click", () => {
      const tweetId = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/tweets/${tweetId}`, true)
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
    });
  })
}
// window.addEventListener("load", check);
setInterval(check, 1000);