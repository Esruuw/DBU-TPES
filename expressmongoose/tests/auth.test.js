// // // Import necessary modules and functions
// // const { login, signup } = require('../controller/auth');
// // const { mockRequest, mockResponse } = require('jest-mock-req-res');

// // // Mocking bcrypt and jwt
// // jest.mock('bcryptjs', () => ({
// //   compare: jest.fn(),
// //   hash: jest.fn()
// // }));

// // jest.mock('jsonwebtoken', () => ({
// //   sign: jest.fn()
// // }));

// // // Mock the user model
// // const user = require('../models/userDetails');
// // jest.mock('../models/userDetails');

// // // Mock the SIMSInfo model
// // const SIMS_DB_Info = require('../database/sims_db');
// // jest.mock('../database/sims_db');

// // describe('Auth Controller', () => {
// //   describe('login', () => {
// //     test('should return 400 if email or password is missing', async () => {
// //       const req = mockRequest();
// //       const res = mockResponse();

// //       await login(req, res);

// //       expect(res.status).toHaveBeenCalledWith(400);
// //       expect(res.send).toHaveBeenCalledWith({ message: "Bad request." });
// //     });

// //     // Write more test cases for login function based on different scenarios
// //   });

// //   describe('signup', () => {
// //     test('should return 400 if dbuId, email, or password is missing', async () => {
// //       const req = mockRequest();
// //       const res = mockResponse();

// //       await signup(req, res);

// //       expect(res.status).toHaveBeenCalledWith(400);
// //       expect(res.send).toHaveBeenCalledWith({ message: "Bad request." });
// //     });

// //     // Write more test cases for signup function based on different scenarios
// //   });
// // });








// // Import necessary modules and functions
// const { login, signup } = require('../controller/auth');
// const { mockRequest, mockResponse } = require('jest-mock-req-res');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

// // Register the UserInfo schema
// require('../models/userDetails');

// // Mocking bcrypt and jwt functions
// jest.mock('bcryptjs', () => ({
//   compare: jest.fn(),
//   hash: jest.fn()
// }));

// jest.mock('jsonwebtoken', () => ({
//   sign: jest.fn()
// }));

// // Mock the user model
// const User = mongoose.model('UserInfo');
// jest.mock('../models/userDetails', () => ({
//   findOne: jest.fn(),
//   create: jest.fn()
// }));

// // Mock the SIMSInfo model
// const SIMS_DB_Info = require('../database/sims_db');
// jest.mock('../database/sims_db', () => ({
//   simsDbConnection: {
//     model: jest.fn().mockReturnThis(),
//     findOne: jest.fn()
//   }
// }));

// describe('Auth Controller', () => {
//   describe('login', () => {
//     test('should return 400 if email or password is missing', async () => {
//       const req = mockRequest({ body: {} });
//       const res = mockResponse();

//       await login(req, res);

//       expect(res.status).toHaveBeenCalledWith(400);
//       expect(res.send).toHaveBeenCalledWith({ message: "Bad request." });
//     });

//     test('should return 404 if user is not found', async () => {
//       const req = mockRequest({ body: { email: 'test@test.com', password: 'password123' } });
//       const res = mockResponse();
//       User.findOne.mockResolvedValue(null);

//       await login(req, res);

//       expect(res.status).toHaveBeenCalledWith(404);
//       expect(res.send).toHaveBeenCalledWith({ message: 'User not found' });
//     });

//     test('should return 403 if password is invalid', async () => {
//       const req = mockRequest({ body: { email: 'test@test.com', password: 'password123' } });
//       const res = mockResponse();
//       const mockUser = { email: 'test@test.com', password: 'hashedpassword' };
//       User.findOne.mockResolvedValue(mockUser);
//       bcrypt.compare.mockResolvedValue(false);

//       await login(req, res);

//       expect(res.status).toHaveBeenCalledWith(403);
//       expect(res.send).toHaveBeenCalledWith({ error: 'Invalid Password' });
//     });

//     test('should return 200 and token if login is successful', async () => {
//       const req = mockRequest({ body: { email: 'test@test.com', password: 'password123' } });
//       const res = mockResponse();
//       const mockUser = { email: 'test@test.com', password: 'hashedpassword' };
//       User.findOne.mockResolvedValue(mockUser);
//       bcrypt.compare.mockResolvedValue(true);
//       jwt.sign.mockReturnValue('token');

//       await login(req, res);

//       expect(res.status).toHaveBeenCalledWith(200);
//       expect(res.send).toHaveBeenCalledWith({ user: mockUser, token: 'token' });
//     });
//   });

//   describe('signup', () => {
//     test('should return 400 if dbuId, email, or password is missing', async () => {
//       const req = mockRequest({ body: {} });
//       const res = mockResponse();

//       await signup(req, res);

//       expect(res.status).toHaveBeenCalledWith(400);
//       expect(res.send).toHaveBeenCalledWith({ message: "bad request." });
//     });

//     test('should return 404 if email is already taken', async () => {
//       const req = mockRequest({ body: { dbuId: '1', email: 'test@test.com', password: 'password123' } });
//       const res = mockResponse();
//       User.findOne.mockResolvedValue({ email: 'test@test.com' });

//       await signup(req, res);

