import expres from "express";
const routerAdmin = expres.Router();
import restaurantContoller from "./controllers/restaurant_controller";

routerAdmin.get("/", restaurantContoller.goHome);

routerAdmin
  .get("/Login", restaurantContoller.getLogin)
  .post("/Login", restaurantContoller.processLogin);

routerAdmin
  .get("/Signup", restaurantContoller.getSignUp)
  .post("/Signup", restaurantContoller.processSignup);

/** Product */
/** User */

export default routerAdmin;
