package com.ankita.blogapp.dto;

public class UserDto {
	private int id;
    private String username;
    private String email;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "UserDto [id=" + id + ", username=" + username + ", email=" + email + "]";
	}
	/**
	 * @param id
	 * @param username
	 * @param email
	 */
	public UserDto(int id, String username, String email) {
		super();
		this.id = id;
		this.username = username;
		this.email = email;
	}
	/**
	 * 
	 */
	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}

}
