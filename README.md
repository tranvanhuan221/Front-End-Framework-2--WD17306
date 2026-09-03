# Website ban hang va quan ly san pham

Ung dung website ban hang ket hop trang quan tri san pham. Du an gom frontend React/TypeScript va backend Express ket noi MongoDB, ho tro quan ly san pham theo mo hinh CRUD.

## Tinh nang

- Hien thi danh sach san pham.
- Trang quan tri voi dashboard va sidebar.
- Them san pham moi.
- Chinh sua thong tin san pham.
- Xoa san pham.
- Kiem tra du lieu tren form.
- Hien thi trang thai loading va thong bao ket qua thao tac.
- Quan ly du lieu va cache API voi Redux Toolkit Query.
- Backend co schema san pham, danh muc va nguoi dung.
- Co san nen tang cho xac thuc, phan quyen, OTP va dat lai mat khau.

## Cong nghe

### Frontend

- React 18
- TypeScript
- Vite
- React Router DOM
- Redux Toolkit va RTK Query
- Ant Design
- Tailwind CSS

### Backend

- Node.js
- Express
- MongoDB va Mongoose
- Joi validation
- JWT, bcryptjs va Nodemailer
- Vite Node

## Cau truc du an

```text
.
├── backend/
│   ├── controllers/     # Xu ly nghiep vu san pham va danh muc
│   ├── models/          # Schema Mongoose
│   ├── Router/          # Dinh tuyen API
│   ├── schema/          # Validation Joi
│   └── src/app.js       # Khoi tao Express app
├── fontend/
│   ├── src/api/         # Cau hinh API
│   ├── src/components/  # Layout website va admin
│   ├── src/pages/       # Cac trang giao dien
│   ├── src/app/         # Redux store va hook
│   └── db.json          # Du lieu mock cho frontend
└── README.md
```

## Yeu cau moi truong

- Node.js 18 tro len
- npm hoac pnpm
- MongoDB dang chay local hoac MongoDB Atlas

## Cai dat

Clone du an va cai dependency cho tung phan:

```bash
git clone <repository-url>
cd "Front End Framework 2 -WD17306"

cd fontend
npm install

cd ../backend
npm install
```

## Cau hinh backend

Tao file `.env` trong thu muc `backend`:

```env
API=mongodb://127.0.0.1:27017/website-ban-hang
PORT=3000
```

Neu su dung MongoDB Atlas, thay gia tri `API` bang connection string cua ban. Khong dua file `.env` len GitHub.

## Chay du an

### Frontend

Mo terminal tai thu muc `fontend`:

```bash
npm run dev
```

Frontend chay bang Vite. Script hien tai dong thoi khoi dong Vite va mock API tu `db.json`.

### Backend

Mo terminal khac tai thu muc `backend`:

```bash
npm run dev
```

Backend su dung Express thong qua Vite Node va cung cap API tai:

```text
http://localhost:3000/api
```

## API san pham

| Method | Endpoint | Mo ta |
| --- | --- | --- |
| GET | `/api/product` | Lay danh sach san pham |
| GET | `/api/product/:id` | Lay san pham theo ID |
| POST | `/api/product` | Them san pham |
| PUT | `/api/product/:id` | Cap nhat san pham |
| DELETE | `/api/product/:id` | Xoa san pham |

## Duong dan giao dien

- `/home`: Trang san pham.
- `/admin/dashboard`: Dashboard quan tri.
- `/admin/product`: Danh sach san pham.
- `/admin/product/add`: Them san pham.
- `/admin/product/:idProduct/edit`: Chinh sua san pham.

## Ghi chu

Frontend hien dang co cau hinh mock API voi `json-server-auth` va `db.json`, trong khi backend su dung MongoDB tai `/api`. Khi trien khai thuc te, can thong nhat `baseUrl` frontend voi backend va bao mat cac bien moi truong.

## Tac gia

Tran Van Huan
