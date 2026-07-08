import expres from "express";
const router = expres.Router();
import memberContoller from "./controllers/member_controller";
import makeUploader from "./libs/utils/uploader";

/** Member **/
router.get("/member/restaurant", memberContoller.getRestaurant);
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
router.post(
  "/member/update",
  memberContoller.verifyAuth,
  makeUploader("members").single("memberImage"),
  memberContoller.updateMember,
);
router.get("/member/top-users", memberContoller.getTopUSers);

/** Product **/

/** Orders **/

export default router;
