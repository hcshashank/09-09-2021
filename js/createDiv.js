let createDiv = document.createElement('div');
document.body.appendChild(createDiv)
createDiv.style.height= '400px';
createDiv.style.width = '400px';
createDiv.style.borderRadius= '10px';
createDiv.style.background = 'grey';
createDiv.style.border = '2px solid black';
function img(image='./images/logo.png'){
    let imgElement=document.createElement('img')
    createDiv.appendChild(imgElement);
    imgElement.src=image;   
}
img();