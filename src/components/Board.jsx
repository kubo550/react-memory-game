import React from 'react'

const Board = ({ items, handleClick, firstItem, secondItem }) => {
    return (
        <div className='board'>
            {items.map(data => {
                const { id, item, playable } = data;
                const value = id === firstItem?.id || id === secondItem?.id;
                return (
                <div
                    key={id}
                    className={playable ? "cell " : "cell hidden"}
                    onClick={() => handleClick(data)}
                >
                    {value ? item : "kliknij mnie"}
                </div>
                );
            })}
        </div>
    )
}

export default Board
