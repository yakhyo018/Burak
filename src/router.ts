import expres from "express";
const router = expres.Router();
import memberContoller from "./controllers/member_controller";

router.post("/Login", memberContoller.Login);

router.post("/Signup", memberContoller.Signup);

export default router;
