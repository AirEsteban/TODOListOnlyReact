function TODOlist(props){

    return (
        <ul>
            {
                props.TODOItems.map((it) => {
                    return <li key={it.id}>{it.text}</li>;
                })
            }
        </ul>
    );
} 
export default TODOlist;