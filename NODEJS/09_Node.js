/* HTTP GET - when you want to get some data from the user
    browser always do get request


    POST- when you send some data (ex- on insta you signUp to enter you data into database of insta)
            this is called mutate some data in server

1. GET
Purpose: Retrieve data from a server.
Characteristics: Safe and idempotent, meaning it doesn’t change server state and can be called multiple times with the same result.
Usage: Commonly used to fetch resources, like when you visit a webpage or request data through an API.

2. POST
Purpose: Send data to the server, often to create a new resource.
Characteristics: Not idempotent, as each request typically creates a new resource or triggers an action.
Usage: Submitting forms, uploading files, or sending JSON data to create new records in databases.

3. PUT
Purpose: Update an existing resource with the provided data.
Characteristics: Idempotent, meaning repeated requests with the same data should yield the same result.
Usage: Updating a user’s profile information or replacing a specific resource’s data.

4. PATCH
Purpose: Partially update an existing resource with the provided data.
Characteristics: Idempotent, focusing on making minor changes rather than replacing the entire resource.
Usage: Changing a single field in a profile, such as updating only the email address.

5. DELETE
Purpose: Remove a specified resource from the server.
Characteristics: Idempotent, as repeated deletion attempts for the same resource will have the same outcome (the resource is removed).
Usage: Deleting a user, removing a file, or deleting a record in a database.

6. HEAD
Purpose: Similar to GET, but only retrieves headers without the response body.
Characteristics: Often used to check if a resource exists or to get metadata.
Usage: Validating resources without downloading the entire content, checking headers for caching information, etc.

7. OPTIONS
Purpose: Describe the communication options for a specific URL or server.
Characteristics: Used to list the HTTP methods supported by the server for a given endpoint.
Usage: Checking allowed methods, often used in Cross-Origin Resource Sharing (CORS) requests.

*/

const url = require("url")
const http = require('http')

const myServer = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url, true);
    switch(myUrl.pathname){
        case "/":
            res.end(`hi,  this is ${req.method}`)

            break;

    }
})

myServer.listen(8000, (req,res) => {
    console.log('your server is running');
    
})