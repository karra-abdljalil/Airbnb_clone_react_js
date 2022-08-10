import {motion} from "framer-motion"
import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Box from './components/Box';
import Footer from "./components/Footer";
import Header from './components/Header';
import LargeCard from "./components/LargeCard";
import MeduimCard from './components/MeduimCard';
import './css/App.css';

function App(data) {

  const [boxes,setBoxes] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3000/dbjson.json')
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .then ((data) => {
        console.log(data) 
        setBoxes(data)
    })
    }, []); 


    const [meduim,setMeduim] = useState(null)
    useEffect(() => {
      fetch('http://localhost:3000/meduimCard.json')
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .then ((data) => {
          console.log(data) 
          setMeduim(data)
      })
      }, []); 


  return ( 
    <div className="App">
       

    {/* Header */}
    <Header />

    {/* Banner */}
    <Banner />
    <main className='container'>
      {/* start the small card  */}
      <section>
        <h2> Explore Nearly </h2>
        <div className='boxes__grid'>
        { boxes && boxes.map((item) => (
            <Box 
              key={item.img}
              img={item.img} 
              distance={item.distance} 
              location={item.location} />
          ))}
        </div>
           
      </section>

      {/* end small card */}
      {/* start the meduim card  */}
      <section>
        <h2> Live Anywhere </h2>
        <div className='carousel snaps-inline'>
        { meduim && meduim.map((item) => (
            <MeduimCard 
              key={item.img}
              title={item.title}
              img ={item.img} 
              
              />
          ))}
        </div>
           
      </section>

      {/* end the meduim card */}
      <LargeCard 
        img="https://links.papareact.com/4cj"
        title={"the Greates Outdoors"}
        discption={'Wishlists curered by Airbnb'}
        buttonText ={"Get Inspired"}
      />
    </main>


    <Footer />
    </div>
  );  
}

 

export default App;
