const addClient = () => {
    let name = document.querySelector('#nameInput').value;
    let contact = document.querySelector('#contactInput').value;
    let comment = document.querySelector('#commentInput').value;
    let address = document.querySelector('#addressInput').value;
    
    let image = document.querySelector('#imageInput').files[0];
    
    let clientCard = document.createElement('div');
    clientCard.classList.add('client-card');
    
    let clientInfo = document.createElement('div');
    clientInfo.classList.add('client-info');
    
    clientInfo.innerHTML = `
        <h3>${name}</h3>
        <p>Контактная информация: ${contact}</p>
        <p>Комментарит: ${comment}</p>
        <p>Адрес: ${address}</p>
    `;
    
    clientCard.appendChild(clientInfo);
    
    if (image) {
        let imagePreview = document.createElement('img');
        imagePreview.classList.add('client-image');
        imagePreview.file = image;
        clientCard.appendChild(imagePreview);
        
        let reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(imagePreview);
        reader.readAsDataURL(image);
    }
    
    document.querySelector('#clientList').appendChild(clientCard);
    
    // очистить поля ввода
    document.querySelector('#nameInput').value = '';
    document.querySelector('#contactInput').value = '';
    document.querySelector('#commentInput').value = '';
    document.querySelector('#addressInput').value = '';
}