package com.desafio.mv.DesafioMV.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.desafio.mv.DesafioMV.model.Cnes;
import com.desafio.mv.DesafioMV.repository.CnesAtivoRepository;

@Service
public class CnesService {
	
	@Autowired
	private  CnesAtivoRepository cnesAtivoRepository;
	
	public Page<Cnes> getAll(Pageable pageable) {
		return this.cnesAtivoRepository.findAll(pageable);
	}
	
	public Page<Cnes> getEstadoPrSigla(String siglaUF, Pageable pageable) {
		return this.cnesAtivoRepository.findByuf(siglaUF, pageable);
	}
	public Page<Cnes> getAllCnesPorTipoUnidade(String tipoDeUnidade, Pageable pageable) {
		return this.cnesAtivoRepository.findBytipoUnidade(tipoDeUnidade, pageable);
	}
	
	public Iterable<Cnes> getEstado() {
		return this.cnesAtivoRepository.finduf();
	}
	
	public Iterable<Cnes> getTipoUnidades() {
		return this.cnesAtivoRepository.findTipoUnidade();
	}
	public Optional<Cnes> getCnesId(Long id) {
		return this.cnesAtivoRepository.findById(id);
	}
	
	

}
