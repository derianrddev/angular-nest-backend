import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
  @Prop({ required: true })
  name: string;
  @Prop({ unique: true, required: true })
  email: string;
  @Prop({ minlength: 6, required: true })
  password?: string;
  @Prop({ default: true })
  isActive: string;
  @Prop({ type: [String], default: ['user'] })
  roles: string[];
}


export const UserSchema = SchemaFactory.createForClass(User);