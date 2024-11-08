import { useState } from 'react';
import { first151Pokemon, getFullPokedexNumber, } from '../utils'

export default function SideNav( props) {

    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu } = props

    const [searchValue, setSearchValue] = useState("")

    const filteredPokemon = first151Pokemon.filter((element, elementIndex) => {

        if ((getFullPokedexNumber(elementIndex)).includes(searchValue)) {
            return true
        }

        if (element.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
            return true
        }

        return false
    })

    return (
        <nav className={' ' + (!showSideMenu ? " open" : '')}>
            <div className={'header ' + (!showSideMenu ? " open" : '')}>
                <button className='open-nav-button' onClick={handleCloseMenu}>
                    <i className='fa-solid fa-arrow-left-long'></i>
                </button>
                <h1 className={"text-gradient"}>Pokedex</h1>
            </div>
            <input placeholder='E.g 001 or Builba...' value={searchValue} onChange={(e) => {
                setSearchValue(e.target.value)
            }} />
            { filteredPokemon.map( (pokemon, pokemonIndex) => {
                
                const truePokedexNumber = first151Pokemon.indexOf(pokemon)
                return (
                  <button
                    onClick={() => {
                      setSelectedPokemon(truePokedexNumber);
                      handleCloseMenu();
                    }}
                    key={pokemonIndex}
                    className={
                      "nav-card " +
                      (pokemonIndex === selectedPokemon
                        ? " nav-card-selected"
                        : " ")
                    }
                  >
                    <p>{getFullPokedexNumber(truePokedexNumber)}</p>
                    <p>{pokemon}</p>
                  </button>
                );
            })}
        </nav>
    )
}