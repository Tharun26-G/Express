import express from 'express';  
import multer from 'multer';

export const storage = multer.diskStorage({
    destination: 'uploads'
    //file name
    , filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname); // appending timestamp to the original file name
        }
});