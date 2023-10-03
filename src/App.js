
import './App.css';
// import background from "./fireworks.jpg";
import CountDown from './CountDown';

function App() {

  const newYear = new Date("Jan 1, 2024").getTime()
//   const img={
//     backgroundImage:
// `url(${background})`,
//     height :'100vh',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };

  return (
    <> 
        <div className='img'>
   
     <CountDown newYear={newYear}/>
     
     </div>
    </>

  );
}

export default App;
