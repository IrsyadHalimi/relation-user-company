import { UserRecord, CompanyRecord, JoinedUserCompany } from '../interfaces/relation.interface';

export const getJoinedData = (): JoinedUserCompany[] => {
  const users: UserRecord[] = [
    { id: '12qwer', nama: 'Imron', email: null, telp: '081234567890' },
    { id: '321rewq', nama: 'Juli', email: 'Sammy@mail.com', telp: '0987654321' }
  ];

  const companies: CompanyRecord[] = [
    { id: 'trew098', user_id: '12qwer', company_code: 'SPI', company_name: null },
    { id: 'poiuyt1234', user_id: '321rewq', company_code: 'PIC', company_name: 'Samudera' }
  ];

  return users.map(user => {
    const company = companies.find(c => c.user_id === user.id);
    return {
      user_id: user.id,
      company_id: company?.id || '',
      nama: user.nama,
      email: user.email,
      telp: user.telp,
      company_code: company?.company_code || '',
      company_name: company?.company_name || null
    };
  });
};