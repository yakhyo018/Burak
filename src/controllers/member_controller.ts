import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Errors";

const memberService = new MemberService();

const memberContoller: T = {};
memberContoller.Signup = async (req: Request, res: Response) => {
  try {
    console.log("Signup");
    const input: MemberInput = req.body,
      result: Member = await memberService.Signup(input); //call
    // TODO: Tokens
    res.json({ member: result });
  } catch (err) {
    console.log("Error, Signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standards.code).json(Errors.standards);
  }
};

memberContoller.Login = async (req: Request, res: Response) => {
  try {
    console.log("Login");
    const input: LoginInput = req.body,
      result = await memberService.Login(input);
    // TODO: Tokens
    res.json({ member: result });
  } catch (err) {
    console.log("Error, Login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standards.code).json(Errors.standards);
  }
};

export default memberContoller;
