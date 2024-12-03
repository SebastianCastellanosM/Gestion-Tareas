// utils/api.ts

// Función para realizar peticiones POST genéricas
const makePost = (url: string, body: string, options: object) => {
  const headers = options.headers || {};
  return fetch(url, {
    body,
    headers,
    method: 'POST',
  }).then((res) => {
    if (res.statusText === 'No Content') {
      return res;
    }
    return res.json();
  });
};

// Función para realizar una petición POST con JSON
const makeJSONPost = (url: string, data: any, options: { headers: {} }) => {
  const body = JSON.stringify(data);
  const headers = options.headers || {};
  headers['Content-Type'] = 'application/json';

  return makePost(url, body, { headers });
};

// Obtener el token de Auth0
export const getAuth0Token = async () => {
  const url = `https://gestiontareas.us.auth0.com/oauth/token`;
  const headers = { 'content-type': 'application/json' };
  const body = {
    client_id: '3zg5XaGOdz1uk7gHJNwQBeSf7RhtisEI',
    client_secret: 'QplB3TP88P8Vw-JeEr0XbJC5G7xQ6fnHgFnar3TqhFcCJ2KrtrF1dVWhxgl-RKuL',
    audience: 'https://gestiontareas.us.auth0.com/api/v2/',
    grant_type: 'client_credentials',
  };
  return makeJSONPost(url, body, { headers });
};

// Crear un usuario en Auth0
export const createAuth0User = async (data: any, token: any, tokenType: any) => {
  const url = `https://gestiontareas.us.auth0.com/api/v2/users`;
  const headers = {
    Authorization: `${tokenType} ${token}`,
  };
  const body = data;
  return makeJSONPost(url, body, { headers });
};

// Crear un usuario en el sistema (usando el endpoint /api/auth0)
export const createUser = (data: any) => {
  const url = `/api/auth0`;
  const body = { data };
  return makeJSONPost(url, body, { headers: {} });
};

// Función para obtener la lista de usuarios (puedes ajustarla para tu backend)
export const getUsers = async () => {
  const url = '/api/users'; // Asegúrate de que tu servidor tenga este endpoint para obtener los usuarios
  const response = await fetch(url);
  return response.json();
};

// Función para actualizar el rol de un usuario en Auth0
export const updateUserRole = async (userId: string, newRole: string, token: string, tokenType: string) => {
  const url = `https://gestiontareas.us.auth0.com/api/v2/users/${userId}`;
  const headers = {
    Authorization: `${tokenType} ${token}`,
    'Content-Type': 'application/json',
  };

  const body = JSON.stringify({
    roles: [newRole], // Aquí se asume que roles es un arreglo
  });

  try {
    return await makeJSONPost(url, body, { headers });
  } catch (error) {
    console.error("Error al actualizar el rol:", error);
    throw new Error("No se pudo actualizar el rol.");
  }
};
