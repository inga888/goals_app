require('dotenv').config();
const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;
console.log(process.env.PORT)

const app = express();

//миддлвары
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goals', require('./routes/goalRoutes'));
app.use(errorHandler); //перекроет дефолтную обраюотку ошибок экспресс

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
