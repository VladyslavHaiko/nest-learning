import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type  UserDocument = User & Document

@Schema()
export class User {

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Number, required: false })
  age: number;

  @Prop({ type: Boolean, required: false, default: false })
  activated: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
