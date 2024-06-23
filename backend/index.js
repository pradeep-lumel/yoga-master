// https://cloud.mongodb.com/v2/6676575f1f26f0012f3e281b#/metrics/replicaSet/667657a5340e9b3e52ff7ea9/explorer/Yoga-Master
const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5000
const cors=require('cors')
const classesRouters=require('./routes/classesRoutes')

const mongoose=require('mongoose')
app.get('/',(req,res)=>{
res.send('success')
})

//mongo-connection
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});


app.use(cors())
app.use(express.json())
app.use('/api/v1/',classesRouters)

//starting server
app.listen(port,()=>console.log(`server running on port ${port}`))