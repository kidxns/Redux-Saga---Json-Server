const faker = require("@faker-js/faker");
const fs = require("fs");

faker.faker.locale = "vi";

//Products
const randomProductList = (categoryList, numberOfProducts) => {
  const randomList = [];

  for (const category in categoryList) {
    for (let i = 0; i < numberOfProducts; i++) {
      randomList.push({
        categotyId: category.id,
        id: faker.faker.datatype.uuid(),
        name: faker.faker.commerce.product(),
        color: faker.faker.color.human(),
        price: faker.faker.commerce.price(),
        description: faker.faker.commerce.productDescription(),
        thumbUrl: faker.faker.image.imageUrl(),
        createAt: Date.now(),
      });
    }
    return randomList;
  }
};

//Categories
const randomCategoryList = (n) => {
  const randomList = [];

  for (let i = 0; i < n; i++) {
    randomList.push({
      id: faker.faker.datatype.uuid(),
      name: faker.faker.commerce.department(),
      createAt: Date.now(),
    });
  }
  return randomList;
};

const categoryList = randomCategoryList(5);
const productList = randomProductList(categoryList, 20);

const db = {
  categories: categoryList,
  products: productList,
  profile: { name: "Thanh dep zai" },
};

fs.writeFile("src/core/db.json", JSON.stringify(db), () => {
  console.log("Write data succcessfully!");
});
