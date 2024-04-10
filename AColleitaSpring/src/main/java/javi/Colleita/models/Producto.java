package javi.Colleita.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

    @Column(nullable = false)
    private Integer cantidad;

    @Column(nullable = false, length = 500)
    private String descripcion;

    @Column(nullable = false)
    private String imagen;

}
