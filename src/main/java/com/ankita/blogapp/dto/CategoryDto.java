package com.ankita.blogapp.dto;

public class CategoryDto {
	private int catId;
	private String name;
	private String description;
	public int getCatId() {
		return catId;
	}
	public void setCatId(int catId) {
		this.catId = catId;
	}
	public String getName() {
		return name;
	}
	/**
	 * 
	 */
	public CategoryDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	/**
	 * @param catId
	 * @param name
	 * @param description
	 */
	public CategoryDto(int catId, String name, String description) {
		super();
		this.catId = catId;
		this.name = name;
		this.description = description;
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
}
