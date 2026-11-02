// Türkçe / English: seçim hatırlanır, ilk girişte tarayıcı diline bakılır
(function () {
  var saved = localStorage.getItem("lang");
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  document.documentElement.lang = lang;
  window.setLang = function (l) {
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
    mark();
  };
  function mark() {
    var buttons = document.querySelectorAll(".langs button");
    for (var i = 0; i < buttons.length; i++)
      buttons[i].className = buttons[i].getAttribute("data-l") === document.documentElement.lang ? "on" : "";
  }
  document.addEventListener("DOMContentLoaded", mark);
})();
