import expres from "express";
const router = expres.Router();
import memberContoller from "./controllers/member_controller";

router.get("/", memberContoller.goHome);

router.get("/Login", memberContoller.getLogin);

router.get("/Signup", memberContoller.getSignUp);

export default router;
