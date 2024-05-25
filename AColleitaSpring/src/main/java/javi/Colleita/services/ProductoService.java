package javi.Colleita.services;

import java.util.ArrayList;
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

    private List<Producto> cart = new ArrayList<>();

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

    @Override
    public void addProductToCart(Integer id, Integer cantidad) {
        Producto producto = findByID(id);
        if (producto != null) {
            for (Producto p : cart) {
                if (p.getId().equals(producto.getId())) {
                    p.setCantidad(p.getCantidad() + cantidad);
                    return;
                }
            }
            producto.setCantidad(cantidad);
            cart.add(producto);
        }
    }

    @Override
    public List<Producto> getCart() {
        return cart;
    }

    @Override
    public Double getCartTotal() {
        return cart.stream().mapToDouble(p -> p.getPrecio() * p.getCantidad()).sum();
    }

}



