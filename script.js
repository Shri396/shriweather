const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '59f36c9018mshbd7435a920a4533p14989fjsn25261de7d6e9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}