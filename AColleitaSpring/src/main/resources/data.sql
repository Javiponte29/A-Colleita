INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Hortalizas y Legumbres'),
(2, 'Frutas'),
(3, 'Lácteos'),
(4, 'Bebida');

INSERT INTO `productos` (`id`, `nombre`, `precio`, `direccion`, `valoracion`, `cantidad`, `idcategoria`, `descripcion`, `imagen`) VALUES
(1, 'Maíz', 4, 'Mazaricos, 15258, La Coruña', 4, 10, 1, 'Maíz fresco, jugoso y lleno de sabor, ideal para una variedad de usos culinarios. 
Desde deliciosas tortillas hasta nutritivas ensaladas, nuestro maíz es la elección perfecta para tus necesidades gastronómicas.', 'https://humanidades.com/wp-content/uploads/2018/10/maiz-2-1-e1581908276964.jpg'),
(2, 'Repollo', 4, 'Lugar Todon, 5', 4, 12, 1, 'Cultivados con esmero, seleccionando cuidadosamente las mejores variedades para ofrecerte la 
máxima calidad y frescura en cada mordisco.', 'https://s1.abcstatics.com/media/bienestar/2021/02/10/repollo-ficha-kk2C--1248x698@abc.jpg'),
(3, 'Cebolla Blanca', 4, 'Finca Horticina', 4, 10, 1, 'Seleccionamos cuidadosamente cebollas de la más alta calidad para garantizarte una 
experiencia culinaria excepcional.', 'https://familia.freshcatarina.com/uploads/Cebolla-blanca-02.png'),
(4, 'Judías Verdes', 4, 'Celanova, Ourense', 4, 10, 1, 'Las judías verdes son mucho más que un simple vegetal: son un complemento versátil y 
delicioso para una variedad de platos. Desde salteados rápidos hasta platos principales saludables, las judías verdes aportan 
un toque de frescura y textura a tus recetas favoritas.', 'https://common.crowdfarming.com/uploaded-images/1705936050921-f0eea7e2-4fa0-4520-bba3-fa35f79f663f.jpg'),
(5, 'Grelos', 4, 'Ramirás, Ourense', 4, 10, 1, '¡Sumérgete en la tradición y el sabor único de nuestros grelos frescos en nuestro mercado! Los 
grelos son un tesoro culinario que forma parte de la rica herencia gastronómica de nuestra región. Con su sabor distintivo y su textura tierna, 
los grelos son el acompañamiento perfecto para platos tradicionales como el lacón con grelos o el caldo gallego.', 'https://www.lareiragourmet.com/media/images/flickr-2635378490-original-1491310401.jpg'),
(6, 'Patatas', 4, 'As Quintas Nº11 Burres Arzúa, A Coruña', 4, 10, 1, '¡Deleita tu paladar con la calidad y la frescura incomparables de nuestras 
patatas en nuestro mercado! Cuidadosamente seleccionadas y cultivadas para ofrecerte lo mejor, nuestras patatas son el ingrediente esencial que 
transformará tus platos en auténticas obras maestras culinarias.', 'https://img2.rtve.es/i/?w=1600&i=1680518974198.jpg'),
(7, 'Fabas', 4, 'A Codeseira Arzúa, La Coruña', 4, 10, 1, '¡Explora la auténtica tradición culinaria con nuestras fabas frescas en nuestro 
mercado! Seleccionadas con esmero y cultivadas para preservar su calidad, nuestras fabas garantizan una experiencia gastronómica excepcional 
que te transportará a los sabores más genuinos de nuestra región.', 'https://gourmetgallego.com/wp-content/uploads/p/3/2/p_3_2_32-Faba-de-Lourenza.jpg'),
(8, 'Setas', 4, 'Mercurín Boimorto, La Coruña', 4, 10, 1, '¡Sumérgete en el mundo de las setas frescas en nuestro mercado! Seleccionadas con 
cuidado y cultivadas con dedicación, nuestras setas ofrecen una experiencia culinaria excepcional que deleitará tus sentidos.', 'https://www.yuarestaurante.com/wp-content/uploads/2021/12/Hongos.jpg'),
(9, 'Manzana Roja', 4, 'LU-P-1701 Cospeito, Lugo', 4, 10, 2, '¡Disfruta de la frescura y el sabor inigualable de nuestras manzanas rojas en 
nuestro mercado! Seleccionadas con esmero de los mejores huertos, nuestras manzanas rojas ofrecen una experiencia gustativa excepcional que 
satisfará incluso a los paladares más exigentes.', 'https://common.crowdfarming.com/uploaded-images/1710250707801-da4c9779-e43d-4563-9347-1a65ce4c6047.jpg'),
(10, 'Manzana Verde', 4, 'Forcarei, Pontevedra', 4, 10, 2, '¡Sumérgete en la frescura y el sabor vibrante de nuestras manzanas verdes en nuestro 
mercado! Seleccionadas cuidadosamente de los mejores huertos, nuestras manzanas verdes ofrecen una experiencia culinaria única que deleitará tus 
sentidos.', 'https://common.crowdfarming.com/uploaded-images/1694597560657-fc571b97-3042-4315-a7b8-3cbd9a1f7da0.jpg'),
(11, 'Naranja', 4, 'A Estrada, Pontevedra', 4, 10, 2, '¡Explora la frescura y el sabor cítrico de nuestras jugosas naranjas en nuestro mercado! 
Provenientes de los mejores campos de cultivo y seleccionadas con cuidado, nuestras naranjas ofrecen una experiencia de sabor excepcional que 
deleitará tus sentidos.', 'https://common.crowdfarming.com/uploaded-images/1614159507164-d2fe8773-73bc-4ca5-b9c3-3c4dc088a040.jpg'),
(12, 'Mandarina', 4, 'Lugar O Cerdeiral, Pontevedra', 4, 10, 2, '¡Déjate seducir por la frescura y la dulzura de nuestras mandarinas en nuestro 
mercado! Provenientes de los mejores campos y seleccionadas meticulosamente, nuestras mandarinas ofrecen una experiencia de sabor excepcional 
que te transportará a un paraíso cítrico.', 'https://www.dosfarma.com/blog/wp-content/uploads/2020/05/para_que_sirve_mandarina.jpg'),
(13, 'Limón', 4, 'Padrón, La Coruña', 4, 10, 2, '¡Experimenta la frescura y el sabor vibrante de nuestros limones en nuestro mercado! Cultivados 
con esmero y seleccionados cuidadosamente, nuestros limones ofrecen una experiencia culinaria excepcional que despertará tus sentidos.', ''),
(14, 'Kiwi', 4, 'Teo, La Coruña', 4, 10, 2, '¡Descubre la frescura y el sabor exótico de nuestros kiwis en nuestro mercado! Provenientes de los 
mejores huertos y seleccionados con cuidado, nuestros kiwis ofrecen una experiencia culinaria excepcional que deleitará tu paladar.', ''),
(15, 'Pera', 4, 'Brión, La Coruña', 4, 10, 2, '¡Explora la dulzura y la jugosidad de nuestras peras en nuestro mercado! Seleccionadas 
cuidadosamente de los mejores huertos y cultivadas con esmero, nuestras peras ofrecen una experiencia culinaria excepcional que te 
conquistará desde el primer bocado.', ''),
(16, 'Queso de Arzúa', 4, 'Riva Pantiñobre, A Coruña', 4, 10, 3, 'El queso de Arzúa es más que un simple lácteo: es el resultado de una 
cuidadosa elaboración y una herencia culinaria única. Con su textura cremosa y su sabor suave y ligeramente ácido, este queso es perfecto 
para disfrutar solo, acompañado de un buen vino o como ingrediente estrella en una tabla de quesos.', ''),
(17, 'Queso Curado de oveja Breogán', 4, 'O Seixo Santiso, Pontevedra', 4, 10, 3, '¡Sumérgete en la rica tradición y el delicioso sabor de 
nuestro queso curado de oveja Breogán en nuestro mercado! Producido con la más alta calidad y cuidado artesanal en la región de Galicia, 
este queso es una verdadera joya culinaria que no puedes dejar de probar.', ''),
(18, 'Queso Galmesán', 4, 'Teiraboa, A Coruña', 4, 10, 3, 'El queso Galmesán es una obra maestra artesanal que fusiona la riqueza de los 
quesos gallegos con la tradición del queso manchego. Este queso semi-curado se elabora cuidadosamente en pequeñas queserías familiares, 
donde se combinan métodos de producción tradicionales con técnicas innovadoras para crear un producto único y delicioso.', ''),
(19, 'Queso do cebreiro Santo André', 4, 'San Andrés de Barredo, Lugo', 4, 10, 3, 'Con una textura cremosa y suave que se desliza delicadamente 
sobre el paladar, el Queso do Cebreiro Santo André es una experiencia sensorial inolvidable. Su sabor es una sinfonía de matices sutiles, que 
van desde notas lácticas dulces hasta toques ligeros de acidez, todo envuelto en un aroma fresco y terroso que evoca la brisa de los campos 
gallegos.', ''),
(20, 'Queso Da Josefa', 4, 'Palas del Rey, Lugo', 4, 10, 3, 'Con una textura suave y untuosa que se deshace delicadamente en el paladar, el 
Queso Da Josefa ofrece una experiencia gustativa inigualable. Su sabor es una armoniosa combinación de notas suaves y cremosas, con un ligero 
toque de dulzura que se equilibra perfectamente con una leve acidez.', ''),
(21, 'Leche Entera', 4, 'A Lamea, La Coruña', 4, 10, 3, '¡Experimenta la frescura y la bondad natural de nuestra leche entera en cada sorbo! 
Proveniente de los mejores productores locales y cuidadosamente seleccionada para garantizar su calidad, nuestra leche entera es una opción 
nutritiva y deliciosa para toda la familia.', ''),
(22, 'Leche sin Lactosa', 4, 'A Lamea, La Coruña', 4, 10, 3, 'Descubre la frescura y la suavidad de nuestra leche sin lactosa, una opción perfecta 
para aquellos que buscan disfrutar de la bondad de la leche sin preocupaciones. Proveniente de los mejores productores y cuidadosamente elaborada 
para preservar su calidad, nuestra leche sin lactosa es una alternativa deliciosa y nutritiva para todos.', ''),
(23, 'Leche Desnatada', 4, 'A Lamea, La Coruña', 4, 10, 3, '¡Experimenta la ligereza y la frescura de nuestra leche desnatada en cada sorbo! 
Proveniente de los mejores productores locales y cuidadosamente elaborada para preservar su calidad, nuestra leche desnatada es una opción 
saludable y deliciosa para aquellos que buscan cuidar su figura sin sacrificar el sabor.', ''),
(24, 'Vino Tinto O Cabalin', 4, 'Rúa a Fonte Chelos, Vilamartín de Valdeorras, Ourense', 4, 10, 4, 'Descubre la elegancia y la tradición en cada 
sorbo con nuestro Vino Tinto O Cabalín. Proveniente de las soleadas tierras de la región vinícola, este vino cautiva los sentidos con su profundo 
color rojo rubí y su aroma tentador a frutas maduras y especias.', ''),
(25, 'Licor Café', 4, 'Teimende, Ourense', 4, 10, 4, 'Nuestro Licor de Café cautiva con su aroma tentador a café recién tostado y su sabor suave 
y seductor que acaricia el paladar. Perfecto para disfrutar solo, con hielo o como ingrediente en tus cócteles favoritos, este licor añade un 
toque de sofisticación y calidez a cualquier ocasión.', ''),
(26, 'Aguahardiente', 4, 'A Seara, Pontevedra', 4, 10, 4, 'Con su aroma tentador y su sabor distintivo, nuestra Aguardiente cautiva los sentidos 
y despierta la pasión por la buena vida. Ya sea que la disfrutes sola, con hielo o como ingrediente en cócteles artesanales, cada sorbo es una 
experiencia única y embriagadora.', ''),
(27, 'Licor Guindas', 4, 'Ferrol, A Coruña', 4, 10, 4, 'Nuestro Licor de Guindas es una verdadera obra maestra, con un aroma embriagador que te 
transporta a un huerto en plena cosecha. Cada sorbo es una explosión de sabor, con la intensidad de las guindas frescas equilibrada por la 
suavidad del licor, creando una experiencia gustativa inolvidable.', ''),
(28, 'Zumo de manzana', 4, 'Santiago de Compostela, A Coruña', 4, 10, 4, 'El jugo se extrae con cuidado de las mejores manzanas, seleccionadas 
por su frescura y su dulzura natural. Sin aditivos ni conservantes, nuestro zumo de manzana es una opción saludable y deliciosa para disfrutar 
en cualquier momento del día.', ''),
(29, 'Zumo de naranja', 4, 'Foz, Lugo', 4, 10, 4, 'El jugo se extrae cuidadosamente de las naranjas más maduras y jugosas, preservando su frescura 
y su riqueza en vitaminas y minerales. El resultado es una bebida refrescante y revitalizante que te hace sentir renovado desde el primer 
sorbo.', ''),
(30, 'Zumo espumoso de manzana', 4, 'Pardeconde Xunqueira de Espadanedo, Ourense', 4, 10, 4, 'Nuestro zumo espumoso se elabora con cuidado a 
partir de manzanas cuidadosamente seleccionadas y prensadas, y luego se le añade un toque de efervescencia para crear una experiencia única y 
refrescante. El resultado es una bebida deliciosa y festiva que hará brillar cualquier ocasión.', ''),
(31, 'Vino Tinto Tesouro', 4, 'Cachamuíña, Ourense', 4, 10, 4, 'Sumérgete en la riqueza y la elegancia del Vino Tinto Tesouro, una verdadera 
joya vinícola que cautiva con su carácter único y su sabor inolvidable. Proveniente de los viñedos más selectos y elaborado con maestría por 
expertos enólogos, este vino tinto es una expresión sublime del arte de la vinificación.', ''),
(32, 'Aguacate', 4, 'Forcarei, Pontevedra', 4, 10, 2, '¡Sumérgete en la frescura y el sabor vibrante de nuestros aguacates en nuestro 
mercado! Seleccionados cuidadosamente de los mejores huertos, nuestros aguacates ofrecen una experiencia culinaria única que deleitará tus 
sentidos.', 'https://common.crowdfarming.com/uploaded-images/1644409160873-2583bf21-f45a-469c-b1b4-bcc112542add.jpg'),
(33, 'Vino Blanco Pedralonga', 4, 'Caldas de Reis, Pontevedra', 4, 10, 4, 'Descubre la frescura y la elegancia del Vino Blanco Pedralonga, 
una verdadera joya vinícola que captura la esencia de la región y su clima privilegiado. Proveniente de los viñedos más selectos y elaborado 
con dedicación por expertos enólogos, este vino blanco es una expresión única de la tradición y la calidad.', '');