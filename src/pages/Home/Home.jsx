import { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Brand from "../../components/Brand/Brand";
import FAQ from "../../components/FAQ/FAQ";


const Home = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`bg-${isDarkTheme ? 'gray' : 'white'} text-${isDarkTheme ? 'white' : 'black'} `} >
            <button onClick={toggleTheme} className={`px-4 mt-5 py-2 bg-slate-950 rounded-lg bg-${isDarkTheme ? 'white' : 'gray'} text-${isDarkTheme ? 'gray' : 'white'} border-${isDarkTheme ? 'gray' : 'white'} border `} > Dark Theme </button>
            <Banner isDarkTheme={isDarkTheme}></Banner>
            <Brand isDarkTheme= {isDarkTheme}></Brand>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;