


export const asyncHandler = (fn)=>{
    return (req, res, next) =>{
        fn(req, res, next).catch(error=>{
        return next(new Error(error, "Catch error"))
        })
    }
}


export const globalErrorHandling = (err, req, res, next)=>{ 
    if (err){
        return res.json({message: err.message})
    }
}

 