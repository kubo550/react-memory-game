import React from 'react'

const Popup = ({ moves }) => {
    return (
        <div className="popup-container">
            <div className="popup">
                <h2>Wygrałeś!</h2>
                <h3>Zajęło ci tylko {moves} ruchów</h3>
                <button>New Game</button>
            </div>
        </div>
    )
}

export default Popup
