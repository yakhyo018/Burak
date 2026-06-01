import mongoose, { Schema } from "mongoose";
import { MemberType, MemberStatus } from "../libs/enums/member.enum";

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },

    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPhone: {
      type: String,
      select: false,
      required: true,
    },

    memberPassword: {
      type: String,
      select: false,
      reqired: true,
    },

    memberAddress: {
      type: String,
    },

    memberDesc: {
      type: String,
    },
    memberImage: {
      type: String,
    },

    memberPoints: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }, // updateAt, deleteAt
);

export default mongoose.model("Member", memberSchema);
