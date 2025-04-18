const express=require('express');
const app=express();
const route=require('./routes/routes');
const mongoose=require('mongoose');


mongoose.connect('mongodb://localhost:27017/hostname').then(()=>{
    console.log('connected to mongodb')
}).catch((err)=>{
    console.log(err)
})
// f'http://20.244.56.144/evaluation-service/register')


// {
//     "email": "shailesh.agrawal_cs22@gla.ac.in",
//     "name": "shailesh agrawal",
//     "rollNo": "2215001628",
//     "accessCode": "CNneGT",
//     "clientID": "a43c780f-3791-4839-828a-d89a0d31ec99",
//     "clientSecret": "WtfUSuDQBsbNeSeY"
// }



// {
//     "token_type": "Bearer",
//     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0OTU0NzYwLCJpYXQiOjE3NDQ5NTQ0NjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImE0M2M3ODBmLTM3OTEtNDgzOS04MjhhLWQ4OWEwZDMxZWM5OSIsInN1YiI6InNoYWlsZXNoLmFncmF3YWxfY3MyMkBnbGEuYWMuaW4ifSwiZW1haWwiOiJzaGFpbGVzaC5hZ3Jhd2FsX2NzMjJAZ2xhLmFjLmluIiwibmFtZSI6InNoYWlsZXNoIGFncmF3YWwiLCJyb2xsTm8iOiIyMjE1MDAxNjI4IiwiYWNjZXNzQ29kZSI6IkNObmVHVCIsImNsaWVudElEIjoiYTQzYzc4MGYtMzc5MS00ODM5LTgyOGEtZDg5YTBkMzFlYzk5IiwiY2xpZW50U2VjcmV0IjoiV3RmVVN1RFFCc2JOZVNlWSJ9.Pba3jWc6Yp8n0P51_sFvGH2YJhYjNg3DZnNdvXcXFe0",
//     "expires_in": 1744954760
// }

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(route);
app.listen(3000,()=>{
    console.log('server started on port 3000')
})