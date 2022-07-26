import { useState } from 'react';
//components
import Navigator from './components/Navigator';
import SelectPost from './components/SelectPost';
import SelectType from './components/SelectType';
//Pages
import Daily from './pages/Daily_Page';
import FrontEnd from './pages/FrontEnd_Page';
import BackEnd from './pages/BackEnd_Page';
//Redux
import { useSelector } from 'react-redux';
//Css & Icons
import './App.css';
import { GrPowerReset } from 'react-icons/gr';

function App() {
  //Default is Daily
  const [selectPost, setSelectPost] = useState('Daily');
  const [selectType, setSelectType] = useState('');

  const data = useSelector(state => state);
  console.log(data);

  const getSelectPostValue = value => {
    setSelectPost(prev => (prev = value));
  };

  const getSelectType = value => {
    setSelectType(prev => (prev = value));
  };
  const resetSelectValue = () => {
    setSelectPost('Daily');
    setSelectType('');
  };

  return (
    <div className="App">
      <header className="w-screen">
        {/* Navigation */}
        <Navigator />
        {/* Select Menu */}
        <div className="flex gap-3 ml-5 mt-5 items-center">
          <label htmlFor="post" className="font-bold">
            Posts:
          </label>
          <SelectPost
            getSelectPostValue={getSelectPostValue}
            selectPost={selectPost}
          />
          <SelectType
            selectPost={selectPost}
            selectType={selectType}
            getSelectType={getSelectType}
          />
          <GrPowerReset onClick={resetSelectValue} className="cursor-pointer" />
        </div>
      </header>
      <main className="h-screen">
        {/* Render Page */}
        {selectPost === 'Daily' ? <Daily /> : ''}
        {selectPost === '前端' ? <FrontEnd /> : ''}
        {selectPost === '後端' ? <BackEnd /> : ''}
      </main>
    </div>
  );
}

export default App;
