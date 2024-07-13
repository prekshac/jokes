import Joke from "./Joke";
 
function App() {
    return (
        <div className="App">
            <h1><u>Random joke generator</u></h1>
            <div class="para">
            <p>Click the button below to generate a random joke.</p>
            </div>
            <Joke/>
        </div>
    );
}
 
export default App;