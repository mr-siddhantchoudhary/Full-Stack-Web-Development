window.onscroll = function() {
    var scrollPos = window.scrollY;
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    var percentage = Math.round((scrollPos / totalHeight) * 100);
    document.getElementById("progress-bar").style.width = percentage + "%";
  };