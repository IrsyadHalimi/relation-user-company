Database Relation (1-to-1)
```markdown
# Project 3: Database Relation (1-to-1)

### Tujuan
Menampilkan implementasi relasi entitas antara User dan Company secara satu-ke-satu.

### Cara Jalankan
```bash
npm install
npm run dev

- Insert ke tabel User
INSERT INTO users (id, nama, email, telp) VALUES
('12qwer', 'Imron', null, '081234567890'),
('321rewq', 'Juli', 'Sammy@mail.com', '0987654321'),
(gen_random_uuid(), 'Gajah Mada', null, null);

- - Insert ke tabel Company
INSERT INTO companies (id, user_id, company_code, company_name) VALUES
('trew098', '12qwer', 'SPI', null),
('poiuyt1234', '321rewq', 'PIC', 'Samudera');

- SELECT
[u.id](http://u.id/) AS user_id,
[c.id](http://c.id/) AS company_id,
u.nama,
u.email,
u.telp,
c.company_code,
c.company_name
FROM users u
LEFT JOIN companies c ON [u.id](http://u.id/) = c.user_id
WHERE [u.id](http://u.id/) IN ('12qwer', '321rewq');
