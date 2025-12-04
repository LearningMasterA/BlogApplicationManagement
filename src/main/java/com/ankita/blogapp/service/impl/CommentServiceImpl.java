package com.ankita.blogapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ankita.blogapp.dto.CommentDto;
import com.ankita.blogapp.entity.Comment;
import com.ankita.blogapp.entity.Post;
import com.ankita.blogapp.entity.User;
import com.ankita.blogapp.repository.CommentRepository;
import com.ankita.blogapp.repository.PostRepository;
import com.ankita.blogapp.repository.UserRepository;
import com.ankita.blogapp.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService{
	@Autowired
	private CommentRepository commentRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private PostRepository postRepo;

	@Override
	public CommentDto addComment(CommentDto dto) {
		Comment comment=new Comment();
		comment.setContent(dto.getContent());
		User user=userRepo.findById(dto.getUserId())
				.orElseThrow(()->new RuntimeException("User not found"));
		Post post=postRepo.findById(dto.getPostId())
				.orElseThrow(()->new RuntimeException("Post not found"));
		comment.setUser(user);
		comment.setPost(post);
		Comment saved=commentRepo.save(comment);
		CommentDto res=new CommentDto();
		res.setCid(saved.getCid());
		res.setContent(saved.getContent());
		res.setUserId(user.getId());
		res.setPostId(post.getPid());
		res.setUsername(user.getUsername());
		res.setCreateAt(saved.getCreateAt().toString());
		return res;
	}

	@Override
	public List<CommentDto> getCommentsByPost(int postId) {
		return commentRepo.findByPostPid(postId)
				.stream()
				.map(c->{
					CommentDto d=new CommentDto();
					d.setCid(c.getCid());
					d.setContent(c.getContent());
					d.setUserId(c.getUser().getId());
					d.setPostId(postId);
					d.setUsername(c.getUser().getUsername());
					d.setCreateAt(c.getCreateAt().toString());
					return d;
				}).toList();
	}

	@Override
	public void deleteComment(int cid) {
		// TODO Auto-generated method stub
		commentRepo.deleteById(cid);
	}

}
