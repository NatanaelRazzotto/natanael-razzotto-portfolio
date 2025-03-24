import { useState } from 'react'
import perfilDev from './assets/PERFIL.jpeg';
import courses from './assets/courses.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div className="scrool-up-btn">
            <ion-icon name="chevron-up-outline"></ion-icon>
        </div>
        <div className="navbar">
            <div className="max-width">
                <div className="logo"><a href="#">NRD<span> portfólio</span></a></div>
                <ul className="menu">
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#technology">Tecnologias</a></li>
                    <li><a href="#teams">Cursos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
                <div className="menu-btn">
                    <ion-icon name="menu-outline"></ion-icon>   
                </div>
            </div>
        </div>
        {/* <!--home inicio--> */}
        <section className="home" id="home">
            
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Olá, meu nome é</div>
                    <div className="text-2">Natanael Razzotto</div>
                    <div className="text-3">sou <span className="typing"></span></div>
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
                <div className="text">
                  Sou o Natanael, <span className="typing-2"></span>
                </div>
                <p>
                  Sou Desenvolvedor Full Stack com conhecimentos fundamentados em POO, voltado para as tecnologias C#, Java e Angular. Iniciei no mundo do desenvolvimento de software há 5 anos, seguindo minha formação em Java e .NET, me especializei em ASP.NET, com o qual estagiei. Em minha vida acadêmica, desenvolvi projetos em várias tecnologias, de Desktop à WEB. Nos projetos que estive envolvido, sempre busquei o planejamento e a construção dos mesmos, levando em conta as ferramentas que melhor trariam resultados, não sendo uma barreira a dinamicidade e a inovação.
                  <br /><br />
                </p>
                <div className="text">
                  Formação Acadêmica: <span className="typing-3"></span>
                </div>

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
                <a href="#">Download CV</a>   
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
          <p>Planejamento, Estruturação de Requisitos, Teste, Diagramas UML.</p>
        </div>
      </div>
      <div className="card">
        <div className="box">
          <ion-icon name="brush-outline"></ion-icon>
          <div className="text">Design</div>
          <p>Criação de Interface, Imagens, Animações e Vídeos.</p>
        </div>
      </div>
    </div>                
  </div>
</section>

        {/* <!--sessao serviços--> */}
        <section className="services" id="technology">
            <div className="max-width">
                <h2 className="title">Tecnologias</h2>
                <div className="serv-content">                 
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
                            <p>HTML, CSS</p>                           
                            <p>Bootstrap, Material Design</p>      
                            <p>Angular Material</p>                      
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">JAVA</div>              
                            <p>Java Swing from Desktop (Atualizando)</p> 
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">JAVA WEB</div>              
                            <p>JSP e SERVELET (Atualizando)</p> 
                       </div>
                    </div>
                    <div className="card">
                        <div className="box">          
                            <div className="text">JavaScript/TypeScript</div>              
                            <p>Angular 8</p> 
                            <p>Node.JS</p> 
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
                            <p>Ubuntu, Debian, Docker e AWS</p>  
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
      <div className="carousel owl-carousel">
        <div className="card">
          <div className="box">
            <img src={courses} alt="Curso Programa Start" />
            <div className="text">Programa Start</div>
            <p>
              Realizado no ano de 2023 <br />
              Introdução a Lógica de Programação I, II, e III (Java).<br />
              Capgemini
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={courses} alt="Curso AWS Academy Cloud Foundations" />
            <div className="text">AWS Academy Cloud Foundations</div>
            <p>
              Realizado no ano de 2020 <br />
              Amazon Web Services Training and Certification
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={courses} alt="Curso Entity Framework Core" />
            <div className="text">Entity Framework Core: Banco De Dados De Forma Eficiente</div>
            <p>
              Realizado no ano de 2020 <br />
              Alura
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={courses} alt="Curso GIT e GITHUB" />
            <div className="text">GIT E GITHUB Controle e compartilhe seu código</div>
            <p>
              Realizado no ano de 2020 <br />
              Alura
            </p>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <img src={courses} alt="Curso V Prime Experts" />
            <div className="text">V Prime Experts</div>
            <p>
              Realizado no ano de 2020 <br /><br />
              Prime Control
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

         <section className="contact" id="contact">            
            <div className="max-width">
                <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">
                        <div className="text">Fale Comigo</div>
                        <p>Para entrar em contato comigo, você pode optar pelo envio de e-mail. Mas caso opte por telefone, sugiro o numero fixo. Desde já grato pelo interesse!</p>   
                        <div className="icons">
                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Nome</div>
                                   <div className="sub-title"> Natanael Orthey Zanoni Razzotto</div>                                   
                                </div>
                            </div>    
                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Telefone (Preferencial)</div>
                                    <div className="sub-title">(41) 3589-1640</div>                                   
                                </div>
                            </div>    
                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Celular (WhatsApp)</div>
                                    <div className="sub-title">(41) 99238-1469</div>                                   
                                </div>
                            </div>
                            <div className="row">
                                <ion-icon name="person-outline"></ion-icon>
                                <div className="info">
                                    <div className="head">Email</div>
                                        <div className="sub-title">natanael8447@outlook.com</div>                                   
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
            <span>Criado por NRD - <a href="#">Natanael Razzotto</a> em 2023</span>
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
