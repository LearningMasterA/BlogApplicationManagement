package com.ankita.blogapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ankita.blogapp.dto.PostDto;
import com.ankita.blogapp.entity.Category;
import com.ankita.blogapp.entity.Post;
import com.ankita.blogapp.entity.User;
import com.ankita.blogapp.repository.CategoryRepository;
import com.ankita.blogapp.repository.PostRepository;
import com.ankita.blogapp.repository.UserRepository;
import com.ankita.blogapp.service.PostService;

@Service
public class PostServiceImpl implements PostService{
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PostRepository postRepo;
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	private Post convertToEntity(PostDto postDto) {
		Post post=new Post();
		post.setPid(postDto.getPid());
		post.setTitle(postDto.getTitle());
		post.setContent(postDto.getContent());
		post.setImage(postDto.getImage());
		
//		Fetch data from DB
		User user=userRepo.findById(postDto.getUserId()).orElseThrow(()-> new RuntimeException("User not found"));
		Category category=categoryRepo.findById(postDto.getCategoryId()).orElseThrow(()-> new RuntimeException("Category not found"));
		post.setUser(user);
		post.setCategory(category);
		return post;
	}
	
	
	private PostDto convertToDto(Post post) {
		PostDto postDto=new PostDto();
		postDto.setPid(post.getPid());
		postDto.setTitle(post.getTitle());
		postDto.setContent(post.getTitle());
		postDto.setImage(post.getImage());
		postDto.setUserId(post.getUser().getId());
		postDto.setCategoryId(post.getCategory().getCatId());
		return postDto;
	}

	@Override
	public PostDto createPost(PostDto postDto) {
		// TODO Auto-generated method stub
		Post post=convertToEntity(postDto);
		post=postRepo.save(post);
		return convertToDto(post);
	}

	@Override
	public List<PostDto> getAllPosts() {
		// TODO Auto-generated method stub
		List<PostDto> list = postRepo.findAll().stream().map(this::convertToDto).toList();
		return list;
	}

	@Override
	public PostDto getPostById(int id) {
		// TODO Auto-generated method stub
		Post post=postRepo.findById(id).orElseThrow(()-> new RuntimeException("Post not found"));
		return convertToDto(post);
	}

	@Override
	public PostDto updatePost(int id, PostDto postDto) {
		Post post=postRepo.findById(id).orElseThrow(()-> new RuntimeException("Post not found"));
		post.setTitle(postDto.getTitle());
		post.setContent(postDto.getContent());
		post.setImage(postDto.getImage());
		
//		Fetch data from DB
		User user=userRepo.findById(postDto.getUserId()).orElseThrow(()-> new RuntimeException("User not found"));
		Category category=categoryRepo.findById(postDto.getCategoryId()).orElseThrow(()-> new RuntimeException("Category not found"));
		post.setUser(user);
		post.setCategory(category);
		Post updated=postRepo.save(post);
		return convertToDto(updated);
	}

	@Override
	public void deletePost(int id) {
		// TODO Auto-generated method stub
		postRepo.deleteById(id);
		
	}

}
