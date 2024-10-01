function Child(props) {
    return(
    <div className="child">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Child: {props.isChild ? "Yes" : "No"}</p>

    </div>
    );

}

export default Child
