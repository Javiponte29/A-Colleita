package javi.Colleita.services;

import java.util.List;

import javi.Colleita.models.Categoria;

public interface ICategoriaService {
List<Categoria> mostrar();
Categoria findById(Integer id);
}
