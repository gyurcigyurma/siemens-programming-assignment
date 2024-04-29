import React, { useEffect, useState } from 'react';
import MainLayout from '@/layout/Layout';
import { useFetchComments } from './hooks/useFetchComments';
import { renderContent } from './layout/RenderContent';
import '../public/index.css';

const App = () => {
  const fetchComments = useFetchComments();

  useEffect(() => {
    fetchComments();
  }, []);

  const [selectedKey, setSelectedKey] = useState('comments');
  const handleMenuClick = (e: { key: React.SetStateAction<string> }) => {
    setSelectedKey(e.key);
  };

  const renderTabContent = renderContent(selectedKey);

  return (
    <MainLayout
      renderContent={renderTabContent}
      handleMenuClick={handleMenuClick}
      selectedKey={selectedKey}
    />
  );
};

export default App;
