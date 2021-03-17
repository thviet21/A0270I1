package com.codegym.practice_customer_aop.repositories;

import com.codegym.practice_customer_aop.models.Province;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository extends JpaRepository<Province,Integer> {
    Page<Province> findAll(Pageable pageable);

}
