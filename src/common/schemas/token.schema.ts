import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';

export type  TokenDocument = Token & Document

@Schema()
export class Token {

  @Prop({ type: String, required: true })
  access_token: string;

  @Prop({ type: String, required: true })
  refresh_token: string;

  @Prop({ type: String, required: false })
  user_id: string;
}

export const TokenSchema = SchemaFactory.createForClass(Token);
