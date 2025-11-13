package com.ankita.blogapp.entity;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int catId;
	private String name;
	private String description;
	@OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
	private List<Post> posts;
	
	
	/**
	 * 
	 */
	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param catId
	 * @param name
	 * @param description
	 * @param posts
	 */
	public Category(int catId, String name, String description, List<Post> posts) {
		super();
		this.catId = catId;
		this.name = name;
		this.description = description;
		this.posts = posts;
	}
	@Override
	public String toString() {
		return "Category [catId=" + catId + ", name=" + name + ", description=" + description + ", posts=" + posts
				+ "]";
	}
	public int getCatId() {
		return catId;
	}
	public void setCatId(int catId) {
		this.catId = catId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public List<Post> getPosts() {
		return posts;
	}
	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}
	

}
