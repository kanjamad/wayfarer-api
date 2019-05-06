const db = require('./models');

const users_list = [
    {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    password:"1234",
    city:"San Francisco",
    currentCity: "5ccdfc167f4e4e5198c92d96",
    photo:"https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg",
    
    joinDate:"1/22/2019",default:Date.now,
    

},
    {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    password:"1234",
    city:"Sydeny",
    currentCity: "5ccdfc167f4e4e5198c92d97",
    photo:"https://secure.gravatar.com/avatar/75f51a0c3f486a49fae5bdf2f7094532?s=300&d=mm&r=g",
    
    joinDate:"9/6/2018",default:Date.now,
    
},

    {
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    password:"1234",
    city:"London",
    currentCity: "5ccdfc167f4e4e5198c92d98",
    photo:"https://carwad.net/sites/default/files/happy-person-picture-130535-9475541.jpg",
    
    joinDate:"1/2/2019",default:Date.now,
    
},
    {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    password:"1234",
    city:"Seattle",
    currentCity: "5ccdfc167f4e4e5198c92d99",
    photo:"https://vignette.wikia.nocookie.net/fox-thegifted/images/0/08/Amy_Acker.png/revision/latest?cb=20180922230337",
    
    joinDate:"3/4/2019",default:Date.now,
    
},
    
    {
    
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    password:"1234",
    city:"San Francisco",
    currentCity:"5ccdfc167f4e4e5198c92d96",
    photo:"http://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_thescene.jpg,fl_progressive,g_face,h_450,q_80,w_800/v1477940820/glamour_woman-of-the-year-ashley-graham-sounds-off-on-shirtless-selfies-dirty-talk-and-the-thigh-gap.jpg",
    
    joinDate:"1/27/2019",default:Date.now,
    
},
    {
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    password:"1234",
    city:"Sydeny",
    currentCity: "5ccdfc167f4e4e5198c92d97",
    photo:"https://cdn1.medicalnewstoday.com/content/images/articles/320/320137/smiling-middle-aged-woman.jpg",
    
    joinDate:"5/2/2017",default:Date.now,
    
},
    {
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    password:"1234",
    city:"London",
    currentCity: "5ccdfc167f4e4e5198c92d98",
    photo:"http://dailytrojan.com/wp-content/uploads/2018/01/loganpaul.jpg",
    
    joinDate:"11/2/2018",default:Date.now,
    
},
    {
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    password:"1234",
    city:"Seattle",
    currentCity: "5ccdfc167f4e4e5198c92d99",
    photo:"http://202.166.198.46/bgjobs/static/uploads/ac8f34e3759decb7a5c0ae12de152c0b.jpg",
    
    joinDate:"12/2/2018",default:Date.now,
    
},
    {
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    password:"1234",
    city:"London",
    currentCity: "5ccdfc167f4e4e5198c92d98",
    photo:"https://images.askmen.com/1080x540/2017/02/06-125457-things_to_consider_before_dating_a_younger_woman.jpg",
    
    joinDate:"11/2/2017",default:Date.now,
},
    {
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    password:"1234",
    city:"Seattle",
    currentCity: "5ccdfc167f4e4e5198c92d99",
    photo:"https://www.sss.gov/portals/0/Images/Women-and-the-Draft.jpg",
    
    joinDate:"8/2/2018",default:Date.now,
    
},
]

const posts_list =[
    {
    title:"Trip to San Francisco",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d96",
    user:"5ccdfc167f4e4e5198c92d8c",
    photo:"http://velocity.uwaterloo.ca/wp-content/uploads/2016/01/san-franc.jpg",
    
},
{
    title:"Trip to London",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d98",
    user:"5ccdfc167f4e4e5198c92d8c",
    photo:"https://assets1b.milkeninstitute.org/assets/Events/Conferences/Summit/2018/_resampled/FillWyIxOTgwIiwiMTI1MCJd/london-2393098-1920.jpg",
    
},
{
    title:"Trip to Sydeny",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d97",
    user:"5ccdfc167f4e4e5198c92d8d",
    photo:"https://www.sydney.canna-tech.co/wp-content/uploads/2018/07/hp-header-sydney.jpg",
    
},
{
    title:"Trip to London",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d98",
    user:"5ccdfc167f4e4e5198c92d8d",
    photo:"https://assets1b.milkeninstitute.org/assets/Events/Conferences/Summit/2018/_resampled/FillWyIxOTgwIiwiMTI1MCJd/london-2393098-1920.jpg",
    
},
{
    title:"Trip to London",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d98",
    user:"5ccdfc167f4e4e5198c92d8e",
    photo:"https://assets1b.milkeninstitute.org/assets/Events/Conferences/Summit/2018/_resampled/FillWyIxOTgwIiwiMTI1MCJd/london-2393098-1920.jpg",
    
},
{
    title:"Trip to Seattle",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d99",
    user:"5ccdfc167f4e4e5198c92d8e",
    photo:"https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    
},
{
    title:"Trip to Seattle",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d99",
    user:"5ccdfc167f4e4e5198c92d8f",
    photo:"https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    
},
{
    title:"Trip to London",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"5ccdfc167f4e4e5198c92d98",
    user:"5ccdfc167f4e4e5198c92d8f",
    photo:"https://assets1b.milkeninstitute.org/assets/Events/Conferences/Summit/2018/_resampled/FillWyIxOTgwIiwiMTI1MCJd/london-2393098-1920.jpg",
    
},


]



const cities_list =[
    {
        title:" I love San Francisco",
        cityName:"San Francisco",
        photo:"http://velocity.uwaterloo.ca/wp-content/uploads/2016/01/san-franc.jpg",
    
    },
    {
        title:"I love Sydeny",
        cityName:"Sydeny",
        photo:"https://www.sydney.canna-tech.co/wp-content/uploads/2018/07/hp-header-sydney.jpg",
    
    },
    {
        title:" I love London",
        cityName:"London",
        photo:"https://assets1b.milkeninstitute.org/assets/Events/Conferences/Summit/2018/_resampled/FillWyIxOTgwIiwiMTI1MCJd/london-2393098-1920.jpg",
    
    },
    {
        title:"I love Seattle",
        cityName:"Seattle",
        photo:"https://www.citizenm.com/cache/images/seattle_city_image_1200x675-1_004b02a34b02a3.jpg",
    
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



// ------------posts----------------
db.Post.deleteMany((err, deletedPosts) => {
    if (err) console.log(err);
    console.log('Deleted posts successfully');
    // Create New Posts
db.Post.create(posts_list, (err, newPosts) => {
    if (err) console.log(err);
    console.log(newPosts);
    console.log(`Created ${newPosts.length} new posts successfully`);
    process.exit();
    });
});



// -------------City -------------

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