package com.ankita.blogapp.service;

import java.util.List;

import com.ankita.blogapp.dto.CommentDto;

public interface CommentService {
	CommentDto addComment(CommentDto dto);
	List<CommentDto> getCommentsByPost(int postId);
    void deleteComment(int cid);

}
