import Yip from "./assets/pixilart-drawing.png"

function Center() {
    return (
        <div className = "center container">
            <img className = "yippee"src={Yip}></img>
            <div className="center-text">
                <h1>Code the Future.</h1>
                <p>Welcome to GBN's Coding Club! We meet on <b>Mondays, 3:15-4:30 in room A236 </b> :3</p>
            </div>
        </div>
    );
}

export default Center