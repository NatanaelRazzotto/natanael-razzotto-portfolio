import { useState, useRef, useEffect } from 'react';
import perfilDev from './assets/3090CL35051.JPG';
import perfilpersonal from './assets/perfilnovo.jpeg';
import courses from './assets/courses.jpg';
import CarouselFormation from './components/carousel/CarouselFormation.jsx';
import Projects from './components/projects/Projects.jsx';
import Technology  from './components/technology/Technology.jsx';    
import Services from './components/services/Services.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Formation from './components/formation/Formation.jsx';
function App() {

      // Refs para os elementos Typed
      const typedEl = useRef(null);
      const typed2El = useRef(null);
      const typed3El = useRef(null);

    return (
         <>
             <header>
                <nav className="navbar">
                    <div className="logo">NR Portfólio</div>
                    <ul className="nav-links">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Tecnologias</a></li>
                        <li><a href="#">Aprendizados</a></li>
                        <li><a href="#">Contatos</a></li>
                    </ul>
                </nav>
            </header>
            
            <main>

                <section className="initial fundo-total">
                    
                      <h4>BEM VINDO AO PORTFÓLIO</h4>
                   <h1>NATANAEL RAZZOTTO</h1>
                    
                </section>    
                <section className="about">
                    <div className="content">
                        <img src={perfilpersonal} alt="Perfil Natanael Razzotto" />
                        <div className="inner-content">

                            <h1>Conheça um pouco sobre Natanael</h1>
                            <span ref={typed2El} className="typing-2"></span>
                            <p>Sou Desenvolvedor Full Stack com conhecimentos fundamentados em POO, voltado para as tecnologias Node.js, Java e .NET. Iniciei no mundo do desenvolvimento de software em 2018, seguindo minha formação em Java e .NET, me especializei em ASP.NET, com o qual estagiei. Em minha vida acadêmica, desenvolvi projetos em várias tecnologias, para Desktop, WEB e Mobile. Nos projetos que estive envolvido, sempre busquei o planejamento e a construção dos mesmos, levando em conta as ferramentas que melhor trariam resultados, não sendo uma barreira a dinamicidade e a inovação.
                            </p>
                        
                       </div>
                    </div>
                </section>
                
                 <Formation />
                 <CarouselFormation />
                 <Projects></Projects>
                 <Technology></Technology>
                 <Services></Services>
                 <Contacts></Contacts>                      
                               
                        
            </main>
            
            <footer>
                <p>&copy; 2025 Portfólio de Natanael Razzotto. Todos os direitos reservados.</p>
            </footer>
         </>
    )
   

}
export default App