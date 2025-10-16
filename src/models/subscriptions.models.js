import mongoose from "mongoose";
import { User } from "./user.models";

const subscriptionsSchema = new mongoose.Schema(
  {
    subscriber: {
      type: mongoose.Schema.types.ObjectId,
      ref: User,
    },
    channel: {
      type: mongoose.Schema.types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

export const subscription = mongoose.model("Subscription", subscriptionsSchema);
