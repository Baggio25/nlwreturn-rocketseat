import express, { application } from 'express';

const app = express();

app.post("/feedbacks", (req, res) => {
    console.log(res.send("Olá"));
})


app.listen(3333, () => {
    console.log(">>>> Server is Running! <<<<")
});