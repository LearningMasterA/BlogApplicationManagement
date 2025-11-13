package com.ankita.blogapp.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Comment")
public class Comment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cid;
	@Override
	public String toString() {
		return "Comment [cid=" + cid + ", content=" + content + ", createAt=" + createAt + ", user=" + user + ", post="
				+ post + "]";
	}
	private String content;
	private LocalDateTime createAt=LocalDateTime.now();
	@ManyToOne
	private User user;
	@ManyToOne
	@JoinColumn(name="pid")
	private Post post;
	/**
	 * 
	 */
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param cid
	 * @param content
	 * @param createAt
	 * @param user
	 * @param post
	 */
	public Comment(int cid, String content, LocalDateTime createAt, User user, Post post) {
		super();
		this.cid = cid;
		this.content = content;
		this.createAt = createAt;
		this.user = user;
		this.post = post;
	}
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
	public Post getPost() {
		return post;
	}
	public void setPost(Post post) {
		this.post = post;
	}

}
