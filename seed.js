const db = require('./models');

const users_list = [
    {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    password:"1234",
    city:"San Francisco",
    currentCity: "5ccdfc167f4e4e5198c92d96",
    photo:"https://pixabay.com/get/eb35b10c2ef0063ed1534705fb0938c9bd22ffd41cb4164195f0c37ba3/woman-2003647_1920.jpg",
    
    joinDate:"1/22/2019",default:Date.now,
    

},
    {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    password:"1234",
    city:"Sydeny",
    currentCity: "5ccdfc167f4e4e5198c92d97",
    photo:"https://pixabay.com/get/ec3cb20c2dfc1c22d9584518a33219c8b66ae3d01cb6114195f2c97d/entrepreneur-593358_1920.jpg",
    
    joinDate:"9/6/2018",default:Date.now,
    
},

    {
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    password:"1234",
    city:"London",
    currentCity: "5ccdfc167f4e4e5198c92d98",
    photo:"https://pixabay.com/get/e837b60b28f1073ed1534705fb0938c9bd22ffd41cb4164195f0c27aa0/beautiful-1274056_1920.jpg",
    
    joinDate:"1/2/2019",default:Date.now,
    
},
    {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    password:"1234",
    city:"Seattle",
    currentCity: "5ccdfc167f4e4e5198c92d99",
    photo:"https://pixabay.com/get/e83db3072df7073ed1534705fb0938c9bd22ffd41cb4164195f0c271a6/girl-1828536_1920.jpg",
    
    joinDate:"3/4/2019",default:Date.now,
    
},
    
    {
    
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    password:"1234",
    city:"San Francisco",
    currentCity:"5ccdfc167f4e4e5198c92d96",
    photo:"https://pixabay.com/get/ed35b60d29f61c22d9584518a33219c8b66ae3d01cb6114195f4c378/guitarist-407212_1920.jpg",
    
    joinDate:"1/27/2019",default:Date.now,
    
},
    {
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    password:"1234",
    city:"Sydeny",
    currentCity: "5ccdfc167f4e4e5198c92d97",
    photo:"https://pixabay.com/get/e834b50621f5003ed1534705fb0938c9bd22ffd41cb4164195f0c57ea6/woman-1149911_1920.jpg",
    
    joinDate:"5/2/2017",default:Date.now,
    
},
    {
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    password:"1234",
    city:"London",
    currentCity: "5ccdfc167f4e4e5198c92d98",
    photo:"https://pixabay.com/get/ea31b80821f41c22d9584518a33219c8b66ae3d01cb6114195f5c579/musician-349790_1920.jpg",
    
    joinDate:"11/2/2018",default:Date.now,
    
},
    {
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    password:"1234",
    city:"Seattle",
    currentCity: "5ccdfc167f4e4e5198c92d99",
    photo:"https://pixabay.com/get/e830b70e21fc083ed1534705fb0938c9bd22ffd41cb4164195f0c779af/girl-1561989_1920.jpg",
    
    joinDate:"12/2/2018",default:Date.now,
    
},
    {
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    password:"1234",
    city:"London",
    currentCity: "5ccdfc167f4e4e5198c92d98",
    photo:"https://pixabay.com/get/e832b90b2bf3003ed1534705fb0938c9bd22ffd41cb4164195f0c771a0/family-1784371_1920.jpg",
    
    joinDate:"11/2/2017",default:Date.now,
},
    {
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    password:"1234",
    city:"Seattle",
    currentCity: "5ccdfc167f4e4e5198c92d99",
    photo:"https://pixabay.com/get/e832b90b2bf3003ed1534705fb0938c9bd22ffd41cb4164195f0c771a0/family-1784371_1920.jpg",
    
    joinDate:"8/2/2018",default:Date.now,
    
},
]

