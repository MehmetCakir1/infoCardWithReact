import "./list.css";
import Person from "./Person";

const List = ({people}) => {

    return (
    <div className="card-container"  >
        {
            people.map((item)=>{
                // console.log(item);
                return(
                    <div key={item.id} >
                        <Person data={item}/>
                    </div>
                )
            })
        }
    </div>
    )
}

export default List