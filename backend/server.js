const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const puppeteer = require('puppeteer');

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "recipes"
})


app.get('/', (re, res) =>{
    return res.json("From backend Side")
})

app.get("/Users",(re,res) =>{
    const sql = "SELECT * FROM Users"
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data)
    })
})


// API endpoint to get data by ID
app.get('/Users/:id', (req, res) => {
    const id = req.params.id;
  
    const query = 'SELECT * FROM Users WHERE id = '+id;
  
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error retrieving data by ID:', err);
        return res.status(500).json({ error: 'Failed to retrieve data' });
      }
  
      if (result.length === 0) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      const data = result[0];
      res.status(200).json(data);
    });
  });


  app.post('/addUser', (req, res) => {
    //console.log(req)
    
    console.log(req.body)
    const { title, ingredients, steps, servings, bakingTime, AddInfo } = req.body;
    
    console.log(title, ingredients, steps, servings, bakingTime, AddInfo )
    
    const insertQuery = 'INSERT INTO Users (title, ingredient, instructions, servings, bakingTime, addInfo) VALUES (\"'+title+'\",\"'+ingredients+'\",\"'+steps+'\",'+ servings+',\"'+ bakingTime +'\",\"'+ AddInfo+'\")';

    console.log(insertQuery);
  /*
    pool.getConnection((err, connection) => {
        
      if (err) {
        console.error('Error getting database connection: ', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
  */
      db.query(insertQuery, [title, ingredients, steps], (error, results) => {
       // connection.release(); // Release the connection back to the pool.
  
        if (error) {
          console.error('Error inserting data: ', error);
          res.status(500).json({ error: 'Internal Server Error' });
          return;
        }
  
        res.status(201).json({ message: 'User added successfully' });
      });
    });
 // });
  
 app.get('/generate-pdf', async (req, res) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = `
      <html>
        <head>
          <title>Recipe PDF</title>
        </head>
        <body>
          <h1>Your Recipe</h1>
          <!-- Insert your recipe content here -->
        </body>
      </html>
    `;

    await page.setContent(content);
    const pdfBuffer = await page.pdf({ format: 'A4' });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=recipe.pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while generating the PDF');
  }
});




app.listen(8081, () =>{
    console.log("listening")
})