import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../model/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/CreateUserDto.dto';
import { UpdateUserDto } from '../dto/UpdateUserDto.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  create(dto: CreateUserDto) {
    return this.userModel.create(dto);
  }

  getUser(id: string) {
    return this.userModel.findById(id);
  }

  removeUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  updateUser(id: string, dto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, dto);
  }

  getAllUser() {
    return this.userModel.find();
  }
}
