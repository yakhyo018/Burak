import { ObjectId, Types } from "mongoose";
import { ViewGroup } from "../enums/view.enum";

export interface View {
  _id: Types.ObjectId;
  viewGroup: ViewGroup;
  memberId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface ViewInput {
  memberId: ObjectId;
  viewRefId: ObjectId;
  viewGroup: ViewGroup;
}
