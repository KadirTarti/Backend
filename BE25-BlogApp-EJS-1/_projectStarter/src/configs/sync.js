// const {BlogPost,BlogCategory} = require("../models/blogModel")

// module.exports = async () => {

//     const blogCategory = await BlogCategory.findOne()
//     console.log(blogCategory._id)
//     if(blogCategory) {
//       await BlogPost.updateMany(
//           {
//             blogCategoryId: { $exists: false }, // blogCategoryId alanı olmayanları getir ve onlara blogCategoryId ataması yap
//           },
//           {
//             blogCategoryId: blogCategory._id,
//           }
//         );
//     }
//     console.log("**Synchronized!**")
// }
const User = require("../models/user.model");
const { BlogCategory, BlogPost } = require("../models/blogModel");

module.exports = async () => {
  await User.deleteMany().then(() => console.log(" - User Deleted All"));
  await BlogCategory.deleteMany().then(() =>
    console.log(" - BlogCategory Deleted All")
  );
  await BlogPost.deleteMany().then(() =>
    console.log(" - BlogPost Deleted All")
  );

  const user = await User.create({
    email: "abdulkadir@test.com",
    password: "12345678",
    firstName: "Test",
    lastName: "Test",
  });
  // Example Category:
  // Example Category:
  const categories = [
    "Welt",
 "Technik",
"Design",
"Kultur",
"Wirtschaft",
"Politik",
"Wissenschaft",
"Gesundheit",
"Style",
"Reisen",
  ];
  const now = new Date();
  for (let category of categories) {
    const blogCategory = await BlogCategory.create({
      name: category,
    });
    // Example Posts:
    for (let key in [...Array(10)]) {
      await BlogPost.create({
        userId: user._id,
        blogCategoryId: blogCategory._id,
        title: `Beispiel ${category} Post -${key}`,
        content: `
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
            Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
            Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. </p>
            <div class="p-4 text-center"><img src="https://geekflare.com/wp-content/uploads/2016/04/featured-image-generator.jpg"></div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
            Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
            Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
            Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique labore repellendus quibusdam consequuntur quae illum excepturi maxime expedita voluptatum, numquam rem distinctio pariatur magnam, voluptas odit reiciendis amet praesentium qui.
            Fugit dicta quos porro dolor, assumenda aperiam magnam sit eaque voluptate corporis. Facilis voluptatem ea aperiam eveniet hic atque ducimus doloribus, dolorem, vero labore porro earum, nostrum dolore vitae suscipit. </p>
            `,
        published: Boolean(key % 2),
        createdAt: now.getTime() - Math.random() * 10e8, // Random Time
      });
    }
  }

  // End:
  console.log("* Synchronized *");
  /* Finished */
};