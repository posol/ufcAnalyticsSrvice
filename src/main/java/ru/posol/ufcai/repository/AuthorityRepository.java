package ru.posol.ufcai.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.posol.ufcai.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
