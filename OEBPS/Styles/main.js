function changeColor(e) {
  window.location.replace(e.href);
  window.location.reload();
  return false;
}

window.onload = function() {
  var href = window.location.href.split('#');
  if (typeof href !== 'undefined' && href.length > 1) {
    document.getElementById(href[1]).style.backgroundColor = '#f1e5c9';
  }
};
