package com.hansaniperera.portfolio;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.context.annotation.Import;

/**
 * Full application context against Testcontainers Postgres. Every integration test uses the same
 * configuration, so Spring caches one context and only one Postgres container starts per run.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Import(TestcontainersConfiguration.class)
@SpringBootTest
@AutoConfigureMockMvc
public @interface IntegrationTest {

}