//       expect(res.status).toHaveBeenCalledWith(404);
//       expect(res.send).toHaveBeenCalledWith({ message: 'This email is already taken.' });
//     });

//     test('should return 406 if user is not in DBU', async () => {
//       const req = mockRequest({ body: { dbuId: '1', email: 'test@test.com', password: 'password123' } });
//       const res = mockResponse();
//       User.findOne.mockResolvedValue(null);
//       SIMS_DB_Info.findOne.mockResolvedValue(null);

//       await signup(req, res);

//       expect(res.status).toHaveBeenCalledWith(406);
//       expect(res.send).toHaveBeenCalledWith({ message: 'You are not an element of DBU.' });
//     });

//     test('should return 201 and create user if signup is successful', async () => {
//       const req = mockRequest({ body: { dbuId: '1', email: 'test@test.com', password: 'password123' } });
//       const res = mockResponse();
//       const mockSIMSInfo = { dbuId: '1', role: 'user' };
//       User.findOne.mockResolvedValue(null);
//       SIMS_DB_Info.findOne.mockResolvedValue(mockSIMSInfo);
//       bcrypt.hash.mockResolvedValue('hashedpassword');
//       User.create.mockResolvedValue({ dbuId: '1', email: 'test@test.com', password: 'hashedpassword', role: 'user' });

//       await signup(req, res);

//       expect(res.status).toHaveBeenCalledWith(201);
//       expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ dbuId: '1', email: 'test@test.com', role: 'user' }));
//     });
//   });
// });



const { login, signup } = require('../controller/auth');
const { mockRequest, mockResponse } = require('jest-mock-req-res');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Mock bcrypt and jwt functions
jest.mock('bcryptjs', () => ({
  compare: jest.fn(),
  hash: jest.fn()
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn()
}));

// Mock the user model
const User = mongoose.model('UserInfo');
jest.mock('../models/userDetails', () => ({
  findOne: jest.fn(),
  create: jest.fn()
}));

// Mock the SIMSInfo model and simsDbConnection
const SIMSInfoSchema = require('../models/SIMSDetails');
const { simsDbConnection } = require('../database/sims_db');
jest.mock('../database/sims_db', () => ({
  simsDbConnection: {
    model: jest.fn().mockReturnThis(),
    findOne: jest.fn()
  }
}));

describe('Auth Controller', () => {
  // login tests
  describe('login', () => {
    test('should return 400 if email or password is missing', async () => {
      const req = mockRequest({ body: {} });
      const res = mockResponse();

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({ message: "Bad request." });
    });

    test('should return 404 if user is not found', async () => {
      const req = mockRequest({ body: { email: 'test@test.com', password: 'password123' } });
      const res = mockResponse();
      User.findOne.mockResolvedValue(null);

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({ message: 'User not found' });
    });

    test('should return 403 if password is invalid', async () => {
      const req = mockRequest({ body: { email: 'test@test.com', password: 'password123' } });
      const res = mockResponse();
      const mockUser = { email: 'test@test.com', password: 'hashedpassword' };
      User.findOne.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(false);

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.send).toHaveBeenCalledWith({ error: 'Invalid Password' });
    });

    test('should return 200 and token if login is successful', async () => {
      const req = mockRequest({ body: { email: 'test@test.com', password: 'password123' } });
      const res = mockResponse();
      const mockUser = { email: 'test@test.com', password: 'hashedpassword' };
      User.findOne.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('token');

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ user: mockUser, token: 'token' });
    });
  });

  // signup tests
  describe('signup', () => {
    test('should return 400 if dbuId, email, or password is missing', async () => {
      const req = mockRequest({ body: {} });
      const res = mockResponse();

      await signup(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({ message: "bad request." });
    });

    test('should return 404 if email is already taken', async () => {
      const req = mockRequest({ body: { dbuId: '1', email: 'test@test.com', password: 'password123' } });
      const res = mockResponse();
      User.findOne.mockResolvedValue({ email: 'test@test.com' });

      await signup(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({ message: 'This email is already taken.' });
    });

    test('should return 406 if user is not in DBU', async () => {
      const req = mockRequest({ body: { dbuId: '1', email: 'test@test.com', password: 'password123' } });
      const res = mockResponse();
      User.findOne.mockResolvedValue(null);
      simsDbConnection.findOne.mockResolvedValue(null);

      await signup(req, res);

      expect(res.status).toHaveBeenCalledWith(406);
      expect(res.send).toHaveBeenCalledWith({ message: 'You are not an element of DBU.' });
    });

    test('should return 201 and create user if signup is successful', async () => {
      const req = mockRequest({ body: { dbuId: '1', email: 'test@test.com', password: 'password123' } });
      const res = mockResponse();
      const mockSIMSInfo = { dbuId: '1', role: 'user' };
      User.findOne.mockResolvedValue(null);
      simsDbConnection.findOne.mockResolvedValue(mockSIMSInfo);
      bcrypt.hash.mockResolvedValue('hashedpassword');
      User.create.mockResolvedValue({ dbuId: '1', email: 'test@test.com', password: 'hashedpassword', role: 'user' });

      await signup(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ dbuId: '1', email: 'test@test.com', role: 'user' }));
    });
  });
});
