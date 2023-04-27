import './App.css';
import {React, useState, useEffect} from 'react';
import { YMaps, Map, Polygon  } from '@pbe/react-yandex-maps';

const App = () => {
  const [centerX, setCenterX] = useState(39.699505);
  const [centerY, setCenterY] = useState(47.215465);
  function minusCenterX(){
    if(centerX<60 || centerX>50)
    { setCenterX((centerX - 0.000010))}
  }
  function plusCenterX(){
    if(centerX<60 || centerX>50)
    { setCenterX((centerX + 0.000010) )}
  }
  function minusCenterY(){
    if(centerY>60 || centerY<50)
    { setCenterY((centerY - 0.000010))}
  }
  function plusCenterY(){
    if(centerY<60 || centerY>50)
    { setCenterY((centerY + 0.000010))}
  }
  function plusCenterXY(){
    plusCenterX()
    plusCenterY()
  }
useEffect(()=>{
  console.log(centerX)
},[centerX])
  return (
    <div className="App">
 
    <YMaps>
      <Map
        defaultState={{
          center: [47.215463, 39.699550],
          zoom: 20,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        className={'mapclass'}
      >
        
        <Polygon
          geometry={[
            [
              [centerY - 0.000010, centerX - 0.000020],
              [centerY, centerX],
              [centerY - 0.000010, centerX + 0.000020],
              [centerY + 0.000015, centerX],
            ],
           
          ]}
          options={{
            fillColor: "#0000ff",
            strokeColor: "#000",
            opacity: 0.9,
            strokeWidth: 2,
          }}
        
        />
      </Map>
    </YMaps>
    <button onClick={minusCenterX}> - 10 по ОХ </button>
    <button onClick={plusCenterX}> + 10 по ОХ </button>
    <button onClick={minusCenterY}> - 10 по ОY </button>
    <button onClick={plusCenterY}> + 10 по ОY </button>

    <button onClick={plusCenterXY}> + 10 по ОY </button>

    </div>
  );
}

export default App;
