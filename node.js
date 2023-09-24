const mysql = require('mysql2');

// Database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'msl',
  password: 'hate',
  database: 'loginsystem'
};

// Create a connection to the database
const connection = mysql.createConnection(dbConfig);

// Attempt to connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Close the database connection when done
connection.end();
