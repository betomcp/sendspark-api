import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class RsUsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  findAll(skip: number, take: number, jobTitle?: string, companyName?: string) {
    const query = { jobTitle: undefined, companyName: undefined };
    if (jobTitle) query.jobTitle = jobTitle;
    if (companyName) query.jobTitle = companyName;
    return this.userModel.find(query).skip(skip).limit(take);
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ workEmail: email }).lean().exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findOneAndUpdate({ _id: id }, updateUserDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}
