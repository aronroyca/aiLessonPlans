import {useState} from "react";

function LandingPage() {
    const [signinUsername, setsigninUsername] = useState("")
    const [signinPassword, setsigninPassword] = useState("")

    async function signIn() {
        console.log('Signing in!')
        const res = await fetch("http://localhost:3030/signin", {
    mode: "cors",        
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
            body: JSON.stringify({
                username: signinUsername,
                passwoord: signinPassword
    }),
        })
        const json = await res.json();
        console.log(json)
    }

    return (
        <section>
            <h1>This is the homepage!</h1>
            <div id='signinForm' className="d-flex justify-content-center col-12">
            <form className="d-flex flex-column justify-content-center align-content-around" action="/signin" method="get"
                id="signinForm" onSubmit={e => {
                    e.preventDefault();
                    signIn();
            }}
            >
                <div className="my-3">
                    <label>Username:</label>
                    <input id="signinUsername" className="form-control" placeholder='Type you work email here...' type="text" name="signinUsername" value={signinUsername} onChange={e => setsigninUsername(e.target.value)}></input>
                    </div>
                <div className="my-3">
                    <label>Password:</label>
                    <input id="signinPassword" className="form-control" placeholder='Type you work password here...' type="text" name="signinPassword" value={signinPassword} onChange={e => setsigninPassword(e.target.value)}></input>
                </div>
               
                <button className="mb-3 btn btn-primary" type="submit">Sign In</button>
            </form>
        </div>
        </section>
        
    )
}

export default LandingPage