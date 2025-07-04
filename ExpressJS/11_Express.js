// REST APIS -
const express = require('express')
const app = express();
// const users = require('./MOCK_DATA.json')
const fs = require('fs')
const mongoose = require('mongoose');
const { type } = require('os');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* 
 TASKS -

 GET /users - List all user (HTML)
 GET/api/user

 GET /users/1 - Get the user with id 1

 POST /users - create new user

 PATCH /user/id - edit user with id 1

 DELETE /users/1 - delete the user with id 1
*/

app.use((req, res, next) => {
    console.log('hello from middleware 1');
    next(); // imp to call next function 
    
})

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    job_title: {
        type: String
    },
    gender: {
        type: String
    }
})

const User = mongoose.model('user', userSchema);

mongoose.connect('mongodb://localhost:27017/youtube-tut')
.then( () => console.log('db connected'))
.catch(err => console.log('mongo error: ', err))

// Routes -

app.get('/api/users', async (req,res) => {
    const allDbUsers = await User.find();
    
    return res.json(allDbUsers);
})

app.get('/users', async (req,res) =>{
    const allDbUsers = await User.find();
    const html = `
    <ul>
        ${allDbUsers.map((user) => `<li>${user.first_name}- ${user.email}</li>`).join("")}
    </ul>
    `
    return res.send(html)
})

app
    .route('/api/users/:id')
    .get(async (req,res) => {
        const user = await User.findById(req.params.id)
   

    // const html = `
    // ${user.first_name}
    // `

    return res.send(user);
    })
    .patch(async (req,res) => {
        await User.findByIdAndUpdate(req.params.id, {last_name: 'Changed'})
    return res.json({status: "success"})
    })
    .delete(async (req,res) => {
        await User.findByIdAndDelete(req.params.id)
    return res.json({status: "deleted"})
    })



app.post('/api/users',async  (req,res) => {
    const body = req.body //frontend body data
    // users.push({...body, id: users.length + 1});

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })
    console.log(result);
    
    return res.status(201).json({msg: 'success'})

    
})


app.listen(8080, () => {
    console.log('sever has started!');
    
})