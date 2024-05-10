INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Hortalizas y Legumbres'),
(2, 'Frutas'),
(3, 'Lácteos'),
(4, 'Bebida');

INSERT INTO `productos` (`id`, `nombre`, `precio`, `direccion`, `valoracion`, `cantidad`, `idcategoria`, `descripcion`, `imagen`) VALUES
(1, 'Maíz', 4, 'Mazaricos, 15258, La Coruña', 4, 10, 1, 'Maíz fresco, jugoso y lleno de sabor, ideal para una variedad de usos culinarios. 
Desde deliciosas tortillas hasta nutritivas ensaladas, nuestro maíz es la elección perfecta para tus necesidades gastronómicas.', ''),
(2, 'Repollo', 4, 'Lugar Todon, 5', 4.5, 12, 1, 'Cultivados con esmero, seleccionando cuidadosamente las mejores variedades para ofrecerte la 
máxima calidad y frescura en cada mordisco.', ''),
(3, 'Cebolla', 4, 'Finca Horticina', 4.2, 10, 1, 'Seleccionamos cuidadosamente cebollas de la más alta calidad para garantizarte una experiencia culinaria excepcional.', ''),
(4, 'Judías Verdes', 4, 'Celanova, Ourense', 4, 10, 1, 'Las judías verdes son mucho más que un simple vegetal: son un complemento versátil y 
delicioso para una variedad de platos. Desde salteados rápidos hasta platos principales saludables, las judías verdes aportan 
un toque de frescura y textura a tus recetas favoritas.', ''),
(5, 'Grelos', 4, 'Ramirás, Ourense', 4, 10, 1, '¡Sumérgete en la tradición y el sabor único de nuestros grelos frescos en nuestro mercado! Los 
grelos son un tesoro culinario que forma parte de la rica herencia gastronómica de nuestra región. Con su sabor distintivo y su textura tierna, 
los grelos son el acompañamiento perfecto para platos tradicionales como el lacón con grelos o el caldo gallego.', ''),
(6, 'Patatas', 4, 'As Quintas Nº11 Burres Arzúa, A Coruña', 4, 10, 1, '¡Deleita tu paladar con la calidad y la frescura incomparables de nuestras 
patatas en nuestro mercado! Cuidadosamente seleccionadas y cultivadas para ofrecerte lo mejor, nuestras patatas son el ingrediente esencial que 
transformará tus platos en auténticas obras maestras culinarias.', ''),
(7, 'Fabas', 4, 'A Codeseira Arzúa, La Coruña', 4, 10, 1, '', ''),
(8, 'Setas', 4, 'Mercurín Boimorto, La Coruña', 4, 10, 1, '', ''),
(9, 'Manzana Roja', 4, 'LU-P-1701 Cospeito, Lugo', 4, 10, 2, '', ''),
(10, 'Manzana Verde', 4, 'Forcarei, Pontevedra', 4, 10, 2, '', ''),
(11, 'Naranja', 4, 'A Estrada, Pontevedra', 4, 10, 2, '', ''),
(12, 'Mandarina', 4, 'Lugar O Cerdeiral, Pontevedra', 4, 10, 2, '', ''),
(13, 'Limón', 4, 'Padrón, La Coruña', 4, 10, 2, '', ''),
(14, 'Kiwi', 4, 'Teo, La Coruña', 4, 10, 2, '', ''),
(15, 'Pera', 4, 'Brión, La Coruña', 4, 10, 2, '', ''),
(15, 'Queso de Arzúa', 4, 'Riva Pantiñobre, A Coruña', 4, 10, 3, '', ''),
(15, 'Queso Curado de oveja Breogán', 4, 'O Seixo Santiso, Pontevedra', 4, 10, 3, '', ''),
(15, 'Queso Galmesán', 4, 'Teiraboa, A Coruña', 4, 10, 3, '', ''),
(15, 'Queso do cebreiro Santo André', 4, 'San Andrés de Barredo, Lugo', 4, 10, 3, '', ''),
(15, 'Queso Da Josefa', 4, 'Palas del Rey, Lugo', 4, 10, 3, '', ''),
(15, 'Leche Entera', 4, 'A Lamea, La Coruña', 4, 10, 3, '', ''),
(15, 'Leche sin Lactosa', 4, 'A Lamea, La Coruña', 4, 10, 3, '', ''),
(15, 'Leche Desnatada', 4, 'A Lamea, La Coruña', 4, 10, 3, '', ''),
(15, 'Vino Tinto O Cabalin', 4, 'Rúa a Fonte Chelos, Vilamartín de Valdeorras, Ourense', 4, 10, 4, '', ''),
(15, 'Licor Café', 4, 'Teimende, Ourense', 4, 10, 4, '', ''),
(15, 'Aguahardiente', 4, 'A Seara, Pontevedra', 4, 10, 4, '', ''),
(15, 'Licor Guindas', 4, 'Ferrol, A Coruña', 4, 10, 4, '', ''),
(15, 'Zumo de manzana', 4, 'Santiago de Compostela, A Coruña', 4, 10, 4, '', ''),
(15, 'Zumo de naranja', 4, 'Foz, Lugo', 4, 10, 4, '', ''),
(15, 'Zumo espumoso de manzana', 4, 'Pardeconde Xunqueira de Espadanedo, Ourense', 4, 10, 4, '', ''),
(15, 'Vino Tinto Tesouro', 4, 'Cachamuíña, Ourense', 4, 10, 4, '', ''),
(15, 'Vino Blanco Pedralonga', 4, 'Caldas de Reis, Pontevedra', 4, 10, 4, '', '');