var container = document.querySelector('#container');
var pyramid = document.querySelector('#pyramid');

var brick = document.querySelector('.bricks').value;

// get the value of slider
var height = document.querySelector('#height').value;
drawPyramid(height);

function drawPyramid(height) {
  pyramid.innerHTML = '';
  for (var i = 0; i < height; i++) {
    pyramid.appendChild(document.createElement('br'));
    for (var j = 0; j < i; j++) {
      rowStr = document.createElement('div');
      rowStr.appendChild(document.createTextNode(brick));
      document.getElementById('pyramid').appendChild(rowStr);
    }
  }
}

var slide = function(e) {
  // the name attribute
  var name = e.target.getAttribute('name');
  if (name == "bricks") {
    brick = e.target.value;
    drawPyramid(height);
  } else {
    height = e.target.value;
    e.target.nextElementSibling.innerHTML = height;
    drawPyramid(height);
  }
};

container.addEventListener('input', slide);
