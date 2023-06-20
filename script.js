const images = document.querySelector('input#images');
const preview = document.querySelector('div#preview');

images.addEventListener('input', (e) => {
    // console.log(e.target.files);
    const images = e.target.files;
    preview.innerHTML = Array.from(images).map((image) => {
        const imgSrc = URL.createObjectURL(image);
        return `<div class="col-md-4">
            <div class="card card-body mx-auto my-2 p-2">
                <img src="${imgSrc}" alt="image">
            </div>
        </div>`
    }).join("");
})