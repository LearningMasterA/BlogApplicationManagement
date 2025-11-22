package com.ankita.blogapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ankita.blogapp.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{

}
