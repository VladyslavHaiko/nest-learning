import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type  VerifyCodeDocument = VerifyCode & Document

@Schema()
export class VerifyCode {

  @Prop({ type: Number, required: true })
  code: number;

  @Prop({ type: String, required: true })
  user_id: string;

}

export const VerifyCodeSchema = SchemaFactory.createForClass(VerifyCode);
