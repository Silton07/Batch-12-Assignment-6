const categoriesContainer = document.getElementById("categoriesContainer")

const loadCategories = ()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.categories);
        const categories = data.categories
        categories.forEach(cat => {
            categoriesContainer.innerHTML +=`
            <li>${cat.category_name}</li>
            `
        });
    })
}
loadCategories()

