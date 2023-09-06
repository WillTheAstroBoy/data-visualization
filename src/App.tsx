import React from 'react';
import './App.css';
import wineData from './data/Wine-Data.json';
import Table from './components/table';
import { filterFlavanoids, getStatistics, filterGamma } from './utils';



function App() {

  // filtering required data to render Flavanoids table
  const flavanoidsData = filterFlavanoids(wineData);

  // filtering required data to render Gamma table
  const gammaData = filterGamma(wineData);


  // Using filtered data and passing it to calculate mean, mode and median 
  const { mean: flavanoidsMean, mode: flavanoidsMode, median: flavanoidsMedian } = getStatistics(flavanoidsData);
  const { mean: gammaMean, mode: gammaMode, median: gammaMedian } = getStatistics(gammaData);

  return (
    <div className="App">
      <header>
          Wine Data Set Statistical measures
      </header>
      <main>
        <p>Flavanoids</p>
        <Table type="Flavanoids" mean={flavanoidsMean} mode={flavanoidsMedian} median={flavanoidsMode} />
        
        <p>Gamma</p>
        <Table type="Gamma" mean={gammaMean} mode={gammaMode} median={gammaMedian} />
      </main>
    </div>
  );
}

export default App;
