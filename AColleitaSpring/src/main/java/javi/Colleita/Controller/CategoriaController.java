package javi.Colleita.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javi.Colleita.models.Categoria;
import javi.Colleita.services.ICategoriaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@CrossOrigin
@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    ICategoriaService cSer;

    @GetMapping("/list")
    public List<Categoria> lista() {
        return cSer.mostrar();
    }

    @GetMapping("/{id}")
    public Categoria getCategoriaById(@PathVariable Integer id) {
        return cSer.findById(id);
    }
    
}
