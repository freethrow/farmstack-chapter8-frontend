export default async (req, res)=>{
    if (req.method==='GET'){
        const {jwt} = req.cookies;

        if(!jwt){
            res.status(401).end()
            return;
        }

        try {
            const result = await fetch('http://127.0.0.1:8000/users/me', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${jwt}`
                
            }
        })
            const userData = await result.json()            
            res.status(200).json(userData).end()
        } catch (error) {
            res.status(401).end()
            return;
        }      

            
    } else {
        res.setHeader('Allow',['GET'])
        res.status(405).json({message:`Method ${req.method} not allowed`}).end()
    }
}