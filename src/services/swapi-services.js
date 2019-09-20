export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getInformation(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();

    };

    async getAllPeople() {
        const res = await this.getInformation(`/people/`);
        return res.results.map(this._transformPerson);
    };

    async getPerson(id) {
        const person = await this.getInformation(`/people/${id}/`);
        return this._transformPerson(person);
    };

    async getAllPlanets() {
        const res = await this.getInformation(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    async getPlanet(id) {
        const planet = await this.getInformation(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    async getAllStarships() {
        const res = await this.getInformation(`/starships/`);
        return res.results.map(this._tranformStarship);
    };

    async getStarship(id) {
        const starship = await this.getInformation(`/starships/${id}/`);
        return this._tranformStarship(starship);
    };

    getIdfromInstance(instance) {
        const regExp = /\/([0-9]*)\/$/;
        return instance.url.match(regExp)[1];

    }

    _transformPlanet = (planet) => {
        return {
            id: this.getIdfromInstance(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    };

    _tranformStarship = (starship) => {
        return {
            id: this.getIdfromInstance(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passenger: starship.passenger,
            cargoCapacity: starship.cargoCapacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this.getIdfromInstance(person),
            name: person.name,
            height: person.height,
            mass: person.mass,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}
