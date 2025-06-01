/**
 * Essa função é responsável por fazer uma requisição GET para uma URL específica.
 * Ela utiliza a API Fetch para obter os dados e retorna uma Promise que resolve com os dados obtidos.
 * Se ocorrer um erro durante a requisição, a Promise será rejeitada com o erro.
 * @param {*} baseUrl
 * @param {*} url
 * @returns {Promise<any>}
 */
export function get(baseUrl, url) {
  return new Promise((resolve, reject) => {
    const finalUrl = url.includes(baseUrl)
      ? url.replace(baseUrl + "/", "")
      : url;

    fetch(`${baseUrl}/${finalUrl}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
