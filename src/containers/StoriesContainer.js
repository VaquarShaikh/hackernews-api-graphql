import React, { useEffect, useState } from "react";
import { getStory, getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import {
  StoriesContainerWrapper,
  GlobalStyle,
} from "../styles/StoriesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

function StoriesContainer() {
  const [storyIds, setStoryIds] = useState([]);

  const test = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));

    // clean up
  }, []);

  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker news api</h1>
        {storyIds.map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
}

export default StoriesContainer;
