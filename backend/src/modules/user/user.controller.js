import CustomError from "../../../helper/customError.js";
import userService from "./user.service.js";

class UserController {

  async signup(req, res , next ) {

    try {

      const response = await userService.signup(req.body);
      return res.status(response.status).json(response);

    } catch (error) {

      next(new CustomError(error.status,error.message,error.data));

    }
  }

  async login(req,res,next){

    try{

      const response = await userService.login(req.body);
      return res.status(response.status).json(response);

    }catch(error){
      console.log(error);
      next(new CustomError(error.status,error.message,error.data));
    
    }
  }

}

export default new UserController();
