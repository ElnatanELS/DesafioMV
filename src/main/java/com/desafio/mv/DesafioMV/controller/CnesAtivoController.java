package com.desafio.mv.DesafioMV.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.mv.DesafioMV.model.Cnes;
import com.desafio.mv.DesafioMV.repository.CnesAtivoRepository;

@RestController
@RequestMapping("/cnes_ativo")
public class CnesAtivoController {
	
	@Autowired
	private  CnesAtivoRepository cnesAtivoRepository;
	
	@GetMapping("cnes")
	public Iterable<Cnes> getAllCnesAtivos() {
		return this.cnesAtivoRepository.findAll();
		
	}
	

}
