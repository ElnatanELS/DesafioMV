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

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/cnes-ativos")
@Api(value = "API REST de leitura de CNES Ativos")
public class CnesAtivoController {
	
	@Autowired
	private  CnesService cnesService;
	
	@GetMapping
	@ApiOperation(value = "retorna um lista com todos CNES paginado ")
	public ResponseEntity<?> getAllCnesAtivos(Pageable pageable) {
		return new ResponseEntity<>(this.cnesService.getAll(pageable), HttpStatus.OK);
		
	}
	
	@GetMapping("estados")
	@ApiOperation(value = "retorna um lista com a sigla de todos estados cadastrados")
	public ResponseEntity<?> getAllEstados(){
		return new ResponseEntity<>(this.cnesService.getEstado(), HttpStatus.OK);
	}
	
	@GetMapping("estados/{sigla}")
	@ApiOperation(value = "retorna um lista com todos CNES de um dertimanado estado  ")
	public ResponseEntity<?> getAllCnesPorEstado(@PathVariable(value = "sigla") String siglaUF, Pageable pageable){
		return new ResponseEntity<>(this.cnesService.getEstadoPrSigla(siglaUF, pageable), HttpStatus.OK);
	}
	
	@GetMapping("tipos-de-unidade")
	@ApiOperation(value = "retorna um lista com todas CNES por tipo de unidade ")
	public ResponseEntity<?> getAllCnesPorTipoUnidade(@RequestParam("tipoDeUnidade") String tipoDeUnidade, Pageable pageable){
		
		return new ResponseEntity<>(this.cnesService.getAllCnesPorTipoUnidade(tipoDeUnidade, pageable), HttpStatus.OK);
	}
	

}
