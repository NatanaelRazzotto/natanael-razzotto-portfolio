import './cards-projects.css';

function CardsProjects({title,description,image}) {
    return(<>
        <div className='card-projects'>
            <div className="grid">
            <div className="item item1">
                  <img className='img-card-inst' src={image} alt="Perfil Natanael Razzotto" />
            </div>           
            <div className="item item3">
                <div className='card-title'>
                 
                    <h4 className='title'>{title}</h4>
                       <p>{description}</p>
                </div>
              
            </div>
         
            </div>

        </div>
       
    </>)
}
export default CardsProjects;