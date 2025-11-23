package com.ankita.blogapp.dto;

public class RegisterDto {
	private String username;
	private String email;
	private String password;
	
	
	public RegisterDto(String username, String email, String password) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
	}
	/**
	 * 
	 */
	public RegisterDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "RegisterDto [userName=" + username + ", email=" + email + ", password=" + password + "]";
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

}
