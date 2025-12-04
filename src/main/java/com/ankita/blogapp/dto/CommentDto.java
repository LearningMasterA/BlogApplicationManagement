package com.ankita.blogapp.dto;

public class CommentDto {
	private int cid;
	private String content;
	private int userId;
	private int postId;
	private String username;
	private String createAt;
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getPostId() {
		return postId;
	}
	public void setPostId(int postId) {
		this.postId = postId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getCreateAt() {
		return createAt;
	}
	public void setCreateAt(String createAt) {
		this.createAt = createAt;
	}
	@Override
	public String toString() {
		return "CommentDto [cid=" + cid + ", content=" + content + ", userId=" + userId + ", postId=" + postId
				+ ", username=" + username + ", createAt=" + createAt + "]";
	}
	/**
	 * 
	 */
	public CommentDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param cid
	 * @param content
	 * @param userId
	 * @param postId
	 * @param username
	 * @param createAt
	 */
	public CommentDto(int cid, String content, int userId, int postId, String username, String createAt) {
		super();
		this.cid = cid;
		this.content = content;
		this.userId = userId;
		this.postId = postId;
		this.username = username;
		this.createAt = createAt;
	}
	
	
}
