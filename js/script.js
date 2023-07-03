const modal = document.getElementById('ContainerModal');

const openButton = document.getElementById('OpenFirstModal');
openButton.onclick = open;

function open(){
  modal.style.display = 'block';
}

const closeButton = document.getElementById('CloseButton');
closeButton.onclick = close;

function close(){
  modal.style.display = 'none';
}
