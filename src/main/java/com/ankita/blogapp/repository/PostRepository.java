package com.ankita.blogapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ankita.blogapp.entity.Post;

public interface PostRepository extends JpaRepository<Post,Integer> {

}
