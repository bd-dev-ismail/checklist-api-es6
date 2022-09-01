const loadPictures = async() =>{
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    const res = await fetch `https://jsonplaceholder.typicode.com/photos/`;
    const data = await res.json();
    // console.log(data);
    return data;
}
const displayPicture = async() =>{
    const pictures = await loadPictures();
    const pictureContainer = document.getElementById("picture-container");
    
    pictures.slice(0,10).forEach(picture => {
        console.log(picture)
        const pictureDiv = document.createElement('div');
        pictureDiv.classList.add('col');
        pictureDiv.innerHTML = `
        <div class="card">
            <img onclick="loadDetails('${picture.id}')" src="${picture.thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${picture.title}</h5>
            </div>
        </div>
        `;
        pictureContainer.appendChild(pictureDiv)
    });
};
const loadDetails = async(id) =>{
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    // fetch(url)
    // .then(res => res.json())
    // .then(data => console.log(data));
    const res = await fetch(url);
    const data = await res.json();
    displayDetalis(data);
};

const displayDetalis = (details) =>{
    const displayContainer = document.getElementById("details-container");
    displayContainer.textContent = '';
    const createDiv = document.createElement('div');
    createDiv.classList.add('card');
    createDiv.innerHTML = `
    
    <img class="img-fluid" src= "${details.url}">
    <img src="${details.thumbnailUrl}" class="card-img-top img-fluid" alt="...">
   
    <div class="card-body">
        <h5 class="card-title">${details.title}</h5>
    </div>
    `;
    displayContainer.appendChild(createDiv);
}

displayPicture();
// loadDetails();