import { useState, useRef, useEffect } from 'react';
import perfilDev from './assets/3090CL35051.JPG';

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
                    
                      <h2>Natanael Razzotto</h2>
                    <p>O fundo se expande 100%, mas o conteúdo segue centralizado.</p>
                    
                </section>    
                <section className="about">
                    <div className="content">
                        <img src={perfilDev} alt="Perfil Natanael Razzotto" />
                        <div className="inner-content">

                            <h1>Me chamo Natanael Razzotto</h1>
                            <span ref={typed2El} className="typing-2"></span>
                            <p>Sou Desenvolvedor Full Stack com conhecimentos fundamentados em POO, voltado para as tecnologias Node.js, Java e .NET. Iniciei no mundo do desenvolvimento de software em 2018, seguindo minha formação em Java e .NET, me especializei em ASP.NET, com o qual estagiei. Em minha vida acadêmica, desenvolvi projetos em várias tecnologias, para Desktop, WEB e Mobile. Nos projetos que estive envolvido, sempre busquei o planejamento e a construção dos mesmos, levando em conta as ferramentas que melhor trariam resultados, não sendo uma barreira a dinamicidade e a inovação.
                            </p>
                        
                       </div>
                    </div>
                </section>
                 <section className="formation">
                     <div className="content">
                          <div className=" emphasis inner-content">                          
                            <img src={perfilDev} alt="Perfil Natanael Razzotto" />

                            <h3>Bacharel em Sistemas de Informação</h3>
                            <p> 2018 - 2022 </p>
                        </div>
                         <div className="inner-content">
                            <div className="emphasis-title">
                                <h3>UNIBRASIL - CENTRO UNIVESITÁRIO DO BRASIL</h3>
                            </div>
                            <p>Seguindo padrões de projeto e as normativas da UML, desenvolvi projetos durante minha formação com base nas tecnologias: .NET (WinForms e Blazor), Java (Desktop e WEB) e JavaScript (Node). Integrando bancos SQL e NoSQL, com base em ORMs e SGBDs.</p>
                            <p>  Disciplinas Acadêmicas Principais: Análise de Sistemas, Gerência de Projetos, Fundamentos de Economia, Fundamentos de Administração, Tópicos Avançados de Estrutura de Dados, Tópicos Avançados de Sistemas de Banco de Dados, Tópicos Avançados em Redes de Computadores.</p>
                       </div>
                      
                    </div>
                 </section>
                        <section className="services"></section>
                        <section className="projects"></section>
                            <section className="technology"></section>
                                <section className="learnings"></section>
                                <section className="contacts"></section>
            </main>
            
            <footer>
                <p>&copy; 2025 Portfólio de Natanael Razzotto. Todos os direitos reservados.</p>
            </footer>
         </>
    )
   

}
export default App