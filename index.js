document.addEventListener('DOMContentLoaded', function() {
    const userRegister = document.getElementById('userRegister');
    const addProduct = document.getElementById('addProduct');
    const generateReportButton = document.getElementById('generateReportButton');
    let users = [];
    let products = [];

    userRegister.addEventListener('submit', function(event) {
        event.preventDefault();
        const userName = document.getElementById('name').value;
        const userEmail = document.getElementById('email').value;
        const userAge = document.getElementById('age').value;
        const newUser = { userName, userEmail, userAge };
        users = [...users, newUser];
        showLists();
        userRegister.reset();
    });

    addProduct.addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('price').value;
        const productCategory = document.getElementById('category').value;
        const newProduct = { productName, productPrice, productCategory };
        products = [...products, newProduct];
        showLists();
        addProduct.reset();
    });

    function showLists() {
        const productUl = document.getElementById('productList');
        productUl.innerHTML = '';
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.productName} - ${product.productPrice} (${product.productCategory})`;
            productUl.appendChild(li);
        });
        
        const userUl = document.getElementById('userList');
        userUl.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.userName} - ${user.userEmail} (${user.userAge})`;
            userUl.appendChild(li);
        });
    }

    generateReportButton.addEventListener('click', function() {
        const report = {
            totalUsers: users.length,
            totalProducts: products.length,
            users,
            products
        };
        
        let reportList = `Total de Usuarios: ${report.totalUsers}<br>
                          Total de Productos: ${report.totalProducts}<br>`;
        
        document.getElementById('report').innerHTML = reportList;
    });
});