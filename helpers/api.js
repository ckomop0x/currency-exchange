export const api = options => fetch(options.url, {
  method: options.method || 'GET', // api method
  headers: { 'Content-Type': 'application/json' }
});