const posts_list =[
    {
    title:"Trip to San Francisco",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d96",
    user:"5ccdfc167f4e4e5198c92d8c",
    photo:"https://pixabay.com/get/e835b90e2ffc033ed1534705fb0938c9bd22ffd41cb417489cf9c17fa0/golden-gate-bridge-1081782_1920.jpg",
    
},
{
    title:"Trip to Sydeny",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d97",
    user:"5ccdfc167f4e4e5198c92d8d",
    photo:"https://pixabay.com/get/ea30b50c2ff11c22d9584518a33219c8b66ae3d01cb718489cf4c87a/sydney-opera-house-354375_1920.jpg",
    
},{
    title:"Trip to London",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d98",
    user:"5ccdfc167f4e4e5198c92d8e",
    photo:"https://pixabay.com/get/eb36b80c28fd093ed1534705fb0938c9bd22ffd41cb417489cf9c47ea5/london-2393098_1920.jpg",
    
},
{
    title:"Trip to Seattle",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d99",
    user:"5ccdfc167f4e4e5198c92d8f",
    photo:"https://pixabay.com/get/eb33b00b2df2083ed1534705fb0938c9bd22ffd41cb4164195f0c67ba1/model-2614569_1920.jpg",
    
},

]



const cities_list =[
    {
        title:"",
        cityName:"San Francisco",
        photo:"https://pixabay.com/get/e835b90e2ffc033ed1534705fb0938c9bd22ffd41cb417489cf9c17fa0/golden-gate-bridge-1081782_1920.jpg",
    
    },
    {
        title:"",
        cityName:"Sydeny",
        photo:"https://pixabay.com/get/ea30b50c2ff11c22d9584518a33219c8b66ae3d01cb718489cf4c87a/sydney-opera-house-354375_1920.jpg",
    
    },
    {
        title:"",
        cityName:"London",
        photo:"https://pixabay.com/get/eb36b80c28fd093ed1534705fb0938c9bd22ffd41cb417489cf9c47ea5/london-2393098_1920.jpg",
    
    },
    {
        title:"",
        cityName:"Seattle",
        photo:"https://pixabay.com/get/e132b10d20f61c22d9584518a33219c8b66ae3d01cb718489cf6c371/seattle-870282_1920.jpg",
    
    },

]


db.User.deleteMany((err, deletedUsers) => {
    if (err) console.log(err);
    console.log('Deleted users successfully');
    // Create New Users
db.User.create(users_list, (err, newUsers) => {
    if (err) console.log(err);
    console.log(newUsers);
    console.log(`Created ${newUsers.length} new users successfully`);
    process.exit();
    });
});






// --------------

// Remove Users
// db.User.remove({}, (err, users) => {
//     db.Post.remove({}, (err, posts) => {});
//     db.Post.create(posts, (err, savedPosts) => {
//     if (err) {
//         return console.log(err);
//     } else {
//     console.log('post saved successfully');
//     db.User.create(user, (err, savedUser) => {
//         if (err) {
//             return console.log(err);
//         }
//         savedUser.posts.push(savedPosts);
//         savedUser.save((err,savedUser)=>{
//                 if (err) {
//                     return console.log(err);
//                 } else {
//                     console.log('User is ', savedUser);
//                 }
//                 });
//             })
//         }
//     });
// });

// -----------------


// db.User.deleteMany({}, (err, users) => {
// if (err) return console.log(err);
// console.log('removed all users');
// db.User.create(users_list, (err, users) => {
//     if (err) return console.log(err);
//     console.log('recreated all users');
//     console.log(`created ${users.length} users`);

// db.Post.deleteMany({}, (err, posts) => {
//     if (err) return console.log(err);
//     console.log('removed all posts');

// posts_list.forEach(postData => {
//     const post = new db.Post({
//     title: postData.title,
//     content: postData.content,
//     city: postData.city,
//     user: postData.user,
//     photo: postData.photo,
//     joinDate: postData.joinDate,
//     });

// db.User.find({username: postData.user}, (err, foundUser) => {
//     console.log(`found user  ${foundUser.username} for post ${post.title}`);
//     if (err) return console.log(err);

//     post.user = foundUser;
//     post.save((err, savedPost) => {
//         if (err) return console.log(err);
//         console.log(`saved ${savedPost.title} by ${foundUser.username}`);
//     });
//     });
//     });
//     });
// });
// });

// --------------------------

db.City.deleteMany((err, deletedCities) => {
    if (err) console.log(err);
    console.log('Deleted Cities successfully');
    // Create New Cities
db.City.create(cities_list, (err, newCities) => {
    if (err) console.log(err);
    console.log(newCities);
    console.log(`Created ${newCities.length} new cities successfully`);
    process.exit();
    });
});