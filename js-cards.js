// alert("hoge");

const table = document.getElementById('table');


function heart(canvas) {

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'red';
  ctx.font = '10px serif';
  ctx.fillText('♥', 10, 10);
  ctx.fillText('♦', 30, 10);

  ctx.fillStyle = 'black';
  ctx.fillText('♠', 10, 40);
  ctx.fillText('♣', 30, 40);
  return ctx;
}

function addCard() {
  const canvas = document.createElement('canvas');
  canvas.classList.add('card');
  canvas.setAttribute( "width" , 58 );
  canvas.setAttribute( "height" , 89 );

  heart(canvas);

  document.getElementById("table").appendChild(canvas);
}

addCard();