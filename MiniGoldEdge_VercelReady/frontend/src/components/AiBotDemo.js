
import React, { useState } from 'react';
function AiBotDemo() {
  const [messages, setMessages] = useState(['Hello! I am NeuroEdge AI demo.']);
  return (
    <div>
      <h3>AI Bot Demo</h3>
      <div>{messages.map((msg, i) => <p key={i}>{msg}</p>)}</div>
      <button onClick={() => setMessages([...messages, 'Demo response'])}>Send Demo Message</button>
    </div>
  );
}
export default AiBotDemo;
