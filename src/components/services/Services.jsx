import GridMain from '../grid-main/GridMain';
import './services.css';
function Services(){

         const servicesData = [
               { title: "Aplicações WEB", platform : "", describe : ["Desenvolvimento Front-end e Back-end, de sites e aplicativos responsivos para diversas plataformas."]},
                    { title: "Aplicações WEB", platform : "", describe : ["Desenvolvimento Front-end e Back-end, de sites e aplicativos responsivos para diversas plataformas."]},
                         { title: "Aplicações WEB", platform : "", describe : ["Desenvolvimento Front-end e Back-end, de sites e aplicativos responsivos para diversas plataformas."]},
                         
         ]


    return(
        <>
            <section className="services">
                <GridMain listItems={servicesData} />
            </section>
        </>
    )
}
export default Services;