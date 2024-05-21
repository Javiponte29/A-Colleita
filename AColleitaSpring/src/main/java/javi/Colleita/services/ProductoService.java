package javi.Colleita.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javi.Colleita.models.Producto;
import javi.Colleita.repositories.ProductoRepository;

@Service
public class ProductoService implements IProductoService{

    @Autowired
    ProductoRepository pRepo;

    @Override
    public List<Producto> getProductos() {
        return pRepo.findAll();
    }

    @Override
    public Producto findByID(Integer id) {
        Optional<Producto> op = pRepo.findById(id);
        if (op.isPresent()) {
            return op.get();
        }
        return null;
    }
}
