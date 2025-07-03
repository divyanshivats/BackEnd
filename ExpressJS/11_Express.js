// REST APIS -
const express = require('express')
const app = express();
const users = require('./MOCK_DATA.json')
const fs = require('fs')

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

// Routes -

app.get('/api/users', (req,res) => {
     return res.json(users);
})

app.get('/users', (req,res) =>{
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    return res.send(html)
})

app
    .route('/api/users/:id')
    .get((req,res) => {
    const id = Number(req.params.id);
    const user = users.find( (user) => user.id === id);

    // const html = `
    // ${user.first_name}
    // `

    return res.send(user);
    })
    .patch((req,res) => {
    return res.json({status: "pending!"})
    })
    .delete((req,res) => {
    return res.json({status: "pending!"})
    })



app.post('/api/users', (req,res) => {
    const body = req.body //frontend body data
    users.push({...body, id: users.length + 1});

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "success"})
    })
    console.log(body);
    
    
})


app.listen(8080, () => {
    console.log('sever has started!');
    
})