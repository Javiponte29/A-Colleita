package javi.Colleita.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javi.Colleita.models.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer>{

}
