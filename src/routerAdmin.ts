import expres from "express";
const routerAdmin = expres.Router();
import restaurantContoller from "./controllers/restaurant_controller";

routerAdmin.get("/", restaurantContoller.goHome);

routerAdmin.get("/Login", restaurantContoller.getLogin);

routerAdmin.get("/Signup", restaurantContoller.getSignUp);

export default routerAdmin;
