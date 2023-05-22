import React, { useState } from 'react';

function StackEditTab() {
  return (
    <iframe
      src="https://stackedit.io/app"
      title="StackEdit"
      style={{ width: '100%', height: '100%', border: 'none' }}
    ></iframe>
  );
}

function ArweaveWebWriterTab() {
  return (
    <div>
      <h2>ArweaveWebWriter Component</h2>
      {/* Insert your ArweaveWebWriter component code here */}
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<string>('stackedit');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange('stackedit')}>StackEdit</button>
        <button onClick={() => handleTabChange('arweave')}>Arweave Web Writer</button>
      </div>
      <div style={{ marginTop: '20px' }}>
        {activeTab === 'stackedit' && <StackEditTab />}
        {activeTab === 'arweave' && <ArweaveWebWriterTab />}
      </div>
    </div>
  );
}

export default App;

