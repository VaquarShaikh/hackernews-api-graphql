import { useEffect, useState } from "react";
import StoriesContainer from "./containers/StoriesContainer";
// import { StoriesContainer } from "./containers/StoriesContainer";
import { getStoryIds } from "./services/hnApi";

function App() {
  return (
    <div className="App">
      <p>
        <StoriesContainer />
      </p>
    </div>
  );
}

export default App;
