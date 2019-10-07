

var mongoose=require('mongoose');
var bcrypt= require('bcrypt');


 var userSchema=new mongoose.Schema(
     { 
     
        firstName: String,
        lastName:String,
        userName: String,
        email:{
            type:String,
            unique:true,
            required:true,
            trim:true
        },
      
        password:{
            type:String,
            required:true
        },
        
        date : { type: Date, default: Date.now },

       // photo:  { data: Buffer, contentType: String },
         role : { type: String,
             enum: ['Admin', 'User'],
              default: "User" },
     });

     // hashing a password before saving it ot the database
     userSchema.pre('save',function(next){
         var user = this;
         bcrypt.hash(user.password,10, function(err,hash){
             if(err){
                 return next(err);
             }
             user.password=hash;
             next();
         })

     })
   
module.exports=mongoose.model('User',userSchema);

