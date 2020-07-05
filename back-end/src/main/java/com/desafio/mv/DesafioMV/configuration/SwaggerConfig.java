package com.desafio.mv.DesafioMV.configuration;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.VendorExtension;
import static springfox.documentation.builders.PathSelectors.regex;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	@Bean
    public Docket productApi() {
    return new Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(RequestHandlerSelectors.basePackage("com.desafio.mv.DesafioMV"))
            .paths(regex("/cnes-ativos.*"))
            .build()
            .apiInfo(metaInfo());
}

private ApiInfo metaInfo() {

    ApiInfo apiInfo = new ApiInfo(
            "CNES API REST",
            "API REST de leitura de CNES Ativos.",
            "1.0",
            "Terms of Service",
            new Contact("Elnatan Emanuel Lima Santos", "",
                    "elnatanels@gmail.com"),
            "Apache License Version 2.0",
            "https://www.apache.org/licesen.html", new ArrayList<VendorExtension>()
    );

    return apiInfo;
}}
