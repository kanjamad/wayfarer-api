const db = require('./models');

const userData = [
    {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    currentCity: "Gwenborough",
    joinDate:"1/22/2019",default:Date.now,
    posts: [],

},
    {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    currentCity: "Wisokyburgh",
    joinDate:"9/6/2018",default:Date.now,
    posts: [],
},

    {
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    currentCity: "McKenziehaven",
    joinDate:"1/2/2019",default:Date.now,
    posts: [],
},
    {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    currentCity: "South Elvis",
    joinDate:"3/4/2019",default:Date.now,
    posts: [],
},
    
    {
    
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    currentCity: "Roscoeview",
    joinDate:"1/27/2019",default:Date.now,
    posts: [],
},
    {
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    currentCity: "South Christy",
    joinDate:"5/2/2017",default:Date.now,
    posts: [],
},
    {
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    currentCity: "Howemouth",
    joinDate:"11/2/2018",default:Date.now,
    posts: [],
},
    {
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    currentCity: "Aliyaview",
    joinDate:"12/2/2018",default:Date.now,
    posts: [],
},
    {
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    currentCity: "Bartholomebury",
    joinDate:"11/2/2017",default:Date.now,
    posts: []
},
    {
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    currentCity: "Lebsackbury",
    joinDate:"8/2/2018",default:Date.now,
    posts: [],
},
]

const posts =[
    {
    title:"Trip to San Francisco",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"San Francisco",
},
{
    title:"Trip to Sydeny",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"Sydeny",
},{
    title:"Trip to London",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"London",
},
{
    title:"Trip to Seattle",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",   
    city:"Seattle",
},

]


// db.User.deleteMany((err, deletedUsers) => {
//     if (err) console.log(err);
//     console.log('Deleted users successfully');
//     // Create New Users
// db.User.create(userData, (err, newUsers) => {
//     if (err) console.log(err);
//     console.log(newUsers);
//     console.log(`Created ${newUsers.length} new users successfully`);
//     process.exit();
//     });
// });








// Remove Users
db.User.remove({}, (err, users) => {
    db.Post.remove({}, (err, posts) => {});
    db.Post.create(posts, (err, savedPosts) => {
    if (err) {
        return console.log(err);
    } else {
    console.log('post saved successfully');
    db.User.create(user, (err, savedUser) => {
        if (err) {
            return console.log(err);
        }
        savedUser.posts.push(savedPosts);
        savedUser.save((err,savedUser)=>{
                if (err) {
                    return console.log(err);
                } else {
                    console.log('User is ', savedUser);
                }
                });
            })
        }
    });
});

