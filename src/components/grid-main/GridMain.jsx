import './grid-main.css';
import CardMain from '../cards-main/card-main.jsx';

function GridMain ({listItems}){
    return(
    <>
        <div className="grid-main">
              {listItems.map((course, index) => (
                    <CardMain  key={index} title={course.title} descriptions={course.describe} image="aaa" plataform={course.platform} />
            ))}
          
        </div>

    </>)
}
export default GridMain;