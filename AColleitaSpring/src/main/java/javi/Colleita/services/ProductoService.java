package javi.Colleita.services;

import java.util.List;

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
}
