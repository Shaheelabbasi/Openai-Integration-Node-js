import 'dotenv/config'
import app from "./app.js";



app.listen(process.env.PORT || 8000,()=>console.log(`Server is running on the port ${process.env.PORT}`))