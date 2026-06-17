import expres from "express";
const routerAdmin = expres.Router();
import restaurantContoller from "./controllers/restaurant_controller";
import productController from "./controllers/product_controller";
import makeUploader from "./libs/utils/uploader";
import restaurantController from "./controllers/restaurant_controller";

/** Restaurant  */
routerAdmin.get("/", restaurantContoller.goHome);
routerAdmin
  .get("/signup", restaurantContoller.getSignUp)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantContoller.processSignup,
  );

routerAdmin
  .get("/login", restaurantContoller.getLogin)
  .post("/login", restaurantContoller.processLogin);

routerAdmin.get("/logout", restaurantContoller.logout);
routerAdmin.get("/check-me", restaurantContoller.testAuthSession);

/** Product */
routerAdmin.get(
  "/product/all",
  restaurantContoller.verifyRestaurant,
  productController.getAllProducts,
);
routerAdmin.post(
  "/product/create",
  restaurantContoller.verifyRestaurant,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct,
);
routerAdmin.post(
  "/product/:id",
  restaurantContoller.verifyRestaurant,
  productController.updateChosenProduct,
);

/** User */
routerAdmin.get(
  "/user/all",
  restaurantContoller.verifyRestaurant,
  restaurantController.getUsers,
);
routerAdmin.post(
  "/user/edit",
  restaurantContoller.verifyRestaurant,
  restaurantController.updateChosenUser,
);

export default routerAdmin;
