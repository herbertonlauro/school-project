package com.academy.projetometa.servicos;



import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.academy.projetometa.entidades.Vendas;
import com.academy.projetometa.repositorios.VendaRepositorio;

@Service
public class VendasServicos {
	
	@Autowired
	private VendaRepositorio repository;
	
	public Page<Vendas> buscarVendas(String minDate,String maxDate,  Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		
		LocalDate min = minDate.equals("") ? today.minusDays(365) : LocalDate.parse(minDate);
				
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		return repository.buscarVendas(min, max, pageable);
	}
		
}
