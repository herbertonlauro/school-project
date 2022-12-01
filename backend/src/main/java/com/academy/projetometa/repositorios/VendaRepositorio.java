package com.academy.projetometa.repositorios;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.academy.projetometa.entidades.Vendas;

public interface VendaRepositorio extends JpaRepository<Vendas, Long>{
	
	@Query("SELECT obj FROM Vendas obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.total DESC")
	Page<Vendas> buscarVendas(LocalDate min, LocalDate max, Pageable pageable);
	
}
