
const AboutUs = () => {

    return(
        <main>
            <aside className="flex justify-around">
                <aside className="bg-ab rounded-full mt-10 mb-10 w-80 h-80 flex flex-col items-center">
                    <section className="mt-5 mb-5">
                        <img src="https://www.svgrepo.com/show/210898/information-info.svg" alt="Información" className="h14 w-14"/>
                    </section>
                    <section className="flex flex-col justify-between h-32">
                        <section className="flex items-center">
                            <img src="https://www.svgrepo.com/show/529758/phone-rounded.svg" alt="Teléfono" className="h-8 w-8 mr-2"/>
                            <p title="Número de telédono">981 654 368</p>
                        </section>
                        <section className="flex items-center">
                            <img src="https://www.svgrepo.com/show/529652/inbox.svg" alt="Correo electrónico" className="h-8 w-8 mr-2"/>
                            <p title="Correo electrónico">acolleita@gmail.com</p>
                        </section>
                        <section className="flex items-center">
                            <img src="https://www.svgrepo.com/show/529487/chat-round.svg" alt="Whatsapp" className="h-8 w-8 mr-2"/>
                            <p title="Número de Whatsapp">+34 636 541 783</p>
                        </section>
                    </section>
                </aside>
                <aside className="w-1/2 mt-10">
                    <h1 className="verde text-4xl font-semibold">¿Quienes Somos?</h1>
                    <p className="mt-10 text-xl">Desde <span className="verde font-medium">A Colleita</span>, nos enorgullece conectar a los consumidores con alimentos frescos y de alta calidad directamente de 
                        nuestros agricultores locales. Desde frutas y verduras recién cosechadas hasta productos lácteos y carnes cuidadosamente 
                        seleccionadas, nos comprometemos a proporcionar productos alimenticios que sean no solo deliciosos, sino también 
                        cultivados de manera responsable y sostenible.</p>
                </aside>
            </aside>
        </main>
    );
};

export default AboutUs;