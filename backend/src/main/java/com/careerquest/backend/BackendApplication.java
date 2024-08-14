package com.careerquest.backend;

import static java.util.Arrays.stream;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

import io.github.cdimascio.dotenv.Dotenv;
import lombok.extern.log4j.Log4j2;

@Log4j2
@SpringBootApplication
@ConfigurationPropertiesScan
public class BackendApplication {

	enum DotEnv {
		PORT,
		CLIENT_ORIGIN_URL,
		DATABASE_URL,
		DATABASE_PASSWORD,
		DATABASE_USERNAME,
		DATABASE_DDL,
	}

	public static void main(String[] args) {
		dotEnvSafeCheck();

		SpringApplication.run(BackendApplication.class, args);
	}

	private static void dotEnvSafeCheck() {
		final var dotenv = Dotenv.configure()
				.ignoreIfMissing()
				.load();

		stream(DotEnv.values())
				.map(DotEnv::name)
				.filter(varName -> dotenv.get(varName, "").isEmpty())
				.findFirst()
				.ifPresent(varName -> {
					log.error("[Fatal] Missing or empty environment variable: {}", varName);

					System.exit(1);
				});
	}

}
