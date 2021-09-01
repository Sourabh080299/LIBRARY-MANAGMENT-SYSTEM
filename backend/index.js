const express=require('express');
const mysql=require('mysql');

const bodyParser=require('body-parser');
const cors=require('cors');


const app=express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


//database creation
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sourabh',
    database:'LibraryDatabase'
});
//all user list for admin
app.get('/user',(req,res)=>{
    const sqlSelect="SELECT * FROM user;"
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
//signup for user
app.post('/signup',(req,res)=>{
    const sqlInsert="INSERT INTO user (fname,lname,moblieNumber,address,email,password) VALUES (?,?,?,?,?,?);"
    const fname=req.body.fname;
    const lname=req.body.lname;
    const moblieNumber=req.body.moblieNumber;
    const address=req.body.address;
    const email=req.body.email;
    const password=req.body.password;
    db.query(sqlInsert,[fname,lname,moblieNumber,address,email,password],(err,result)=>{
     if(err){
         console.log(err);
     }
     else{
         console.log('signup data inserted into user table');
     }
    })
})
//signup admin
app.post('/signup/admin',(req,res)=>{
    const sqlInsert="INSERT INTO staff (fname,lname,moblieNumber,address,email,password) VALUES (?,?,?,?,?,?);"
    const fname=req.body.fname;
    const lname=req.body.lname;
    const moblieNumber=req.body.moblieNumber;
    const address=req.body.address;
    const email=req.body.email;
    const password=req.body.password;
    db.query(sqlInsert,[fname,lname,moblieNumber,address,email,password],(err,result)=>{
     if(err){
         console.log(err);
     }
     else{
         console.log('signup data inserted into staff table');
     }
    })
})
//delete book by admin
app.delete('/delete/book:bookid',(req,res)=>{
    const sqlDelete="DELETE FROM book WHERE bookid = ? ;";
    const bookid=req.params.bookid;
    db.query(sqlDelete,bookid,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('book deleted');
        }
    });
})
//update book by admin
app.put('/update/book',(req,res)=>{
    
    const sqlUpdate="UPDATE book SET  bookname = ?,title = ? ,edition = ? ,bookcategory = ? ,price = ?,publisher_email = ? , publishing_date = ? ,quantity = ?  WHERE bookid = ?";
    const bookid=req.body.bookid;
    const bookname=req.body.bookname;
    const title=req.body.title;
    const edition=req.body.edition;
    const bookcategory=req.body.bookcategory;
    const price=req.body.price;
    const publisheremail=req.body.publisheremail;
    const quantity=req.body.quantity;
    const publishing_date=req.body.publishing_date;
    db.query(sqlUpdate,[bookname,title,edition,bookcategory,price,publisheremail,publishing_date,quantity,bookid],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('book updated');
        }
    });
})
//get book detials for both user and admin
app.get('/book',(req,res)=>{
    const sqlSelect="SELECT * FROM book;"
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
//reports of issued books for admin
app.get('/issuedbookforadmin',(req,res)=>{
    const sqlSelect="SELECT * FROM reports;"
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    });
})
//add new book by admin
app.post('/book',(req,res)=>{
    const sqlInsert="INSERT INTO book (bookid,bookname,title,edition,bookcategory,price,publishing_date,quantity) VALUES (?,?,?,?,?,?,?,?);"
    const bookid=req.body.bookid;
    const bookname=req.body.bookname;
    const title=req.body.title;
    const edition=req.body.edition;
    const bookcategory=req.body.bookcategory;
    const price=req.body.price;
    const quantity=req.body.quantity;
    const publishing_date=req.body.publishing_date;
    console.log('!!!!!!!!!!!1111111',bookcategory)
    db.query(sqlInsert,[bookid,bookname,title,edition,bookcategory,price,publishing_date,quantity],(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('your book inserted successfully');
        }
    })
})
// issue a book by user
app.put('/issue/book',(req,res)=>{
     console.log('enter');
     const bookid=req.body.bookid;
     const sqlSelect="SELECT quantity FROM book WHERE bookid=?;"
     db.query(sqlSelect,[bookid],(err,result)=>{
        if(result[0].quantity>0){
            const issue_date=req.body.issue_date;
            const return_date=req.body.return_date;           
            const email=req.body.email;           
            const sqlInsert="INSERT INTO reports (user_email,issue_date,return_date,bookid) VALUES (?,?,?,?);"
            db.query(sqlInsert,[email,issue_date,return_date,bookid],(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('data inserted into report');
                }
            });
            const sqlUpdate="UPDATE book SET  quantity = ?  WHERE bookid = ?";
            const quantity=result[0].quantity-req.body.quantity;
            db.query(sqlUpdate,[quantity,bookid],(err)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log('your book is issued completly');
                }
            });
        }
    });
     
})
//all issued booklist for user
app.get('/book/issued:email',(req,res)=>{
    const email=req.params.email;
    const sqlSelect=" SELECT DISTINCT b.*,r.* FROM book b,reports r WHERE r.bookid=b.bookid AND ( r.bookid IN (SELECT bookid FROM reports  WHERE user_email= ?) AND r.reg_no IN (SELECT reg_no FROM reports  WHERE user_email= ?));"
    db.query(sqlSelect,[email,email],(err,result)=>{
        res.send(result);
    });
})
//return book by user
app.put('/book/return',(req,res)=>{
    const email=req.body.email;
    const reg_no=req.body.reg_no;
    const sqlDelete="DELETE FROM reports WHERE (reg_no= ? AND user_email =?) ;"
    db.query(sqlDelete,[reg_no,email],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('your book is submited successfully');
        }
    });
})
//update book renue date by user
app.put('/book/renue',(req,res)=>{
    const email=req.body.email;
    const reg_no=req.body.reg_no;
    const renuedate=req.body.newrenudate.fname;

    const sqlUpdate="UPDATE reports SET return_date=?  WHERE (reg_no= ? AND user_email = ?) ;"
    db.query(sqlUpdate,[renuedate,reg_no,email],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('your book return date is successfully updated',renuedate,"...",reg_no,"..",email);
        }
    });
})
//category of books for user
app.post('/user/category',(req,res)=>{
      const sqlSelect='SELECT DISTINCT bookcategory from book;'
      db.query(sqlSelect,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result)
            console.log("category are sent to user");
        }
      })
})
//get book by category
app.post('/getbookbycategory',(req,res)=>{
    const bookcategory=req.body.bookcategory;
    const sqlSelect='SELECT * FROM book WHERE bookcategory= ?;'
    db.query(sqlSelect,bookcategory,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
//get book by id
app.post('/getbookbyid',(req,res)=>{
    const bookid=req.body.bookid;
    const sqlSelect='SELECT * FROM book WHERE bookid= ?;'
    db.query(sqlSelect,bookid,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})
app.get('/latestbook',(req,res)=>{
    const sqlSelect='SELECT * FROM book LIMIT 18;'
    db.query(sqlSelect,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
            res.send(result)
        }
    })
})

//search book by user
app.post('/user/search',(req,res)=>{
    const sqlSelect='SELECT * FROM book WHERE bookcategory = ? AND title = ?;'
    const bookcategory=req.body.bookcategory;
    const auther=req.body.auther;
    const title=req.body.title;
    const language=req.body.language;
    db.query(sqlSelect,[bookcategory,title],(err,result)=>{
       if(err){
           console.log(err)
       }
       else{
           res.send(result)
           console.log('done................................',result,"..",bookcategory,"...",title)
       }
   })
})

// for port
app.listen(3001,()=>{
    console.log('running in 3001.......');
});


  


