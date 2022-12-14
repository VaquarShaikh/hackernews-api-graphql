import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/hnApi";
import {
  StoryMeta,
  StoryMetaElement,
  StoryTitle,
  StoryWrapper,
} from "../styles/StoryStyles";
import { mapTime } from "../mappers/mapTime";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid>
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement>
          {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime()}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : (
    <p>Mujhe kya , mai toh samosa hu :)</p>
  );
};
