//importeer het "fetch-json" bestand en geef het de naam fetchJson
import fetchJson from '@components/fetch-json.js';

//een functie om data in te laden met async wacht je totdat the API request gedaan is
export async function load() {
    //een variable met een APi url voor person met id 56
    const packages_url = 'https://fdnd-agency.directus.app/items/deloitte_packages'
    //fetch de data uit de API url en sla het op in deze variable
    const packages = await fetchJson(packages_url)

    const imageSource = ["cash.png", "mobility.jpg", "lease.jpg", "ov.jpg"];

  //return een object waarin person.data wordt meegegeven
    return {
        packages: packages.data,
        imageSource
    }
}