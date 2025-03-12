import "../css/RetroButton.css"
export default function({logo, link, text}){

    return (
        <>
            <button className="retro_button" onClick={() => window.location.href = link}>
                <div className="logo_container">
                    <img src = {logo} alt="logo" width="50"/>
                        <div className="logo_text">{text}</div>
                </div>
            </button>
        </>
    )
}