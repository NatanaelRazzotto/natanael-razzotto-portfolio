import GridMain from '../grid-main/GridMain';
import './services.css';
function Services(){

         const servicesData = [
               { title: "Aplicações WEB", platform : "", describe : ["Desenvolvimento Front-end e Back-end, de sites e aplicativos responsivos para diversas plataformas."]},
                    { title: "Aplicações DESKTOP", platform : "", describe : ["Aplicativos para Windows / Linux, com base em tecnologia .NET ou Java para o Front-end e Back-end."]},
                         { title: "Aplicações MOBILE", platform : "", describe : ["Aplicativos para Windows / Linux, com base em tecnologia .NET ou Java para o Front-end e Back-end."]},
                                 { title: "Banco de dados", platform : "", describe : ["Construção da base de dados com tecnologias SQL e NoSQL."]},
                                         { title: "Infraestrutura", platform : "", describe : ["Servidor Linux e gerenciamento de Cloud AWS."]},
                                                                  { title: "Projetos", platform : "", describe : ["Planejamento, Estruturação de Requisitos, Teste, Diagramas UML."]},
         ]


    return(
        <>
            <section className="services">
                 <div className='header-title'>
                    <div className="emphasis-title">
                         <h3>SERVIÇOS OFERECIDOS</h3>
                    </div>
               </div>
                <GridMain listItems={servicesData} />
            </section>
        </>
    )
}
export default Services;