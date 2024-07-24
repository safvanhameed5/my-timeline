// src/components/Story.js

import React from 'react';
import './Story.css';

const Story = () => {
  const story = {
    title: 'Hey',
    content: `
      I used to like a girl in our college. You know her—maybe you know her more than anyone. We were really good companions. I don't want to use the word "friends." We used to talk a lot and call each other. I even went to church with her! Oh God, don't get me started on that. And then I was under the spell of love. You can guess the rest.

      Sometimes, out of the blue, I get hit by flashbacks of those moments we spent together. It’s like my mind takes a little trip back in time. The point is, I still like talking to her, and sometimes I do all sorts of weird stuff to get her attention—just like this. And sometimes she really wants to kill me, but I know she can't because she's an angel inside a witch—a very bloody witch.
    `
  };

  return (
    <div className="story-container">
      <h1>{story.title}</h1>
      <p>{story.content}</p>
    </div>
  );
};

export default Story;
