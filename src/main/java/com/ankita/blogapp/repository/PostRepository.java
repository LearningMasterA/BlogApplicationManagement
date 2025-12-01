package com.ankita.blogapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ankita.blogapp.entity.Post;

public interface PostRepository extends JpaRepository<Post,Integer> {
	List<Post> findByTitleContainingIgnoreCase(String keyword);
	List<Post> findByCategoryCatId(int categoryId);
	List<Post> findByUserId(int userId);
}
