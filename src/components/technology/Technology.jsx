import './technology.css';
import CardMain from '../cards-main/card-main.jsx';
import GridMain from '../grid-main/GridMain.jsx';

function Technology (){

     const tecsData = [
                              { title: "JS / TS", platform : "WEB" ,describe : ["Angular 8","React / React Native - Next.js","Nest.js (Prisma e Type ORM)"]},
                              { title: "C#/ASP.NET",platform : "WEB" ,describe : ["ASP.NET Core MVC e WEB API","Razor e Blazor","ASP.NETFramework(WebForms)","Entity Framework"]},
               { title: "JAVA", platform : "DESKTOP E MOBILE", describe : ["Java from Android (Atualizando)", "Java Swing from Desktop (Atualizando)"]},

                         { title: "JAVA", platform : "WEB ",describe : ["Spring Boot (Atualizando)", "JSP e SERVELET"]},
                     { title: "C#/.NET",platform : "DESKTOP" ,describe : [".NET Framework", "(WinForms)"]},

                    { title: "HTML CSS",platform : "WEB" ,describe : ["Tailwind  ", "Bootstrap, Material Design","Angular Material"]},
                    { title: "Python",platform : "WEB" ,describe : ["Django Rest Framework", "Django e MongoEngine"]},
                                        { title: "Relacional",platform : "BANCO" ,describe : ["SQL - SqlServer", "MySQL - MySQL Workbeanch","PostgreSQL/PostGIS - PgAdmin"]},
                                                            { title: "Não Relacional",platform : "BANCO" ,describe : ["NoSQL -MongoDB"]},
                                                                                { title: "Infraestrutura",platform : "" ,describe : ["Windows / Linux", "ISS Express, TomCat e GeoServer","Ubuntu, Debian, Docker, Vercel e AWS"]},
                                                                                                    { title: "IDEs",platform : "" ,describe : ["Visual Studio, VS Code", "Eclipse e Netbeans"]},
                                                                                                     { title: "Design",platform : "" ,describe : ["CorelDraw, Inkscape, Figma, Canvas", "Davinci Resolve"]},
                    
        ]



    return(
    <>
      <section className="technology">
               <div className='header-title'>
                    <div className="emphasis-title">
                         <h3>STACK DE TÉCNOLOGIAS</h3>
                    </div>
               </div>
           <GridMain listItems={tecsData} />
      </section>
    </>)
}
export default Technology;