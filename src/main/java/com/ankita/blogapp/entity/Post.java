package com.ankita.blogapp.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Post")
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int pid;
	private String title;
	private String content;
	private String image;
	private LocalDateTime createAt=LocalDateTime.now();
	@ManyToOne
	@JoinColumn(name = "id")
	private User user;
	@ManyToOne
	@JoinColumn(name = "catId")
	private Category category;
	
	@OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
	private List<Comment> comments;
	/**
	 * 
	 */
	public Post() {
		super();
		// TODO Auto-generated constructor stub
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
	public LocalDateTime getCreateAt() {
		return createAt;
	}
	public void setCreateAt(LocalDateTime createAt) {
		this.createAt = createAt;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "Post [pid=" + pid + ", title=" + title + ", content=" + content + ", image=" + image + ", createAt="
				+ createAt + ", author=" + user + ", category=" + category + ", comments=" + comments + "]";
	}
	public Post(int pid, String title, String content, String image, LocalDateTime createAt, User user,
			Category category, List<Comment> comments) {
		super();
		this.pid = pid;
		this.title = title;
		this.content = content;
		this.image = image;
		this.createAt = createAt;
		this.user = user;
		this.category = category;
		this.comments = comments;
	}
	public List<Comment> getComments() {
		return comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	

}
