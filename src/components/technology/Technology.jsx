import './Technology.css';
import CardMain from '../cards-main/card-main.jsx';
import GridMain from '../grid-main/GridMain.jsx';

function Technology (){

     const tecsData = [
               { title: "JAVA", platform : "WEB", describe : ["Java from Android (Atualizando)", "Java Swing from Desktop (Atualizando)"]},
                    { title: "JAVA", platform : "WEB" ,describe : ["Java from Android (Atualizando)", "Java Swing from Desktop (Atualizando)"]},
                         { title: "JAVA", platform : "WEB E DESCK",describe : ["Java from Android (Atualizando)", "Java Swing from Desktop (Atualizando)"]},
                     { title: "JAVA",platform : "WEB" ,describe : ["Java from Android (Atualizando)", "Java Swing from Desktop (Atualizando)"]}
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