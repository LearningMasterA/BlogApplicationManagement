package com.ankita.blogapp.security;

import java.security.Key;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	private final SecretKey key=Keys.hmacShaKeyFor("ankita_super_secure_secret_key_123456789".getBytes());
	private long expiration=86400000;
	public  String generateToken(String username) {
		return Jwts.builder()
				.subject(username)
				.issuedAt(new Date())
				.expiration(new Date(System.currentTimeMillis()+expiration))
				.signWith(key)
				.compact();
	}
	
	 public String extractUsername(String token) {
	        return Jwts.parser()
	                .verifyWith((SecretKey) key)
	                .build()
	                .parseSignedClaims(token)
	                .getPayload()
	                .getSubject();
	    }
}
