import React from 'react';

function NovelDetails({ novel, onBack }) {
  return (
    <div>
      <button onClick={onBack}>Back to List</button>
      <h2>{novel.title}</h2>
      <p><strong>Author:</strong> {novel.author}</p>
      <p><strong>Genre:</strong> {novel.genre}</p>
      <p><strong>Summary:</strong> {novel.summary}</p>
      <img src={novel.imageUrl} alt={novel.title} />
    </div>
  );
}

export default NovelDetails;
