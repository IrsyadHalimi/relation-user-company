export interface UserRecord {
  id: string;
  nama: string;
  email: string | null;
  telp: string;
}

export interface CompanyRecord {
  id: string;
  user_id: string;
  company_code: string;
  company_name: string | null;
}

export interface JoinedUserCompany {
  user_id: string;
  company_id: string;
  nama: string;
  email: string | null;
  telp: string;
  company_code: string;
  company_name: string | null;
}