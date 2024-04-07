export async function send(api, amount, redirect, mobile = null, factorNumber = null, description = null, nationalCode = null, validCardNumber = null) {
  const response = await fetch('https://ipg.vand.ar/api/v3/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_key: api,
      amount: amount,
      callback_url: redirect,
      mobile_number: mobile,
      factorNumber: factorNumber,
      description: description,
      national_code: nationalCode,
      valid_card_number: validCardNumber,
    }),
  });
  return await response.json();
}

export async function verify(api, token) {
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
}