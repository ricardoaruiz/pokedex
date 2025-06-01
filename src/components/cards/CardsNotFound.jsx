/**
 * Esse componente é responsável por renderizar uma mensagem informativa
 * quando não há Pokémons encontrados. Ele exibe uma mensagem de erro
 * e uma imagem ilustrativa. Também pode exibir uma descrição opcional
 * informando que o filtro só busca por Pokémons já carregados na lista.
 * @param {Object} param0 - Propriedades do componente.
 * @param {boolean} [param0.showEmptyDescription=true] - Indica se a descrição opcional deve ser exibida.
 * @returns {JSX.Element}
 */
export function CardsNotFound({ showEmptyDescription = true }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center text-2xl font-bold">
      <h2>No Pokémon found.</h2>

      {showEmptyDescription && (
        <div className="text-base">
          <p>
            Remember that the filter will only search for pokemons that have
            already been loaded into the list!
          </p>
        </div>
      )}

      <img
        src="/not-found.png"
        alt="Not Found"
        className="w-[300px] md:w-[500px]"
      />
    </div>
  );
}
