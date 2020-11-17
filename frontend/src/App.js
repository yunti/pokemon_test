import React, {useEffect, useState} from "react";
import PokemonCard from "./components/PokemonCard";
import Navbar from "./components/Navbar";
import SearchFilters from "./components/SearchFilters";


function App() {
  let [pokemon, setPokemon] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false);
  let [err, setErr] = useState(null);
  const apiUrl = "http://localhost:8000/api/pokemon"

  useEffect(() => {
        const getPokemon= () => {
            fetch(apiUrl)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Server error")
                }
                return res.json()
            })
            .then(pokemonData=> {
                setPokemon(()=>pokemonData.results)
                setIsLoaded(true)
              console.log(pokemon)
            },
            err => {
                setErr(err)
                setIsLoaded(true)
            })
        };
        getPokemon()

    }, [])


  return (
    <div className="min-h-screen antialiased text-gray-900 bg-gray-100 xl:flex xl:flex-col xl:h-screen">
      <Navbar />
      <div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilters />
        <main className="py-6 xl:flex-1 xl:overflow-x-hidden">
          {Array.from({length:5},(value, index) => (
            <div key={index}>
              <div className="px-4 xl:px-8">
                <h3 className="text-xl text-gray-900">Generation</h3>
                <p className="text-gray-600">These are the original pokemon.</p>
              </div>
              <div className="mt-6 overflow-y-hidden sm:overflow-x-auto">
                <div className="px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8">
                  {pokemon.map((poke, index) => (
                    <div
                      className={`${
                        index > 0 ? "mt-10 sm:ml-4" : ""
                      } sm:mt-0 sm:w-80 sm:flex-shrink-0`}
                    >
                      <PokemonCard {...poke} key={index} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
