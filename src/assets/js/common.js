// eslint-disable-next-line no-unused-expressions
! function (n) {
  var e = n.document,
    t = e.documentElement,
    o = "orientationchange" in n ? "orientationchange" : "resize",
    a = function () {
      var n = t.clientWidth || 375;
      n > 750 && (n = 750);
      t.style.fontSize = n / 3.75 + "px"
    };
  // eslint-disable-next-line no-unused-expressions
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    // eslint-disable-next-line no-undef
    FastClick.attach(document.body);
  }, false);
}

if (!window.Promise) {
  document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js" ' + '>' + '<' + '/' + 'script>');
} 