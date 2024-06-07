const mongoose = require('mongoose');

/*
    Each entry contains the following information:

    Airport ID	Unique OpenFlights identifier for this airport.
    Name of airport. May or may not contain the City name.
    City	Main city served by airport. May be spelled differently from Name.
    Country	Country or territory where airport is located. See Countries to cross-reference to ISO 3166-1 codes.
    IATA	3-letter IATA code. Null if not assigned/unknown.
    ICAO	4-letter ICAO code.
    Null if not assigned.
    Latitude	Decimal degrees, usually to six significant digits. Negative is South, positive is North.
    Longitude	Decimal degrees, usually to six significant digits. Negative is West, positive is East.
    Altitude	In feet.
    Timezone	Hours offset from UTC. Fractional hours are expressed as decimals, eg. India is 5.5.
    DST	Daylight savings time. One of E (Europe), A (US/Canada), S (South America), O (Australia), Z (New Zealand), N (None) or U (Unknown). See also: Help: Time
    Tz database timezone	Timezone in "tz" (Olson) format, eg. "America/Los_Angeles".
    Type	Type of the airport. Value "airport" for air terminals, "station" for train stations, "port" for ferry terminals and "unknown" if not known. In airports.csv, only type=airport is included.
    Source	Source of this data. "OurAirports" for data sourced from OurAirports, "Legacy" for old data not matched to OurAirports (mostly DAFIF), "User" for unverified user contributions. In airports.csv, only source=OurAirports is included.

    Note: Rules for daylight savings time change from year to year and from country to country. The current data is an approximation for 2009, built on a country level. Most airports in DST-less regions in countries that generally observe DST (eg. AL, HI in the USA, NT, QL in Australia, parts of Canada) are marked incorrectly.

    For more info check https://openflights.org/data
*/
const airportSchema = new mongoose.Schema({
    airportId: Number,
    name: String,
    city: String,
    country: String,
    IATA: String,
    ICAO: String,
    latitude: Number,
    longitude: Number,
    altitude: Number,
    timezone: Number,
    DST: String,
    tzDatabaseTimezone: String,
    type: String,
    source: String
});

module.exports = mongoose.model('Airport', airportSchema);