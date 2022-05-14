import express,{Application,Request,Response} from 'express';

const app:Application=express();
const port:number=5000;

app.use(express.json());

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World!');
});


app.listen(port,()=>console.log(`listening on http://localhost:${port}`));