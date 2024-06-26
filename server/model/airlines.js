const mongoose = require('mongoose');

/*
    Each entry contains the following information:

    Airline ID	Unique OpenFlights identifier for this airline.
    Name	Name of the airline.
    Alias	Alias of the airline. For example, All Nippon Airways is commonly known as "ANA".
    IATA	2-letter IATA code, if available.
    ICAO	3-letter ICAO code, if available.
    Callsign	Airline callsign.
    Country	Country or territory where airport is located. See Countries to cross-reference to ISO 3166-1 codes.
    Active	"Y" if the airline is or has until recently been operational, "N" if it is defunct. This field is not reliable: in particular, major airlines that stopped flying long ago, but have not had their IATA code reassigned (eg. Ansett/AN), will incorrectly show as "Y".

    Notes: Airlines with null codes/callsigns/countries generally represent user-added airlines. Since the data is intended primarily for current flights, defunct IATA codes are generally not included. For example, "Sabena" is not listed with a SN IATA code, since "SN" is presently used by its successor Brussels Airlines.

    For more info check https://openflights.org/data
*/

const airlineSchema = new mongoose.Schema({
    airlineId: Number,
    name: String,
    alias: String,
    IATA: String,
    ICAO: String,
    callsign: String,
    country: String,
    active: String
});

module.exports = mongoose.model('Airline', airlineSchema);