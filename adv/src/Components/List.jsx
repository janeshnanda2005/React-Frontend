

function List(props){


    const category = props.category;
    const itemlist = props.items;

    // values.sort((a,b) => a.name.localeCompare(b.name));
    // const lowcal = values.filter(va => va.calories < 100);

    // values.sort((a,b) => a.calories - b.calories)
    // values.sort((a,b) => b.calories - a.calories)


    const listitems = itemlist.map(va => <li key={va.id}>{va.name}:&nbsp;
                                            <b>{va.calories} / per fruit</b></li>)

    return(<>
        <h3 className = "list-category" >{category}</h3>
        <ol className = "list-items">{listitems}</ol>
        </>);
}

export default List; 