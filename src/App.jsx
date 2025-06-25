import { useState, useRef, useEffect } from 'react';
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import perfilDev from './assets/3090CL35051.JPG';
import courses from './assets/courses.jpg';
import './App.css';

function App() {
  const [navSticky, setNavSticky] = useState(false);
  const [scrollUpVisible, setScrollUpVisible] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  
  // Refs para os elementos Typed
  const typedEl = useRef(null);
  const typed2El = useRef(null);
  const typed3El = useRef(null);

  
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
      title: "Introduction to .NET web development with ASP.NET Core",
      year: "2025",
      institution: "MICROSOFT LEARNING ",
      image: courses 
    },
        {
      title: "Build a web API with minimal API, ASP.NET Core, and .NET ",
      year: "2025",
      institution: "MICROSOFT LEARNING ",
      image: courses 
    },
 
    {
      title: "Introdução a Plataforma Java",
      year: "2024",
      institution: "Dio",
      image: courses 
    },
    {
      title: "Introdução ao Desenvolvimento Full Stack com a Deal",
      year: "2024",
      institution: "Dio",
      image: courses 
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
      image: courses
    },
    {
      title: "AWS Academy Cloud Foundations",
      year: "2020",
      description: "Fundamentos de Cloud AWS",
      institution: "Amazon Web Services Training and Certification",
      image: courses
    },
    {
      title: "Entity Framework Core: Banco De Dados De Forma Eficiente",
      year: "2020",
      institution: "Alura",
      image: courses
    },
    {
      title: "GIT E GITHUB Controle e compartilhe seu código",
      year: "2020",   
      institution: "Alura",
      image: courses
    },
    {
      title: "V Prime Experts",
      year: "2020",   
      institution: "Alura",
      image: courses
    },
    
  ];

  useEffect(() => {
    // Configuração do scroll listener
    const handleScroll = () => {
      setNavSticky(window.scrollY > 20);
      setScrollUpVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Configuração do Typed.js
    const typed = new Typed(typedEl.current, {
      strings: ["Desenvolvedor de Sistemas","Desenvolvedor Full Stack","Desenvolvedor C#", "Desenvolvedor Java", "Desenvolvedor Node.js", "Fotógrafo"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    const typed2 = new Typed(typed2El.current, {
      strings: ["Desenvolvedor Full Stack","Desenvolvedor Node.js","Desenvolvedor Next.js","Desenvolvedor Nest.js", "Desenvolvedor Angular", "Desenvolvedor Java", "Desenvolvedor C#" ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    const typed3 = new Typed(typed3El.current, {
      strings: ["Bacharel em Sistemas de Informação","de 2018 à 2022","na UNIBRASIL"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      typed.destroy();
      typed2.destroy();
      typed3.destroy();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const carouselOptions = {
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  return (
    <>
      <div>
      <div className={`scroll-up-btn ${scrollUpVisible ? 'show' : ''}`} onClick={scrollToTop}>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </div>
        <div className={`navbar ${navSticky ? 'sticky' : ''}`}>
        <div className="max-width">
                <div className="logo"><a href="#">NRD<span> portfólio</span></a></div>
              
                <div className="menu-btn" onClick={toggleMenu}>
                <ion-icon name={menuActive ? "close-outline" : "menu-outline"}></ion-icon>
              </div>
              <ul className={`menu ${menuActive ? 'active' : ''}`}>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#technology">Tecnologias</a></li>
                    <li><a href="#teams">Cursos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </div>
        </div>
        {/* <!--home inicio--> */}
        <section className="home" id="home">
            
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Olá, meu nome é</div>
                    <div className="text-2">Natanael Razzotto</div>
                    <div className="text-3">Sou <span ref={typedEl} className="typing"></span></div>
                    <a href="#contact">Contactar</a>
                    <a href="https://github.com/NatanaelRazzotto">GitHub</a>
                </div>
            </div>
        </section>
        {/* <!--sessao sobre--> */}
        <section className="about" id="about">
          <div className="max-width">
            <h2 className="title">Sobre</h2>
            <div className="about-content">
              <div className="column left">
                <img src={perfilDev} alt="Perfil" />
              </div>
              <div className="column right">
              <div className="text">Sou o Natanael, <span ref={typed2El} className="typing-2"></span></div>
                <p>
                  Sou Desenvolvedor Full Stack com conhecimentos fundamentados em POO, voltado para as tecnologias Node.js, Java e .NET. Iniciei no mundo do desenvolvimento de software em 2018, seguindo minha formação em Java e .NET, me especializei em ASP.NET, com o qual estagiei. Em minha vida acadêmica, desenvolvi projetos em várias tecnologias, para Desktop, WEB e Mobile. Nos projetos que estive envolvido, sempre busquei o planejamento e a construção dos mesmos, levando em conta as ferramentas que melhor trariam resultados, não sendo uma barreira a dinamicidade e a inovação.
                  <br /><br />
                </p>
                <div className="text">Formação Acadêmica: <span ref={typed3El} className="typing-3"></span></div>

                {/* Comentário em JSX */}
                {/* <div className="text">
                  Bacharel em <span className="typing-3">Sistemas de Informação</span>
                  <p>2018-2022 - UNIBRASIL.</p>
                </div> */}

                <p>
                  Seguindo padrões de projeto e as normativas da UML, desenvolvi projetos durante minha formação com base nas tecnologias: .NET (WinForms e Blazor), Java (Desktop e WEB) e JavaScript (Node). Integrando bancos SQL e NoSQL, com base em ORMs e SGBDs.
                  <br /><br />
                  Disciplinas Acadêmicas Principais: Análise de Sistemas, Gerência de Projetos, 
                  Fundamentos de Economia, Fundamentos de Administração, Tópicos Avançados de Estrutura de Dados, Tópicos Avançados de Sistemas de Banco de Dados, Tópicos Avançados em Redes de Computadores.
                  <br /><br />
                  No ano de 2022, construí e entreguei em meu TCC um sistema chamado **SIGUI** (Sistema De Informações Geográficas Urbanas de Infraestrutura), utilizando Angular, Django Rest, Mongoengine, PostGIS, MongoDB, Docker, Ubuntu e GeoServer.
                  <br /><br />
                  <strong>Conquista Principal:</strong> Recebi a aprovação e nota **10** em meu TCC.
                </p>
                <a href="https://www.linkedin.com/in/natanaelrazzotto/">Linkedin</a> 
                <a href="https://drive.google.com/file/d/1aPIcwdovrfL1ObZxNdLghtdRcjSpqVsP/view?usp=sharing">Currículo</a>   
              </div>
            </div>
          </div>
        </section>

        {/* <!--sessao serviços--> */}
<section className="services" id="services">
  <div className="max-width">
    <h2 className="title">Serviços</h2>
    <div className="serv-content">
      <div className="card">
        <div className="box">
          <ion-icon name="brush-outline"></ion-icon>
          <div className="text">Aplicações WEB</div>
          <p>Desenvolvimento Front-end e Back-end, de sites e aplicativos responsivos para diversas plataformas.</p>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <ion-icon name="brush-outline"></ion-icon>
          <div className="text">Aplicações DESKTOP</div>
          <p>Aplicativos para Windows / Linux, com base em tecnologia .NET ou Java para o Front-end e Back-end.</p>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <ion-icon name="brush-outline"></ion-icon>
          <div className="text">Aplicações MOBILE</div>
          <p>Aplicativos para Android, com base em tecnologia Java, React-Native ou Quasar.</p>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <ion-icon name="brush-outline"></ion-icon>
          <div className="text">Banco de dados</div>
          <p>Construção da base de dados com tecnologias SQL e NoSQL.</p>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <ion-icon name="brush-outline"></ion-icon>
          <div className="text">Infraestrutura</div>
          <p>Servidor Linux e gerenciamento de Cloud AWS.</p>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <ion-icon name="brush-outline"></ion-icon>
          <div className="text">Projetos</div>
          <p>Planejamento, Estruturação de Requisitos, Teste, Diagramas UML. </p>
        </div>
      </div>
     
    </div>                
  </div>
</section>

        {/* <!--sessao serviços--> */}
        <section className="tec" id="technology">
            <div className="max-width">
                <h2 className="title">Tecnologias</h2>
                <div className="serv-content">                 
                <div className="card">
                        <div className="box">          
                            <div className="text">JAVA</div>  
                            <p>Java from Android (Atualizando)</p>             
                            <p>Java Swing from Desktop (Atualizando)</p> 
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">JavaScript/TypeScript</div>              
                            <p>Angular 8</p>                         
                            <p>React - Next.js</p> 
                            <p>Nest.js (Prisma e Type ORM)</p>
                       </div>
                    </div>
                  
                    <div className="card">
                        <div className="box">          
                            <div className="text">JAVA WEB</div> 
                            <p>Spring Boot (Atualizando)</p>              
                            <p>JSP e SERVELET </p> 
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">C#/.NET</div>              
                            <p>.NET Framework</p>   
                            <p>(WinForms)</p>                             
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">C#/ASP.NET</div>              
                            <p>ASP.NET Framework (WebForms)</p>   
                            <p>(Atualizando) <br />ASP.NET Core MVC e WEB API </p>    
                            <p>Razor e Blazor </p>  
                            <p>Entity Framework </p>  
                        </div>
                    </div>
                   
                    <div className="card">
                        <div className="box">   
                        <div className="text">HTML, CSS</div>                              
                            <p>Tailwind</p>                       
                            <p>Bootstrap, Material Design</p>      
                            <p>Angular Material</p>                      
                        </div>
                    </div>
                    
                   
                    <div className="card">
                        <div className="box">          
                            <div className="text">Python WEB</div>              
                            <p>Django Rest Framework</p>    
                            <p>Django e MongoEngine</p>                          
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">Banco Relacional</div>            
                            <p>SQL - SqlServer</p>            
                            <p>MySQL - MySQL Workbeanch</p>            
                            <p>PostgreSQL/PostGIS - PgAdmin</p>                          
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">Banco Não Relacional</div>            
                            <p>NoSQL -MongoDB</p>           
  
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">Infraestrutura</div>            
                            <p>Windows / Linux </p> 
                            <p>ISS Express, TomCat e GeoServer</p> 
                            <p>Ubuntu, Debian, Docker, Vercel e AWS</p>  
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">IDEs</div>            
                            <p>Visual Studio, VS Code</p> 
                            <p>Eclipse e Netbeans</p>
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">Design</div>            
                            <p>CorelDraw, Inkscape, Figma, Canvas</p> 
                            <p>Filmora, Shotcut</p>
                            </div>
                    </div>

                </div>                
            </div>
        </section>
           {/* <!-- sessao especialidades
           <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">Especialidades </h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">Minhas Habilidades e experiencias </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vitae architecto, ipsum provident accusamus amet quia sunt officia autem. Dignissimos!</p>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>93%</span>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </section> --> */}
        {/* <!--sessao sobre--> */}
        <section className="teams" id="teams">
  <div className="max-width">
    <h2 className="title">Meus Cursos</h2>
    <div className="teams-content">
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
      <div className="card">
        <div className="box">
          <img className="cardImg" src={course.image} alt={course.title} />
          <div style={{color:"#d35704"}} className="text">{course.title}</div>
          <p style={{color:"#ff970f"}}>{course.year}<br/></p>
          <p>{course.description ? course.description : ""}<br/>{course.institution}</p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  </div>
</section>

         <section className="contact" id="contact">            
            <div className="max-width">
                <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">                
                        <p>Para entrar em contato comigo, você pode optar pelo envio de e-mail. Mas caso opte por telefone, sugiro o contato via WhatsApp. Desde já grato pelo interesse!</p>   
                        <div className="icons">
                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Nome</div>
                                   <div className="sub-title"> Natanael Orthey Z. Razzotto</div>                                   
                                </div>
                            </div>                                 
                            <div className="row">
  <ion-icon name="person-outline"></ion-icon>
  <div className="info">
    <div className="head">Celular (WhatsApp)</div>
    <div className="sub-title">(41) 99238-1469</div> 
    <div className="whatsapp-btn">
      <a
        href={`https://wa.me/5541992381469?text=Olá! Obrigado por entrar em contado! Vamos conversar!?`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Chamar no WhatsApp
      </a>
    </div>
  </div>
</div>

                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Email</div>
                                        <div className="sub-title">natanaelrazzottodev@gmail.com
                                        </div>                                   
                                </div>                            
                            </div> 
                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Endereço</div>
                                        <div className="sub-title">Jardim Bela Vista, Piraquara - PR</div>                                   
                                </div>                            
                            </div>                            
                                  
                    </div>
                </div>
                 {/* <!--fim da coluna left-->     
                <!-- <div className="column right">
                    <div className="text">Mensagem</div>
                    <form action="#">
                        <div className="fields">
                            <div className="field name">
                                <input type="text" placeholder="Nome" required>
                            </div>
                            <div className="field email">
                                <input type="email" placeholder="email" required>
                            </div>
                        </div>
                        <div className="field">
                            <div className="field">
                                <input type="text" placeholder="Sobrenome" required>
                            </div>
                            <div className="field textarea">
                               <textarea cols="30" rows="10" placeholder="Escrever..." required></textarea>
                            </div>
                            <div className="button">
                                <button type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div> --> */}
                </div>
            </div>
        </section>
        {/* <!--sessãoi rodape--> */}
        <footer>
            <span>Criado em React por NRD - <a href="#">Natanael Razzotto</a> - 2025</span>
        </footer>
        
      </div>

    
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
