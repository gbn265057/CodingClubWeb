import yop from "./assets/pixilart-drawing.png"

function Contact() {
    function Submit(e) {
        const formElement = document.querySelector("form");
        e.preventDefault();
        alert("Submitted Successfully!")
        const formData = new FormData(formElement);
        fetch("https://script.google.com/macros/s/AKfycbxP4ggID7ccmouY4pRtwjoqzebEkR3zVjheXnx8LCGm6-T1dqPUc5fr95RvFFzRCw5xLQ/exec",{
            method:"POST",
            body: formData
    });

    }

    return(
        <div className = "contact">
            <div className="pre">
            <h2>Any ideas for a future coding club project, or just want to send a message? Submit here!</h2>
            <img className = "yop"src ={yop}></img>
            </div>
            <form className = "form" onSubmit={(e)=>Submit(e)}>
                <input className = "oneline" placeholder="Name" name="Name" type="text"></input>
                <input className = "oneline" placeholder="Email" name="Email" type="email"></input>
                <input className = "multiline" placeholder="Message" name="Message" type="text"></input>
                <input className = "output" type="submit" />
            </form>
        </div>
    );
}

export default Contact