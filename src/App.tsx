import React, { useState } from 'react';
import ArweaveWebWriter from './ArweaveWebWriter';

function AITab() {
  return (
    <iframe
      src="https://gpt.h2o.ai"
      title="AI"
      style={{ width: '100vw', height: '100vh', border: 'none' }}
    ></iframe>
  );
}

function StackEditTab() {
  return (
    <iframe
      src="https://stackedit.io/app"
      title="StackEdit"
      style={{ width: '100vw', height: '100vh', border: 'none' }}
    ></iframe>
  );
}

function ArweaveWebWriterTab() {
  return (
    <div>
      <ArweaveWebWriter />
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<string>('ai');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button
          style={{
            width: '33vw',
            height: '33vw',
            border: '2px solid',
            padding: '10px',
            backgroundColor: activeTab === 'stackedit' ? 'yellow' : 'black',
            color: activeTab === 'stackedit' ? 'red' : 'green',
          }}
          onClick={() => handleTabChange('stackedit')}
        >
          build
        </button>
        <button
          style={{
            width: '33vw',
            height: '33vw',
            border: '2px solid',
            padding: '10px',
            backgroundColor: activeTab === 'ai' ? 'yellow' : 'black',
            color: activeTab === 'ai' ? 'red' : 'green',
          }}
          onClick={() => handleTabChange('ai')}
        >
          research
        </button>
        <button
          style={{
            width: '33vw',
            height: '33vw',
            border: '2px solid',
            padding: '10px',
            backgroundColor: activeTab === 'arweave' ? 'yellow' : 'black',
            color: activeTab === 'arweave' ? 'red' : 'green',
          }}
          onClick={() => handleTabChange('arweave')}
        >
          save
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {activeTab === 'stackedit' && <StackEditTab />}
        {activeTab === 'arweave' && <ArweaveWebWriterTab />}
        {activeTab === 'ai' && <AITab />}
      </div>
    </div>
  );
}

export default App;

