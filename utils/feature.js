

const messageHandler = (res,StatusCode,message)=>{
return res.status(StatusCode).json({message:message});



};


export default messageHandler;