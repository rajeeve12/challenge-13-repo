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
const products = [
    {
  
        companyName: "SmartSphere",
        productPrice: 299.99,
        productName: "Wireless Headphones",}{
      
        companyName: "Home Depot",
        productPrice: 79.99,
        productName: "Smart Coffee Maker",}{
    
        companyName: "Athletics",
        productPrice: 149.99,
        productName: "Running Shoes", }
];
//Task 4
function Error(message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    return error;
}
.catch(error) {
    console.log('Error fetching products:', error);

    targetElement.appendChild(
        showError('Failed to load products. Please try again later.')
    );
}