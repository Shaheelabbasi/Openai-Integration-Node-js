
import OpenAI from "openai";
const CreateChat=async(req,res)=>{
  const{prompt}=req.body;
    const openai = new OpenAI(
        {
           apiKey:process.env.OPEN_AI_APIKEY,
           organization:"org-zAxiJOqxi8QHMgAdNyojP4jT"
        }
    );
    
   
   
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." },
                  {role:"user",content:prompt}
        ], 
        model: 'gpt-4o-mini',
      });
    
      console.log(completion.choices[0].message.content);
    
    
    
}


export default CreateChat;