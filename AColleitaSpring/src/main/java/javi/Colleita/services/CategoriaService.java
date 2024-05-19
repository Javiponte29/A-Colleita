package javi.Colleita.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javi.Colleita.models.Categoria;
import javi.Colleita.repositories.CategoriaRepository;

@Service
public class CategoriaService implements ICategoriaService{

    @Autowired
    CategoriaRepository cRepo;

    @Override
    public List<Categoria> mostrar() {
        return cRepo.findAll();
    }

    @Override
    public Categoria findById(Integer id) {
        Optional<Categoria> op = cRepo.findById(id);
        if (op.isPresent()) {
            return op.get();
        }
        return null;
    }
}
