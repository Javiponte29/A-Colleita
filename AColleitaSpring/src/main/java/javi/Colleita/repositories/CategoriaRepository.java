package javi.Colleita.repositories;

import org.springframework.stereotype.Repository;

import javi.Colleita.models.Categoria;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer>{

}
