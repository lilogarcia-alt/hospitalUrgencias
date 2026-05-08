const request = require('supertest');
const app = require('../../index');

describe('Prueba de integración GET /pacientes/create', () => {

  test('Debe responder correctamente la vista de pacientes', async () => {

    const res = await request(app).get('/pacientes/create');

    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Pacientes');

  });

});