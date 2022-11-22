import MainPage from './Pages/MainPage';
import { StudentContext } from './Context/StudentContext'
import { useMemo, useState } from 'react';


function App() {
  const [studentsContext, setStudentsContext] = useState('hello ctx')

  const providerValue = useMemo(() => ({studentsContext, setStudentsContext}), [studentsContext, setStudentsContext]);

  return (
    <div className="App">
      <StudentContext.Provider value={providerValue}>
        <MainPage />
      </StudentContext.Provider>
    </div>
  );
}

export default App;
