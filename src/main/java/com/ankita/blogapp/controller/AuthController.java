package com.ankita.blogapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ankita.blogapp.dto.LoginDto;
import com.ankita.blogapp.dto.RegisterDto;
import com.ankita.blogapp.entity.User;
import com.ankita.blogapp.repository.UserRepository;
import com.ankita.blogapp.security.JwtUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody RegisterDto dto){
		if(userRepo.findByUsername(dto.getUsername())!=null) {
			return ResponseEntity.badRequest().body("Username already exists!!");
		}
		User user=new User();
		user.setUsername(dto.getUsername());
		user.setEmail(dto.getEmail());
		user.setPassword(passwordEncoder.encode(dto.getPassword()));
		userRepo.save(user);
		return ResponseEntity.ok("User registered successfully");
	}
	
	@CrossOrigin(origins="http://localhost:5173")
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody LoginDto loginDto){
		UsernamePasswordAuthenticationToken authToken=new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword());
		try {
			authManager.authenticate(authToken);
		}
		catch(Exception e) {
			return ResponseEntity.status(401).body("Invalid Username or password");
		}
		
		UserDetails userDetails=userDetailsService.loadUserByUsername(loginDto.getUsername());
		String token = jwtUtil.generateToken(userDetails.getUsername());
		
		return ResponseEntity.ok(token);
	}

}
