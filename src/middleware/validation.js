
// error related with key 
const dataMethods = [ 'query' ,'body' , 'params', 'headers']; 

const validation = (schema)=>{
     return(req, res, next)=>{
    const validationErr = [] 

    dataMethods.forEach(key => {
        if (schema[key]){
            const validationResult = schema[key].validate(req.body , {abortEarly:false});
        if(validationResult.error){
            validationErr.push(validationResult.error.details)
        }
        }
        
    });

    if(validationErr.length > 0){
        return res.json({message:"validation error" , validationErr })

    }
   
    return next()
}
  
}

export default validation