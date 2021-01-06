function check() {
  const tweets = document.querySelectorAll('.tweet');
  tweets.forEach(function (tweet) {
    if (tweet.getAttribute("data-load") != null) {
      return null;
    }
    tweet.setAttribute("data-load", "true");
    
    tweet.addEventListener("click", () => {
      const tweetId = tweet.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", `/tweets/${tweetId}`, true);
      XHR.responseType = "json";
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;          
        }
        const item = XHR.response.tweet;
        if (item.checked === true) {
          tweet.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          tweet.removeAttribute("data-check");
        }
      };
    });
  })
}
// window.addEventListener("load", check);
setInterval(check, 1000);