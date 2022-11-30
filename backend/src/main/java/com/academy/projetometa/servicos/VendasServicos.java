package com.academy.projetometa.servicos;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.academy.projetometa.entidades.Vendas;
import com.academy.projetometa.repositorios.VendaRepositorio;

@Service
public class VendasServicos {
	
	@Autowired
	private VendaRepositorio repository;
	
	public List<Vendas> buscarVendas() {
		return repository.findAll();
	}
		
}
