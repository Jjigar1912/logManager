import CustomError from "../../../helper/customError.js";

class userDal {
    
    async signup(client,userKeys,userValues){
    
        try{
    
            let index = 0 ; 
            const keys = userKeys.map((element)=>JSON.stringify(element));
            const values = userValues.map( () => `$${++index}` );
            const query = `INSERT INTO "users"(${keys.join(',')}) VALUES(${values.join(',')}) RETURNING *`;
            const result = await client.query(query,userValues);
            return result.rows[0];
        
        }catch(error){
        
            console.log(error);
        
            if(error.code == 23505){
                throw new CustomError(409,'CONFLICT',error.detail);
            }
        
            throw error ; 
        
        }
    }


    async getUserByUsername(client,username){

        try{

            const query = 'SELECT * FROM "users" WHERE "username" = $1' ;
            const result = await client.query(query,[username]);
            return result.rows[0];

        }catch(error){

            console.log(error);
            
            throw error ;

        }
    }
}

export default new userDal() ;