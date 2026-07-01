const bcrypt = require('bcryptjs');

const hash = '$2a$10$qeLbnjEpBI0enZt6UprO1Os/Hnz04kWQvVrQlK..iO.gOyGRXY3/W';
const candidates = [
  '123456',
  '12345678',
  '123456aA',
  'admin123',
  'customer123',
  'khachhang123',
  'khachhang',
  'guest123',
  'guest',
  'password',
  'Test@123',
  'Test@000',
  'duocsi123',
  'thungan123',
  'nhanvien123',
  'user123',
  'User@123',
  'MinhGiang@123',
  'MinhGiang123',
  'minhgiang123',
  'minhgiang',
  '123456789',
];

async function check() {
  for (const c of candidates) {
    const match = await bcrypt.compare(c, hash);
    console.log(`Candidate: "${c}" -> ${match ? 'MATCH! 🎉' : 'no'}`);
    if (match) break;
  }
}

check();
