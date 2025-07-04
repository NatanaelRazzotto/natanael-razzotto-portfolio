import './card.css';

function Card({title,description,image,year,institution,link}) {
    return(<>
        <div className='card-info'>
              <a href={link} >
            <div className="grid">
            <div className="item item1">
                  <img className='img-card-inst' src={image} alt="Perfil Natanael Razzotto" />
            </div>
            <div className="item item2">{year}</div>
            <div className="item item3">
                <div className='card-title'>

                    <p>Curso</p>
                    <h4 className='title'>{title}</h4>
                </div>
              
            </div>
            <div className="item item4">{institution}</div>
            </div>
</a>
        </div>
       
    </>)
}
export default Card;