import { Swiper, SwiperSlide } from 'swiper/react';
import courses from '../../assets/courses.jpg';
import logoMicrosoft from '../../assets/microsoft.png';
import logoDio from '../../assets/dio.png';
import Card from '../cards/card.jsx';
import 'swiper/css';
import './carousel-formation.css';
function CarouselFormation() {

    
      
      const coursesData = [
           {
          title: "Primeiros Passos com React Native & Expo",
          year: "2025",
          institution: "Dio",
          image: logoDio ,
          link: "https://www.dio.me/certificate/WZEUSUXT/share"
        },
           {
          title: "Configurando seu Ambiente de Desenvolvimento para React Native",
          year: "2025",
          institution: "Dio",
          image: logoDio ,
          link: ""
        },
           {
          title: "Introdução ao .NET",
          year: "2025",
          institution: "Dio",
          image: logoDio ,
            link: ""
        },
           {
          title: "Introduction to .NET web development with ASP.NET Core",
          year: "2025",
          institution: "MICROSOFT LEARNING ",
          image: logoMicrosoft ,
            link: ""
        },
            {
          title: "Build a web API with minimal API, ASP.NET Core, and .NET ",
          year: "2025",
          institution: "MICROSOFT LEARNING ",
          image: logoMicrosoft ,
            link: ""
        },
     
        {
          title: "Introdução a Plataforma Java",
          year: "2024",
          institution: "Dio",
          image: logoDio ,
            link: ""
        },
        {
          title: "Introdução ao Desenvolvimento Full Stack com a Deal",
          year: "2024",
          institution: "Dio",
          image: logoDio ,
            link: ""
        },
        // {
        //   title: "Full Stack Week",
        //   year: "2025",
        //   description: "Sistema de Auto Atendimento em React",
        //   institution: "Full Stack Club",
        //   image: courses // Usa a imagem importada
        // },
        {
          title: "Programa Start",
          year: "2023",
          description: "Introdução a Lógica de Programação I, II, e III (Java)",
          institution: "Capgemini",
          image: courses,
            link: ""
        },
        {
          title: "AWS Academy Cloud Foundations",
          year: "2020",
          description: "Fundamentos de Cloud AWS",
          institution: "Amazon Web Services Training and Certification",
          image: courses,
            link: ""
        },
        {
          title: "Entity Framework Core: Banco De Dados De Forma Eficiente",
          year: "2020",
          institution: "Alura",
          image: courses,
            link: ""
        },
        {
          title: "GIT E GITHUB Controle e compartilhe seu código",
          year: "2020",   
          institution: "Alura",
          image: courses,
            link: ""
        },
        {
          title: "V Prime Experts",
          year: "2020",   
          institution: "Alura",
          image: courses,
            link: ""
        },
        
      ];

    return (
        <section className="learnings">
             <div className='header-title'>
                                <div className="emphasis-title">
                                     <h3>CURSOS E CERTIFICADOS</h3>
                                </div>
                           </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                >
                {coursesData.map((course, index) => (
                    <SwiperSlide key={index}>
                        <Card title={course.title} description={course.description} image={course.image} year={course.year} institution={course.institution} link={course.link} />
                    </SwiperSlide>
                ))}
                </Swiper>
        </section>
    );
}
export default CarouselFormation;