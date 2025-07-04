import { Swiper, SwiperSlide } from 'swiper/react';
import courses from '../../assets/courses.jpg';
import SIGUI from '../../assets/logotipo_SIGUI_header.png';
import CardsProjects from '../cards-projects/CardsProjects.jsx';
import PROJECT from '../../assets/entusiasta.png'
import GITIMG from '../../assets/GitHub_Logo.png';
import 'swiper/css';
import './projects.css';
function Projects() {

    
      
      const projectsData = [
           {
          title: "Entusiasta da Mobilidade",         
          description: "Projeto de um site de notícias e galeria de imagens",
          link_project: "https://www.entusiastadamobilidade.com.br/",
          image: PROJECT 
        },
                 {
          title: "Repositório de Projetos",         
          description: "Confira outros projetos em meu repositório no GitHub",
          link_project: "https://github.com/NatanaelRazzotto",
          image: GITIMG 
        },
      
        
      ];

    return (
        <section className="projects">
             <div className="content-projects">           
                <div className="projects-inner-content">
                  <div className="emphasis-title">
                      <h3>CATALOGO DE PROJETOS</h3>
                  </div>
                  <div className="swiper-projects">
                      <Swiper
                    spaceBetween={20}
                    slidesPerView={2}  
                        breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                    1280: { slidesPerView: 2 },
                    1440: { slidesPerView: 2 },
                }}                 
                    >
                    {projectsData.map((course, index) => (
                        <SwiperSlide key={index}>
                            <CardsProjects title={course.title} description={course.description} image={course.image} link_project={course.link_project}/>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                  </div>
                  
                </div>
                <div className=" emphasis-projects projects-inner-emphasis">                          
                  <img className='projects_img' src={SIGUI} alt="Perfil Natanael Razzotto" />
                  <h3>SIGUI - 10 pela Banca!</h3>
                  <p> Trabalho de Conclusão de Curso </p>
                </div>
              </div>

           
        </section>
    );
}
export default Projects;