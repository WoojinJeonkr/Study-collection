package com.board.bootcamp.global.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class SpringConfig {
	
	@Bean
    public OpenAPI openAPI(@Value("${springdoc.version}") String version) {
        
		Info info = new Info()
                .title("Board API Documentation") // 문서 제목
                .version(version) // 문서 버전
                .description("Nextree Bootcamp API Description") // 문서 설명
                .contact(new Contact() // 연락처
                        .name("wjjeon")
                        .email("Newwjsdnwls@gmail.com"));

     // Security 스키마 설정
        SecurityScheme bearerAuth = new SecurityScheme()
                .type(SecurityScheme.Type.HTTP)
                .scheme("bearer")
                .bearerFormat("Authorization")
                .in(SecurityScheme.In.HEADER)
                .name(HttpHeaders.AUTHORIZATION);

        // Security 요청 설정
        SecurityRequirement addSecurityItem = new SecurityRequirement();
        addSecurityItem.addList("Authorization");

        return new OpenAPI()
                        // Security 인증 컴포넌트 설정
                        .components(new Components().addSecuritySchemes("Authorization", bearerAuth))
                        // API 마다 Security 인증 컴포넌트 설정
                        .addSecurityItem(addSecurityItem)
                        .info(info);
    }
}
