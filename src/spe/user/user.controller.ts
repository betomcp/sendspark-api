import {
  Controller,
  Post,
  Body,
  Delete,
  UseGuards,
  Request,
  Get,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/resource/rs-users/dto/create-user.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiQuery({ name: 'skip', required: false })
  @ApiQuery({ name: 'take', required: false })
  @ApiQuery({ name: 'jobTitle', required: false })
  @ApiQuery({ name: 'company', required: false })
  @Get('/find-all')
  findAll(
    @Query('skip') skip?: string,
    @Query('take') take?: string,
    @Query('jobTitle') jobTitle?: string,
    @Query('company') company?: string,
  ) {
    return this.userService.findAll(+skip, +take, jobTitle, company);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('/delete')
  delete(@Request() req: any) {
    return this.userService.delete(req.user._id);
  }
}
