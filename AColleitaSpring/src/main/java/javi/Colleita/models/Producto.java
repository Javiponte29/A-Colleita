package javi.Colleita.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column
    private Integer precio;

    @Column(nullable = false)
    private String direccion;

    //Valoración entre 1 y 10
    @Column(nullable = false)
    private Integer valoracion;

    //Cantidad en kg, a parte de marcar la cantidad sirve para saber si hay productos
    @Column(nullable = false)
    private Integer cantidad;

    @ManyToOne
    @JoinColumn
    private Categoria categoria;

    @Column(nullable = false, length = 500)
    private String descripcion;

    @Column(nullable = false)
    private String imagen;

    

}
