import expres from "express";
const routerAdmin = expres.Router();
import restaurantContoller from "./controllers/restaurant_controller";

routerAdmin.get("/", restaurantContoller.goHome);

routerAdmin
  .get("/signup", restaurantContoller.getSignUp)
  .post("/signup", restaurantContoller.processSignup);

routerAdmin
  .get("/login", restaurantContoller.getLogin)
  .post("/login", restaurantContoller.processLogin);

routerAdmin.get("/logout", restaurantContoller.logout);
routerAdmin.get("/check-me", restaurantContoller.testAuthSession);

/** Product */
/** User */

export default routerAdmin;
