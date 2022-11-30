package com.academy.projetometa.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.academy.projetometa.entidades.Vendas;

public interface VendaRepositorio extends JpaRepository<Vendas, Long>{

}
