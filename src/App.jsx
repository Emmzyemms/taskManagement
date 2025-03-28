import React, { useState } from "react";
import Header from "./Components/Header";
import Center from "./Components/Center";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "./redux/boardsSlice";
import EmptyBoard from "./Components/EmptyBoard";

const App = () => {
  const dispatch = useDispatch();

  const boards = useSelector((state) => state.boards);
  const activeBoard = boards.find((board) => board.isActive);

  if ((!activeBoard && boards, length > 0)) {
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
  }

  const [boardModalOpen, setBoardModalOpen] = useState(false);

  return (
    <div className="overflow-hidden overflow-x-scroll">
      <>
        {boards.length > 0 ? (
          <>
            {/* Header Section */}
            <Header
              boardModalOpen={boardModalOpen}
              setBoardModalOpen={setBoardModalOpen}
            />

            {/* Center section */}
            <Center
              boardModalOpen={boardModalOpen}
              setBoardModalOpen={setBoardModalOpen}
            />
          </>
        ) : (
          <>
            <EmptyBoard type="add" />
          </>
        )}
      </>
    </div>
  );
};

export default App;
