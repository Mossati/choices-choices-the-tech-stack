//importeer het "fetch-json" bestand en geef het de naam fetchJson
import fetchJson from '@components/fetch-json.js';

//een functie om data in te laden met async wacht je totdat the API request gedaan is
export async function load() {
    //een variable met een APi url voor person met id 56
    const users_url = 'https://fdnd-agency.directus.app/items/deloitte_users'
    const titles_url = 'https://fdnd-agency.directus.app/items/deloitte_titles'
    //fetch de data uit de API url en sla het op in deze variable
    const users = await fetchJson(users_url)
    const titles = await fetchJson(titles_url)

    let user = users.data[0];
    let userTitle = titles.data.find((title) => title.id === user.title_id)?.title || "Geen titel";

  //return een object waarin person.data wordt meegegeven
    return {
        user,
        userTitle
    }
}