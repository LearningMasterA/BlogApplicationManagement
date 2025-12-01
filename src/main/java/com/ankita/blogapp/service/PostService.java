package com.ankita.blogapp.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ankita.blogapp.dto.PostDto;
import com.ankita.blogapp.entity.Post;

public interface PostService{
	PostDto createPost(PostDto post);
	List<PostDto> getAllPosts();
	PostDto getPostById(int id);
	PostDto updatePost(int id,PostDto postDto);
	void deletePost(int id);
	Page<PostDto> getAllPosts(int page,int size,String sortBy);
	List<PostDto> searchPosts(String Keyword);
	List<PostDto> getPostsByCategory(int categoryId);
	List<PostDto> getPostsByUser(int userId);

}
