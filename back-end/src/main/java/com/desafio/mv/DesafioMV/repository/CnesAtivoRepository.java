package com.desafio.mv.DesafioMV.repository;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.desafio.mv.DesafioMV.model.Cnes;

@Repository
public interface CnesAtivoRepository extends PagingAndSortingRepository<Cnes, Long> {
	
	@Query("select distinct uf from Cnes ca where uf is not null order by uf asc")
	Iterable<Cnes> finduf();

	Page<Cnes> findByuf(String sigla, Pageable pageable);
	
	Page<Cnes> findBytipoUnidade(String tipoUnidade, Pageable pageable);
}
