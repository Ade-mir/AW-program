export default async function handlePopulatePokemons(page = 1) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
