package com.shaowei.cafeapp.repository;

import com.shaowei.cafeapp.domain.Category;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Category entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("select distinct category from Category category left join fetch category.items")
    List<Category> findAllWithEagerRelationships();

    @Query("select category from Category category left join fetch category.items where category.id =:id")
    Category findOneWithEagerRelationships(@Param("id") Long id);

}
