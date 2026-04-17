/** Integration test for User-Company relation mapping */
import request from 'supertest';
import app from '../src/app';

describe('Relation API', () => {
  it('should return correctly joined data between user and company', async () => {
    const res = await request(app).get('/api/relation/user-company');
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    
    // Check first record (Imron)
    expect(res.body[0]).toMatchObject({
      user_id: '12qwer',
      company_id: 'trew098',
      nama: 'Imron',
      email: null,
      company_name: null
    });

    // Check second record (Juli)
    expect(res.body[1]).toMatchObject({
      user_id: '321rewq',
      company_id: 'poiuyt1234',
      nama: 'Juli',
      company_code: 'PIC'
    });
  });
});