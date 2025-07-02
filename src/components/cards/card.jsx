import './card.css';
function Card({title,description,image,year,institution}) {
    return(<>
        <div className='card-info'>
            <div className="grid">
            <div className="item item1">JS</div>
            <div className="item item2">{year}</div>
            <div className="item item3">
                <div className='card-title'>

                    <p>Curso</p>
                    <h4 className='title'>{title}</h4>
                </div>
              
            </div>
            <div className="item item4">{institution}</div>
            </div>

        </div>
       
    </>)
}
export default Card;