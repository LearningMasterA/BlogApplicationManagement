package com.ankita.blogapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ankita.blogapp.dto.CommentDto;
import com.ankita.blogapp.service.CommentService;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
	
	@Autowired
	private CommentService commService;
	
	@PostMapping
	public ResponseEntity<CommentDto> addComment(@RequestBody CommentDto dto){
		return ResponseEntity.ok(commService.addComment(dto));
	}
	
	@GetMapping("/{postId}")
	public ResponseEntity<List<CommentDto>> getComments(@PathVariable int postId){
		return ResponseEntity.ok(commService.getCommentsByPost(postId));
	}
	
	@DeleteMapping("/{cId}")
	public ResponseEntity<String> deleteComment(@PathVariable int cId){
		commService.deleteComment(cId);
		return ResponseEntity.ok("Comment Deleted");
	}
}
