(function() {

  define(function() {
    var a;
    a = function(w) {
      return alert("click_mod ready! the word you input is " + w);
    };
    return {
      test: a
    };
  });

}).call(this);
