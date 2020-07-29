import supertest from 'supertest';
import app from '../app';
import User from '../models/user';
jest.useFakeTimers();

const request = supertest(app);

let id: number | string;

const user = {
  username: 'emreturgut',
  email: 'emreturgut@mail.com',
  password: 'emreturgut',
};

/**
 * @description Delete all available users and create new one before all tests
 */
beforeAll(async () => {
  await User.destroy({ where: {} });
});

describe('GET /users', () => {
  it('Should return all users in the database', async () => {
    const res = await request.get('/users').set('accept', 'json');
    expect(res.status).toBe(200);
    expect(res.body.data).toBeDefined();
  });
});

describe('POST /users', () => {
  it('Should add a user to database', async () => {
    const res = await request.post('/users').send(user).set('accept', 'json');
    id = res.body.data.id;
    expect(res.status).toBe(201);
  });
});

describe('GET /users/:id', () => {
  it('Should return the user with the given id', async () => {
    const res = await request.get(`/users/${id}`).set('accept', 'json');
    expect(res.status).toBe(200);
  });
});

describe('GET /users/:id', () => {
  it('Should not return user', async () => {
    const res = await request.get('/users/' + 999).set('accept', 'json');
    expect(res.status).toBe(400);
  });
});
