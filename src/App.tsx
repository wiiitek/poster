import { FC, CSSProperties } from 'react';

const App: FC = () => {
  const a4LandscapeStyle: CSSProperties = {
    width: '297mm',
    height: '210mm',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  };

  return (
    <div style={a4LandscapeStyle}></div>
  );
};

export default App;
