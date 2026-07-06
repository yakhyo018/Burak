import expres from "express";
const router = expres.Router();
import memberContoller from "./controllers/member_controller";

router.post("/member/Login", memberContoller.Login);
router.post("/member/Signup", memberContoller.Signup);
router.get("/member/detail", memberContoller.verifyAuth);

/** Product **/

/** Orders **/

export default router;
