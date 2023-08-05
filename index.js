// Import the required modules
const express = require('express');
const multer = require('multer');

// Create an instance of Express
const app = express();

// Set up the storage for the uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the directory where the files will be stored
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Generate a unique filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer middleware to handle multiple file uploads
const uploadMultiple = multer({ storage: storage }).array('files', 5);

// Define the route to handle the file uploads
app.post('/upload-multiple', (req, res) => {
  uploadMultiple(req, res, (err) => {
    if (err) {
      // Error occurred during file upload
      return res.status(500).json({ message: 'Error uploading files' });
    }
    // Files have been uploaded successfully
    const filenames = req.files.map((file) => file.filename);
    res.json({ message: 'Files uploaded successfully', filenames: filenames });
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
