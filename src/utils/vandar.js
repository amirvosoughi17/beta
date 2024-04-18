export async function send(api, amount, redirect) {
  try {
    const response = await fetch('https://ipg.vandar.io/api/v3/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: api,
        amount: amount,
        callback_url: redirect,
      }),
    });
    return response;
  } catch (error) {
    console.log("Error from vandar util (Send function)", error.message)
  }
}

export async function verify(api, token) {
  try {
    const response = await fetch('https://ipg.vand.ar/api/v3/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: api,
        token: token,
      }),
    });
    return await response.json();
  } catch (error) {
    console.log("Error from vandar util (Verify function)", error.message)
  }
}