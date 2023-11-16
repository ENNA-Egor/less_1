export function Card (props){
    const {id, name, size, removeCard} = props;

    return <h2>{name} {size}
            <button
                onClick = {()=> removeCard(id)}>
                    Delete
            </button>
    </h2>
}


