import './App.css';
import BookRoom from './components/BookRoom';
import RoomDetails from './components/RoomDetails';
import Search from './components/Search';
import TimeSlots from './components/TimeSlot';

function App() {
  return (
    <div className="App">
      <div className='mb-6'>
        <Search />
      </div>
      <div className='flex gap-4'>
        <RoomDetails />
        <div className='border border-2 border-black'>
          <BookRoom/>
          <TimeSlots />
        </div>
      </div>
    </div>
  );
}

export default App;
