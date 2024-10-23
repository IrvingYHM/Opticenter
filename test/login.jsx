const request = require('supertest');
const app = require('../app'); // tu aplicación Express

describe('POST /login', () => {
  it('debería autenticar correctamente', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'usuario', password: 'clave' });
    expect(response.statusCode).toBe(200);
  });
});