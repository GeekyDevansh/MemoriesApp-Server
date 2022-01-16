import mongoose from "mongoose";

// Schema define karo database me data feed karne k liye

const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    //[String] isliye likha hai kyunki arrays of string lenge (more than 1 value in string datatype) 
    tags : [String], 
    selectedFile : String,
    likeCount : {
        type : Number,  //Object isliye banaya hai kyunki default property bhi deni hai
        default :0
    },
    createdAt : {
        type : Date,
        default: new Date()
    },
});

//postSchema ka model banaya aur fir export krdiya

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;