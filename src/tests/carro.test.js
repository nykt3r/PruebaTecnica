const request = require('supertest');
const app = require('../api/app/app');

describe('Testing GET /api', () => {
  it('GET /api/carros - Debe devolver una lista de autos con status 200', async () => {
    const res = await request(app).get('/api/carros');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/carros/filtro - Debe filtrar por modelo, precio y kilometraje', async () => {
    const res = await request(app).get('/api/carros/filtro?modelo=1999&precioMin=10&kilometrajeMax=50000');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  it('GET /api/carros/:id - Debe retornar un carro existente', async () => {
    const res = await request(app).get('/api/carros/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('carroId');
  });

  it('GET /api/carros/:id - Debe retornar 404 si no existe el carro', async () => {
    const res = await request(app).get('/api/carros/999999');
    expect(res.statusCode).toBe(404);
  });
});

// Peticiones HTTP: POST, PUT Y DELETE Requieren de TOKEN

let token = '';

beforeAll(async () => {
  const res = await request(app)
    .post('/usuario/ingresar')
    .send({ email: 'usertest@mail.com', password: 'password' });

  token = res.body.data.token;
});

describe('Testing POST /api', () => {
  it('POST /api/carros - Debe crear un carro con datos válidos', async () => {
    const res = await request(app)
      .post('/api/carros')
      .set('Authorization', `Bearer ${token}`)
      .send({
        modelo: '2050',
        descripcion: 'Carro de Prueba JEST',
        precio: '20000',
        kilometraje: '10000',
        marcaId: '9'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('data');
  });

  it('POST /api/carros - Debe fallar si falta algún campo', async () => {
    const res = await request(app)
      .post('/api/carros')
      .set('Authorization', `Bearer ${token}`)
      .send({ modelo: '1987' });

    expect(res.statusCode).toBe(400);
  });
});

describe('Testing PUT /api', () => {
  it('PUT /api/carros/:id - Debe actualizar un carro existente', async () => {
    const res = await request(app)
      .put('/api/carros/13')
      .set('Authorization', `Bearer ${token}`)
      .send({ modelo: '1789', descripcion: 'JEST', precio: '789', kilometraje: '999', marcaId: '9' });

    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.descripcion).toBe('JEST');
  });
});

describe('Testing DELETE /api', () => {
  it('DELETE /api/carros/:id - Debe eliminar un carro existente', async () => {
    const res = await request(app)
      .delete('/api/carros/1')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });
});