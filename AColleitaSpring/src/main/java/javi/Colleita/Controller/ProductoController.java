package javi.Colleita.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javi.Colleita.models.Producto;
import javi.Colleita.services.IProductoService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin
@RestController
@RequestMapping("/cont")
public class ProductoController {

    @Autowired IProductoService pSer;

    @GetMapping("/list")
    public List<Producto> get() {
        return pSer.getProductos();
    }

    @GetMapping("/{id}")
    public Producto getId(@PathVariable Integer id) {
        return pSer.findByID(id);
    }
    
    @PostMapping("/cart/add")
    public void addToCart(@RequestParam Integer id, @RequestParam Integer cantidad) {
        pSer.addProductToCart(id, cantidad);
    }

    @GetMapping("/cart")
    public List<Producto> getCart() {
        return pSer.getCart();
    }

    @GetMapping("/cart/total")
    public double getCartTotal() {
        return pSer.getCartTotal();
    }
}
