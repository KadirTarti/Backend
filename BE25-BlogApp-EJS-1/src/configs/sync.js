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
    avatar: "https://avatars.githubusercontent.com/u/150926891?v=4",
    bio: "Tech enthusiast and writer.",
    email: "abdulkadir@test.com",
    password: "12345678",
    firstName: "Test",
    lastName: "Test",
  });
  // Example Category:
  // Example Category:
  const categories = [
    "Welt",
    "Technologie",
    "Gestaltung",
    "Kultur",
    "Wirtschaft",
    "Politik",
    "Wissenschaft",
    "Gesundheit",
    "Stil",
    "Reisen",
  ];
  const now = new Date();
  for (let category of categories) {
    const blogCategory = await BlogCategory.create({
      name: category,
      slug: category.toLowerCase().replace(" ", "-"),
    });
    // Example Posts:
    for (let key in [...Array(10)]) {
      await BlogPost.create({
        userId: user._id,
        blogCategoryId: blogCategory._id,
        title: `Beispiel ${category} Post -${key}`,
        featuredImage: "https://image-url.com",
        subtitle: `Ein kurzer Einblick in ${category}`,
        content: [
          "Dies ist eine einfache Kategorie Inhalt.",
          "Ich habe sie als Beispiel geschrieben.",
        ],
        published: Boolean(key % 2),
        createdAt: now.getTime() - Math.random() * 10e8, // Random Time
      });
    }
  }

  // End:
  console.log("* Synchronized *");
  /* Finished */
};
