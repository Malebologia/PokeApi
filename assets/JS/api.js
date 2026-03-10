// ============================================
// API.JS - LÓGICA DE CONSUMO DE API (POKÉDEX)
// ============================================

async function buscarPokemon() {
    const input = document.getElementById("pokemonInput").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "Cargando Pokémon...";

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const data = await response.json();

        console.log("📦 Datos crudos de la API:", data);

        const pokemon = new Pokemon(data);

        console.log("🎯 Objeto Pokemon:", pokemon);

        resultado.innerHTML = pokemon.render();

    } catch (error) {
        resultado.innerHTML = `
            <div class="alert alert-danger">
                Pokémon no encontrado ❌
            </div>
        `;
        console.error(error);
    }
}