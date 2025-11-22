package com.ankita.blogapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.service.annotation.DeleteExchange;

import com.ankita.blogapp.dto.PostDto;
import com.ankita.blogapp.entity.Post;
import com.ankita.blogapp.service.PostService;

@RestController
@RequestMapping("/api/posts")
public class PostController {
	@Autowired
	private PostService postService;
	
	@PostMapping
	public ResponseEntity<PostDto> createPost(@RequestBody PostDto postDto){
		PostDto createdPost=postService.createPost(postDto);
		return ResponseEntity.ok(createdPost);
	}
	
	@GetMapping
	public ResponseEntity<List<PostDto>> getAllPosts(){
		return ResponseEntity.ok(postService.getAllPosts());
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<PostDto> getPostById(@PathVariable int id){
		return ResponseEntity.ok(postService.getPostById(id));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<PostDto> updatePost(@PathVariable int id,@RequestBody PostDto postDto){
		return ResponseEntity.ok(postService.updatePost(id, postDto));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deletePost(@PathVariable int id){
		postService.deletePost(id);
		return ResponseEntity.ok("Post Deleted Successfully");
	}

}
