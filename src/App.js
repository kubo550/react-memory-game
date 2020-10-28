import React, { useEffect, useState } from "react";
import { Board, Popup, readyArray, withDelay } from "./components";

const App = () => {
  const [items, setItems] = useState(readyArray);
  const [firstItem, setFirstItem] = useState(null);
  const [secondItem, setSecondItem] = useState(null);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (!!secondItem && !!firstItem) {
      if (firstItem.item === secondItem.item) {
        withDelay(() => {
          items.find(({ id }) => id === firstItem.id).playable = false;
          items.find(({ id }) => id === secondItem.id).playable = false;
        });
      }

      withDelay(() => {
        setFirstItem(null);
        setSecondItem(null);
      });

      setMoves(prev => prev + 1);
    }
  }, [firstItem, secondItem]);

  const handleClick = item => {
    if (!!secondItem || item.id === firstItem?.id) return;
    firstItem ? setSecondItem(item) : setFirstItem(item);
  };
  return (
    <>
      <Board
        firstItem={firstItem}
        secondItem={secondItem}
        items={items}
        handleClick={handleClick}
      />
      {items.every(item => item.playable === false) && <Popup moves={moves} />}
    </>
  );
};

export default App;
