import { Swiper, SwiperSlide } from 'swiper/react';
import courses from '../../assets/courses.jpg';
import perfilDev from '../../assets/3090CL35051.JPG';
import Card from '../cards/card.jsx';
import 'swiper/css';
import './projects.css';
function Projects() {

    
      
      const coursesData = [
           {
          title: "Primeiros Passos com React Native & Expo",
          year: "2025",
          institution: "Dio",
          image: courses 
        },
           {
          title: "Configurando seu Ambiente de Desenvolvimento para React Native",
          year: "2025",
          institution: "Dio",
          image: courses 
        },
           {
          title: "Introdução ao .NET",
          year: "2025",
          institution: "Dio",
          image: courses 
        },
           {
          title: "Introdução ao .NET",
          year: "2025",
          institution: "Dio",
          image: courses 
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
                    {coursesData.map((course, index) => (
                        <SwiperSlide key={index}>
                            <Card title={course.title} description={course.description} image={course.image} year={course.year} institution={course.institution} />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                  </div>
                  
                </div>
                <div className=" emphasis-projects projects-inner-emphasis">                          
                  <img className='projects_img' src={perfilDev} alt="Perfil Natanael Razzotto" />
                  <h3>SIGNA</h3>
                  <p> Trabalho de Conclusão de Curso </p>
                </div>
              </div>

           
        </section>
    );
}
export default Projects;