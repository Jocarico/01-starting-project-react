import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/CoreConcept/Examples";
// props is an object of all the html atributes in each component called
// In this case the props are being destructured

function App() {

  return (
    // Fragment alternative <>
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
