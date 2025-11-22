package com.ankita.blogapp.service;

import java.util.List;

import com.ankita.blogapp.dto.UserDto;

public interface UserService {
	 UserDto getUserById(int id);
    List<UserDto> getAllUsers();
}
