import expres from "express";
const router = expres.Router();
import memberContoller from "./controllers/member_controller";

router.post("/member/Login", memberContoller.Login);
router.post("/member/Signup", memberContoller.Signup);
router.post(
  "/member/Logout",
  memberContoller.verifyAuth,
  memberContoller.logout,
);
router.get(
  "/member/detail",
  memberContoller.verifyAuth,
  memberContoller.getMemberDetail,
);

/** Product **/

/** Orders **/

export default router;
