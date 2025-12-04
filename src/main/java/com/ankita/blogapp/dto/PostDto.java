package com.ankita.blogapp.dto;

public class PostDto {
	private int pid;
	private String title;
	private String content;
	private String image;
	private int userId;
	private int categoryId;
	private String username;
	
	
	
	/**
	 * 
	 */
	public PostDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param pid
	 * @param title
	 * @param content
	 * @param image
	 * @param userId
	 * @param categoryId
	 */
	public PostDto(int pid, String title, String content, String image, int userId, int categoryId,String username) {
		super();
		this.pid = pid;
		this.title = title;
		this.content = content;
		this.image = image;
		this.userId = userId;
		this.categoryId = categoryId;
		this.username=username;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "PostDto [pid=" + pid + ", title=" + title + ", content=" + content + ", image=" + image + ", userId="
				+ userId + ", categoryId=" + categoryId + ", username=" + username + "]";
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	
	

}
