var g;

function changeColor(e) {
  var id = e.href.split('#')[1];
  var p = document.getElementById(id);
  if (g) {
    g.style.backgroundColor = 'transparent';
  }
  p.style.backgroundColor = '#f1e5c9';
  g = p;
  return true;
}

window.onload = function() {
  var href = window.location.href.split('#');
  if (typeof href !== 'undefined' && href.length > 1) {
    g = document.getElementById(href[1]);
    g.style.backgroundColor = '#f1e5c9';
  }
};
