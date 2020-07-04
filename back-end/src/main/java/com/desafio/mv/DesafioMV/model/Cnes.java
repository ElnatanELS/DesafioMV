package com.desafio.mv.DesafioMV.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "cnes_ativo", schema = "cnes")
public class Cnes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "co_cnes")
	private long codCnes;
	
	@Column(name = "co_ibge")
	private String codIbge;
	
	@Column(name = "no_fantasia")
	private String nomeFantasia;
	
	@Column(name = "ds_tipo_unidade")
	private String tipoUnidade;
	
	@Column(name = "tp_gestao")
	private String tipoGestao;
	
	@Column(name = "no_logradouro")
	private String logradouro;
	
	@Column(name = "nu_endereco")
	private String numero;
	
	@Column(name = "no_bairro")
	private String bairro;
	
	@Column(name = "co_cep")
	private String cep;
	
	@Column(name = "uf")
	private String uf;
	
	@Column(name = "municipio")
	private String municipio;
	
	@Column(name = "nu_telefone")
	private String telefone;

	public long getCodCnes() {
		return codCnes;
	}

	public void setCodCnes(long codCnes) {
		this.codCnes = codCnes;
	}

	public String getCodIbge() {
		return codIbge;
	}

	public void setCodIbge(String codIbge) {
		this.codIbge = codIbge;
	}

	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}

	public String getTipoUnidade() {
		return tipoUnidade;
	}

	public void setTipoUnidade(String tipoUnidade) {
		this.tipoUnidade = tipoUnidade;
	}

	public String getTipoGestao() {
		return tipoGestao;
	}

	public void setTipoGestao(String tipoGestao) {
		this.tipoGestao = tipoGestao;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getMunicipio() {
		return municipio;
	}

	public void setMunicipio(String municipio) {
		this.municipio = municipio;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	
	
	
	
	

}
