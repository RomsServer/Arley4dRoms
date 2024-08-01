const fetch = require('node-fetch');

exports.handler = async (event, context) => {
    const code = event.queryStringParameters.code;
    const client_id = 'YOUR_CLIENT_ID';
    const client_secret = 'YOUR_CLIENT_SECRET';
    const redirect_uri = 'https://<tu-usuario>.github.io/<nombre-repositorio>/callback';

    const url = 'https://id.twitch.tv/oauth2/token';
    const params = new URLSearchParams();
    params.append('client_id', client_id);
    params.append('client_secret', client_secret);
    params.append('code', code);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', redirect_uri);

    const response = await fetch(url, {
        method: 'POST',
        body: params
    });

    const data = await response.json();
    const access_token = data.access_token;

    return {
        statusCode: 200,
        body: `Access Token: ${access_token}`
    };
};
