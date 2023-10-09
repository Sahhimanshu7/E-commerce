const ReviewComments = require('../Models/ReviewComments');
const UserInformation = require('../Models/UserInformation');


// upload a comment
const uploadComment = async(req,res) =>{
    try {
        const newComment = new ReviewComments({
            productID:req.body.productID,
            commenterID:req.body.commenterID,
            hasParent:req.body.hasPArent,
            parentCommentID:req.body.parentCommentID,
            likes:req.body.likes,
            description:req.body.description
        });
        await newComment.save();
        res.status(200).json("Comment uploaded!");
    } catch (error) {
        res.status(500).json(error);
    }
};

// delete a comment
const deleteComment = async(req,res) =>{
    const commentID = req.params.id;
    try {
        await ReviewComments.findByIdAndDelete(commentID);
        res.status(200).json("Comment deleted");
    } catch (error) {
        res.status(500).json(error);
    }
}

// like a comment
const likeComment = async(req,res) =>{
    const commentID = req.params.id;
    try{
        await ReviewComments.findByIdAndUpdate(commentID, { likes: req.body.likes });
        res.status(200).json("Like added!");
    }catch(error){
        res.status(500).json(error);
    }
}

// Remove a like
const removeLikeComment = async(req,res) =>{
    const commentID = req.params.id;
    try{
        await ReviewComments.findByIdAndUpdate(commentID, { likes: req.body.likes });
        res.status(200).json("Like removed!");
    }catch(error){
        res.status(500).json(error);
    }
}

// Add to user
const addToUser = async(req,res) =>{
    const userID = req.params.id;
    const commentID = req.params.commentID;
    try {
        await UserInformation.findByIdAndUpdate(userID, {$push:{reviews: commentID}});
        res.status(200).json("Review Added!");
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { uploadComment,
                deleteComment,
                likeComment,
                removeLikeComment }