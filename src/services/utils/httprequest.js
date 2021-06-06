export const httprequest = async function(url, method, body, options = {}) {
    return await fetch(url, {
        ...options,
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json',
        },
    });
}