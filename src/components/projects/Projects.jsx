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
                      <h3>UNIBRASIL - CENTRO UNIVESITÁRIO DO BRASIL</h3>
                  </div>
                  <div className="swiper-projects">
                      <Swiper className='swiper-projects'
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
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
                <div className=" emphasis-projects projects-inner-content">                          
                  <img className='projects_img' src={perfilDev} alt="Perfil Natanael Razzotto" />
                  <h3>Bacharel em Sistemas de Informação</h3>
                  <p> 2018 - 2022 </p>
                </div>
              </div>

           
        </section>
    );
}
export default Projects;