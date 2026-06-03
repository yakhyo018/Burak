import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput, LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    res.send("Home page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("geLogin");
    res.send("Login page");
  } catch (err) {
    console.log("Error, getLogin", err);
  }
};

restaurantController.getSignUp = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup page");
  } catch (err) {
    console.log("Error, getSignUp", err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log(req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processLogin(input);

    res.send("done");
  } catch (err) {
    console.log("Error, processLogin", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log(1);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    console.log(2);
    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember); //call
    console.log(5);

    res.send(result);
    console.log(6);
  } catch (err) {
    console.log("Error, processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
