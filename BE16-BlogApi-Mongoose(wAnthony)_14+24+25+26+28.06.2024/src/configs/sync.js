const User = require("../models/userModel");
const { BlogCategory, BlogPost } = require("../models/blogModel");

module.exports = async () => {
  await User.deleteMany().then(() => console.log(" - User Deleted All"));
  await BlogCategory.deleteMany().then(() =>
    console.log(" - BlogCategory Deleted All")
  );
  await BlogPost.deleteMany().then(() =>
    console.log(" - BlogPost Deleted All")
  );

  const users = [];
  const categories = [];

  // Create 10 Users
  for (let i = 1; i <= 10; i++) {
    const user = await User.create({
      email: `test${i}@test.com`,
      password: "12345678",
      firstName: `Testuser${i}`,
      lastName: `User${i}`,
    });
    users.push(user);
  }

  // Create 10 Categories
  for (let i = 1; i <= 10; i++) {
    const category = await BlogCategory.create({
      name: `Test Category ${i}`,
    });
    categories.push(category);
  }

  // Create 20 Blog Posts for each user and category
  for (let user of users) {
    for (let category of categories) {
      for (let j = 1; j <= 20; j++) {
        await BlogPost.create({
          userId: user._id,
          blogCategoryId: category._id,
          title: `test ${j} title for user ${user.firstName} and category ${category.name}`,
          content: `test ${j} content for user ${user.firstName} and category ${category.name}`,
          published: Boolean(j % 2),
        });
      }
    }
  }

  // End:
  console.log("* Synchronized *");
  /* Finished */
};