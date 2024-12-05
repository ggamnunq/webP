const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', static(path.join(__dirname, 'public')));

router.route('/process/login').post((req, res) => {
    console.log('/process/login 처리');

    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;


    res.status(200).send(
        `<h1>서버에 응답한 결과</h1.
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password : ${paramPassword}</p></div>
        <br><br><a href="/login2.html">로그인 페이지로 돌아가기</a>
        `        
    );
});

app.use('/', router);

app.listen(3000);