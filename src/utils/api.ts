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
      client_id: 'ueTJqppGgPqHRxXHflB4Kw8WKOHAfgTj',
      client_secret: 'DEbQeFQb5PZYFa4F7jlgBVW8or6P6CE2rn2E2YrpjB7uHhshCr-fxP8lfUH8E6Zb',
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