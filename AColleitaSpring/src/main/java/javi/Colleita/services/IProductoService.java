package javi.Colleita.services;

import java.util.List;

import javi.Colleita.models.Producto;

public interface IProductoService {
List<Producto> getProductos();
Producto findByID(Integer id);
void addProductToCart(Integer id, Integer cantidad);
List<Producto> getCart();
Double getCartTotal();
}
