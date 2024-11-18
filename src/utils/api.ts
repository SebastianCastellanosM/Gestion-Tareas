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
  
  const makeJSONPost = (url: string, data: any, options: { headers: {} }) => {
    const body = JSON.stringify(data);
    const headers = options.headers || {};
    headers['Content-Type'] = 'application/json';
  
    return makePost(url, body, { headers });
  };
  
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
  
  export const createAuth0User = async (data: any, token: any, tokenType: any) => {
    const url = `https://gestiontareas.us.auth0.com/api/v2/users`;
    const headers = {
      Authorization: `${tokenType} ${token}`,
    };
    const body = data;
    return makeJSONPost(url, body, { headers });
  };
  export const createUser = (data: any) => {
    const url = `/api/auth0`;
    const body = { data };
    return makeJSONPost(url, body, { headers: {} });
  };