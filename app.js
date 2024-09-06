import React, { useState } from 'react';
import UploadNovelForm from './UploadNovelForm';
import NovelList from './NovelList';
import NovelDetails from './NovelDetails';
import './App.css';

function App() {
  const [view, setView] = useState('home'); // views: 'home', 'upload', 'details'
  const [novels, setNovels] = useState([]);
  const [selectedNovel, setSelectedNovel] = useState(null);

  const handleAddNovel = (novel) => {
    setNovels([...novels, novel]);
    setView('home');
  };

  const handleSelectNovel = (novel) => {
    setSelectedNovel(novel);
    setView('details');
  };

  return (
    <div className="App">
      {view === 'home' && <NovelList novels={novels} onSelect={handleSelectNovel} onUploadClick={() => setView('upload')} />}
      {view === 'upload' && <UploadNovelForm onAddNovel={handleAddNovel} />}
      {view === 'details' && <NovelDetails novel={selectedNovel} onBack={() => setView('home')} />}
    </div>
  );
}

export default App;
