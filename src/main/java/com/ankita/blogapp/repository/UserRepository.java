package com.ankita.blogapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ankita.blogapp.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
