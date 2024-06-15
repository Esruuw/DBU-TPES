const { getMainDbConnection } = require('../database/main_db'); // Update import statement

describe('Teacher API', () => {
  let mainDbConnection; // Update variable name

  beforeAll(async () => {
    mainDbConnection = await getMainDbConnection(); // Update function call
  });

  afterAll(async () => {
    await mainDbConnection.close(); // Update function call
  });

  test('should create a new teacher', async () => {
    // Your test implementation
  });

  test('should fetch all teachers', async () => {
    // Your test implementation
  });

  test('should delete a teacher by id', async () => {
  
  });

});


// const { getMainDbConnection } = require('../database/main_db');

// describe('Teacher API', () => {
//   let mainDbConnection;

//   beforeAll(async () => {
//     mainDbConnection = await getMainDbConnection();
//   });

//   afterAll(async () => {
//     await mainDbConnection.close();
//   });

//   test('should create a new teacher', async () => {
//     // Implement the test to create a new teacher
//     const newTeacherData = {
//       name: 'John Doe',
//       subject: 'Mathematics',
//       email: 'john@example.com'
//     };

//     // Assuming there's a function createTeacher in the API to add a new teacher
//     const createdTeacher = await api.createTeacher(newTeacherData);

//     expect(createdTeacher).toBeDefined();
//     expect(createdTeacher.name).toBe(newTeacherData.name);
//     expect(createdTeacher.subject).toBe(newTeacherData.subject);
//     expect(createdTeacher.email).toBe(newTeacherData.email);
//   });

//   test('should fetch all teachers', async () => {
//     // Implement the test to fetch all teachers
//     const allTeachers = await api.fetchAllTeachers();

//     expect(allTeachers).toBeDefined();
//     expect(Array.isArray(allTeachers)).toBe(true);
//     // Add more assertions based on the expected structure of the returned data
//   });

//   test('should delete a teacher by id', async () => {
//     // Implement the test to delete a teacher by id
//     const teacherIdToDelete = 'some_teacher_id';

//     const deleteResult = await api.deleteTeacherById(teacherIdToDelete);

//     expect(deleteResult).toBeDefined();
//     expect(deleteResult.success).toBe(true);
//     // Check additional assertions as needed
//   });

// });
