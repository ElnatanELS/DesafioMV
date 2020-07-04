package com.desafio.mv.DesafioMV.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.desafio.mv.DesafioMV.model.Cnes;

@Repository
public interface CnesAtivoRepository extends CrudRepository<Cnes, Long> {

}
