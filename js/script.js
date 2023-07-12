const modal = document.getElementById('ContainerModal');

const openButton = document.getElementById('OpenFirstModal');
openButton.onclick = open;
modal.style.display = 'none';

function open(){
  document.startViewTransition(()=> modal.style.display = 'block')
}

const closeButton = document.getElementById('CloseButton');
closeButton.onclick = close;

function close(){
  document.startViewTransition(()=> modal.style.display = 'none')
}
