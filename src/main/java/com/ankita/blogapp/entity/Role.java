package com.ankita.blogapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Roll")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int rid;
	private String name;
	public int getId() {
		return rid;
	}
	public void setId(int rid) {
		this.rid = rid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Role [id=" + rid + ", name=" + name + "]";
	}
	/**
	 * 
	 */
	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
