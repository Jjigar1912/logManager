import dbConfig from "../../../config/DB-Config.js";
import CustomError from "../../../helper/customError.js";
import userDal from "./user.dal.js";
import jwt from 'jsonwebtoken';
import env from "../../../env.js";
import bcrypt from 'bcryptjs';

class userService {

    async generateToken(data){
        
        try{
        
            const token = jwt.sign(data,env.JWT_KEY,{ expiresIn : '15m' });
            const refreshToken = jwt.sign(data,env.REFRESH_KEY,{ expiresIn : '1d' });
            return { token , refreshToken } ;
        
        }catch(error){
        
            console.log(error);
            throw new CustomError(500,'Error Occured While Generating Token.',null);
        
        }
    
    }

    async signup(user) {
    
        let client = null ;
    
        try{
    
            client = await dbConfig.connect();
            
            if(user.password){
    
                user.password = await bcrypt.hash(user.password,10);                   
    
            }
    
            const keys = Object.keys(user);
            const values = Object.values(user);
            const result = await userDal.signup(client,keys,values);
            const { token , refreshToken } = await this.generateToken({ id : result.id , email : result.email });
    
            const response = {
    
                status : 201 , 
                message : 'User Created Successfully.' , 
                data : {
                    id : result.id ,
                    accessToken : token , 
                    refreshToken 
                } 
    
            };

            return response;
        
        }catch(error){
    
            throw error ;
    
        }finally{
    
            client.release();
    
        }
    
    }



    async login(user){

        let client = null ; 

        try{

            client = await dbConfig.connect();
            const foundUser = await userDal.getUserByUsername(client,user.username);
            if(foundUser){
                const loggedInUser = await bcrypt.compare(user.password,foundUser.password);
                if(loggedInUser){
                    const { token , refreshToken } = await this.generateToken({ id : foundUser.id , email : foundUser.email });
                    const response = {
                        status : 200 , 
                        message : 'Login Successfully Done !!' , 
                        data : {
                            accessToken : token , 
                            refreshToken 
                        }
                    }    
                    return response ;
                }else{
                    throw new CustomError(401,'UNAUTHORIZED','Invalid Username And Password.');
                }
            }else{

                throw new CustomError(404,'NOT FOUND','Invalid Username');
            
            }

        }catch(error){

            throw error ;
        
        }finally{
            client.release();
        }
    }

}

export default new userService();