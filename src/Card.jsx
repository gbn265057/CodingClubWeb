import profilePic from './assets/download.jpg'

function Card(pops) {

    return(
        <div className="card">
            <h2 className ="card-title"> {pops.name} </h2>
            <p className = "card-text">{pops.subtext}</p>
        </div>
    );
}

export default Card