package com.ankita.blogapp.service;

import java.util.List;

import com.ankita.blogapp.dto.CategoryDto;

public interface CategoryService {
	 CategoryDto createCategory(CategoryDto categoryDto);
	    CategoryDto updateCategory(int categoryId, CategoryDto categoryDto);
	    void deleteCategory(int categoryId);
	    CategoryDto getCategoryById(int categoryId);
	    List<CategoryDto> getAllCategories();
}
