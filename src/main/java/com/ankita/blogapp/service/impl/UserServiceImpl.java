package com.ankita.blogapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ankita.blogapp.dto.UserDto;
import com.ankita.blogapp.entity.User;
import com.ankita.blogapp.repository.UserRepository;
import com.ankita.blogapp.service.UserService;

public class UserServiceImpl implements UserService{
	 @Autowired
	    private UserRepository userRepo;

	    private UserDto convertToDto(User user) {
	        UserDto dto = new UserDto();
	        dto.setId(user.getId());
	        dto.setUsername(user.getUsername());
	        dto.setEmail(user.getEmail());
	        return dto;
	    }

	    @Override
	    public UserDto getUserById(int id) {
	        User user = userRepo.findById(id)
	                .orElseThrow(() -> new RuntimeException("User not found"));
	        return convertToDto(user);
	    }


	@Override
	public List<UserDto> getAllUsers() {
		return userRepo.findAll()
                .stream().map(this::convertToDto)
                .toList();
	}

}
