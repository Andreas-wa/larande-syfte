import React, {useEffect, useState} from "react";
import Recipe from "./recipe";
import "./App.css";
// import Tweet from "./tweet";

const App = () =>{

    // require('dotenv').config();
    
    const APP_ID = '6e3726f1';
    const APP_KEY = '76c85a46caf1ceec7465599c59dbcd26';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState(" ");
    const [query, setquery] = useState('chicken');


    useEffect(() =>{
        getRes();
    }, [query]);

    const getRes = async () =>{
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e =>{
        setSearch(e.target.value);
    }

    const getSer = e =>{
        e.preventDefault();
        setquery(search);
        setSearch('');
    }

    return(
        <div className="App">
            <form onSubmit={getSer} className="search-form">
                <input className="input-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-btn" type="submit">Sök</button>
            </form>

            {recipes.map(recipe =>(
                <Recipe 
                    key={recipe.recipe.label}
                    titel={recipe.recipe.label} 
                    kalorier={recipe.recipe.calories} 
                    image={recipe.recipe.image}
                    ingridienser={recipe.recipe.ingredients}
                />
            ))}
        </div>
    );
};

// function App(){
//     return(
//         <div className="app">
//             <Tweet name="lasse" message="test data" />
//             <Tweet name="anders" message="testar"/>
//             <Tweet name="andreas" message="hejhejehjehej"/>
//             <Tweet name="tobbe" message="blablabla"/>
//         </div>
//     );
// }

export default App;
// export default App;