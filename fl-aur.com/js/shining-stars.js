$(function() {
  function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  function getRandom (min, max) {
    var value = Math.random() * (max - min) + min;
    var exp = -1;
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  };

  function insertProperty (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string.replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  };

  function insertHtml (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  var starPerRow = 0;
  var classToAdd = '';
  if ( screen.width > 1440 ) {
    starPerRow = 6;
    classToAdd = 'col-xlg-2';
  } else if ( screen.width > 991 ) {
    starPerRow = 4;
    classToAdd = 'col-lg-3';
  } else {
    starPerRow = 3;
    classToAdd = 'col-md-4';
  }

  var starProto = '<img src="img/rose-star.png" style="position: absolute; left: {{left}}%; width: {{width}}%; animation: shining {{duration}}s ease {{delay}}s infinite alternate; -webkit-animation: shining {{duration}}s ease {{delay}}s infinite alternate;" class="star">'
  for ( var i = 1; i < 11; i++) {
    var allstarPerRowHTML = '';
    for ( var k = 1; k < starPerRow + 1; k++) {
      var starAttr = { left: getRandomInt(10,90), width: getRandomInt(5,20), duration: getRandom(1,3), delay: getRandom(0,3) };
      var oneStar = starProto;
      for ( var j in starAttr ) {
         oneStar = insertProperty (oneStar, j, starAttr[j]);
      };
      if ( getRandomInt(0,100) > 50 ) { oneStar = ''; }
      allstarPerRowHTML += '<div class="star '+ classToAdd +'">' + oneStar + '</div>';
    };
    insertHtml("div.skyline#row"+i, allstarPerRowHTML);
  };
});