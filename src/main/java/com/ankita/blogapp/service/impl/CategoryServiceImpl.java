package com.ankita.blogapp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ankita.blogapp.dto.CategoryDto;
import com.ankita.blogapp.entity.Category;
import com.ankita.blogapp.repository.CategoryRepository;
import com.ankita.blogapp.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	 @Autowired
	    private CategoryRepository categoryRepo;
	 private CategoryDto convertToDto(Category category) {
	        CategoryDto dto = new CategoryDto();
	        dto.setCatId(category.getCatId());
	        dto.setName(category.getName());
	        dto.setDescription(category.getDescription());
	        return dto;
	    }

	    private Category convertToEntity(CategoryDto dto) {
	        Category category = new Category();
	        category.setCatId(dto.getCatId());
	        category.setName(dto.getName());
	        category.setDescription(dto.getDescription());
	        return category;
	    }

	@Override
	public CategoryDto createCategory(CategoryDto categoryDto) {
		// TODO Auto-generated method stub
		Category category = convertToEntity(categoryDto);
        Category saved = categoryRepo.save(category);
        return convertToDto(saved);
	}

	@Override
	public CategoryDto updateCategory(int categoryId, CategoryDto categoryDto) {
		Category category = categoryRepo.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        category.setName(categoryDto.getName());
        category.setDescription(categoryDto.getDescription());

        Category updated = categoryRepo.save(category);
        return convertToDto(updated);
	}

	@Override
	public void deleteCategory(int categoryId) {
		categoryRepo.deleteById(categoryId);
		
	}

	@Override
	public CategoryDto getCategoryById(int categoryId) {
		 Category category = categoryRepo.findById(categoryId)
	                .orElseThrow(() -> new RuntimeException("Category not found"));
	        return convertToDto(category);
	}

	@Override
	public List<CategoryDto> getAllCategories() {
		return categoryRepo.findAll()
                .stream().map(this::convertToDto)
                .toList();
	}

}
