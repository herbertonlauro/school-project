package com.academy.projetometa.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.academy.projetometa.entidades.Vendas;
import com.academy.projetometa.servicos.VendasServicos;

@RestController
@RequestMapping(value = "/vendas")
public class VendaControle {
	
	@Autowired
	private VendasServicos service;
	
	@GetMapping
	public Page<Vendas> buscarVendas(
			@RequestParam (value="minDate", defaultValue = "") String minDate,
			@RequestParam (value="maxDate", defaultValue = "") String maxDate,
					
			Pageable pageable){
		
		return service.buscarVendas(minDate,maxDate, pageable);
	}
}
