/*function addressMaker(city, state) {
    const newAdress = {city, state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');*/

function addressMaker(address) {
    const {city, state} = address;
    
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});