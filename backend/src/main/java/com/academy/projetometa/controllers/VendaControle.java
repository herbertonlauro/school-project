package com.academy.projetometa.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.academy.projetometa.entidades.Vendas;
import com.academy.projetometa.servicos.VendasServicos;

@RestController
@RequestMapping(value = "/vendas")
public class VendaControle {
	
	@Autowired
	private VendasServicos service;
	
	@GetMapping
	public List<Vendas> buscarVendas(){
		
		return service.buscarVendas();
	}
}
