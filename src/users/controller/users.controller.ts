import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { CreateUserDto } from '../dto/CreateUserDto.dto';
import { UpdateUserDto } from '../dto/UpdateUserDto.dto';

@Controller()
export class UsersController {
  constructor(private readonly appService: UsersService) {
  }

  @Post()
  createUser(@Body() dto: CreateUserDto) {
    return this.appService.create(dto);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.appService.getUser(id);
  }
  @Get()
  getAllUser() {
    return this.appService.getAllUser();
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.appService.updateUser(id,dto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.appService.removeUser(id);
  }
}
