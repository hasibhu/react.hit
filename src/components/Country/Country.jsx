
import './../../components/Country/Country.css';

const Country = ({ propsCountry }) => {
    // console.log(country.name.common);
    console.log(propsCountry);

    // const {name} = country;
    const { name, flags, capital, coatOfArms, languages } = propsCountry;
    
    const language = languages && Object.values(languages)[0];
    return (
        <div className="country">
            <h2>Name: {name.common}</h2>
            <h2>Offical Name: {name.official}</h2>
            <h3>Capital: {capital} </h3>
            <h3>Language: {language} </h3>
         
            <img src={flags.png} alt="" />
            {/* <img width={320} src={coatOfArms.png} alt="" /> */}

        </div>
    );
};

export default Country;

