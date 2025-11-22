//package config;
//
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Bean
//public class SecurityConfig{
//public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//    http
//        .csrf().disable()
//        .authorizeHttpRequests()
//        .requestMatchers("/api/**").permitAll()   // allow all API requests
//        .anyRequest().permitAll()                 // no authentication needed
//        .and()
//        .httpBasic().disable()
//        .formLogin().disable();
//
//    return http.build();
//}
//package com;



