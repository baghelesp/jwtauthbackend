const mongooose= require("mongoose");

module.exports=()=>{
    const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology:true,
    };
    try{
        mongooose.connect("mongodb+srv://bagheleshivam2002:bagheleshivam@cluster0.re3pjch.mongodb.net/?retryWrites=true&w=majority", connectionParams);
        console.log("Connected to database successfully|");
    }catch(error)
    {
        console.log(error);
        console.log("couldnt connect to DB");
    }
}
//process.env.DB