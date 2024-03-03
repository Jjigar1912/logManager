class UserController {
  async signup(req, res) {
    try {
      return res.status(200).json('Done');
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
}

export default new UserController();
