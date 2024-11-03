//Task 2
function fetchProducts() {
    const url = 'https://www.course-api.com/javascript-store-products';
    const productsContainer = document.getElementById('products');
}
fetch(url)
        .then((output) => {
            if (output.ok) {
                console.log {output.status});
            return output.json();
        
            data.forEach((item) => {
                const { id, fields } = item;
                const { name, price, image } = fields;
                const imageUrl = image[0].url;
                const productDiv = document.createElement('div');
                productDiv.classList.add('product');
            }

//Task 3

