const express = require('express');
const router = express.Router();
const reviewServices = require('../Services/reviewServices');

// uploading a comment
router.post('/upload/comment/', function(req,res){
    reviewServices.uploadComment(req,res);
});

// delete a comment
router.delete('/delete/comment/:id', function(req,res){
    reviewServices.deleteComment(req,res);
});

// like a comment
router.put('/like/comment/:id', function(req,res){
    reviewServices.likeComment(req,res);
});

// remove a like
router.put('/unlike/comment/:id', function(req,res){
    reviewServices.removeLikeComment(req,res);
});

// Add into user's profile
router.put('addToUser/comment/:id/:commentID/', function(req,res){
    reviewServices.addToUser(req,res);
})

module.exports = router;