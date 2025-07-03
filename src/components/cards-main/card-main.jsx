import './card-main.css';
function CardMain({title,descriptions,plataform,image}) {
    return(<>
        <div className='card-main-info'>
            <div className="grid-main-card">
            <div className="item item1">{title}</div>
            <div className="item item2">{plataform}</div>
            <div className="item item3">
                <div className='card-title'>
                    {descriptions.map((course, index) => (
                         <p key={index}>{course}</p>
                    ))}
     
                </div>
              
            </div>
            </div>

        </div>
       
    </>)
}
export default CardMain;