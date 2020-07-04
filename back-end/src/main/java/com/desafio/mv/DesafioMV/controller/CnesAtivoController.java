package com.desafio.mv.DesafioMV.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.mv.DesafioMV.service.CnesService;

@RestController
@RequestMapping("/cnes-ativos")
public class CnesAtivoController {
	
	@Autowired
	private  CnesService cnesService;
	
	@GetMapping
	public ResponseEntity<?> getAllCnesAtivos(Pageable pageable) {
		return new ResponseEntity<>(this.cnesService.getAll(pageable), HttpStatus.OK);
		
	}
	
	@GetMapping("estados")
	public ResponseEntity<?> getAllEstados(){
		return new ResponseEntity<>(this.cnesService.getEstado(), HttpStatus.OK);
	}
	
	@GetMapping("estados/{sigla}")
	public ResponseEntity<?> getAllCnesPorEstado(@PathVariable(value = "sigla") String siglaUF, Pageable pageable){
		return new ResponseEntity<>(this.cnesService.getEstadoPrSigla(siglaUF, pageable), HttpStatus.OK);
	}
	
	@GetMapping("tipos-de-unidade")
	public ResponseEntity<?> getAllCnesPorTipoUnidade(@RequestParam("tipoDeUnidade") String tipoDeUnidade, Pageable pageable){
		
		return new ResponseEntity<>(this.cnesService.getAllCnesPorTipoUnidade(tipoDeUnidade, pageable), HttpStatus.OK);
	}
	

}
