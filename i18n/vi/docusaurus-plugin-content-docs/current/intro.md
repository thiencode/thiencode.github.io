---
sidebar_position: 1
---

# Giới thiệu

Hãy cùng khám phá **Docusaurus trong vòng chưa đầy 5 phút**.

## Bắt đầu

Bắt đầu bằng cách **tạo một trang web mới**.

Hoặc **dùng thử Docusaurus ngay lập tức** với **[docusaurus.new](https://docusaurus.new)**.

### Bạn cần những gì

- [Node.js](https://nodejs.org/en/download/) phiên bản 20.0 trở lên:
  - Khi cài đặt Node.js, bạn nên chọn tất cả các checkbox liên quan đến dependencies.

## Tạo một trang web mới

Tạo một trang web Docusaurus mới bằng cách sử dụng **classic template**.

Classic template sẽ tự động được thêm vào dự án của bạn sau khi bạn chạy lệnh:

```bash
pnpm create docusaurus@latest my-website classic
```

Bạn có thể gõ lệnh này vào Command Prompt, Powershell, Terminal, hoặc bất kỳ terminal tích hợp nào khác của trình soạn thảo code.

Lệnh này cũng cài đặt tất cả các dependencies cần thiết để chạy Docusaurus.

## Khởi động trang web của bạn

Chạy development server:

```bash
cd my-website
pnpm start
```

Lệnh `cd` thay đổi thư mục bạn đang làm việc. Để làm việc với trang web Docusaurus mới tạo, bạn cần di chuyển terminal đến đó.

Lệnh `pnpm start` build trang web của bạn locally và phục vụ nó thông qua development server, sẵn sàng để bạn xem tại http://localhost:3000/.

Mở file `docs/intro.md` (trang này) và chỉnh sửa một số dòng: trang web **tự động reload** và hiển thị các thay đổi của bạn.

## Đa ngôn ngữ (i18n)

Trang web này hỗ trợ nhiều ngôn ngữ! 🌍

### Ngôn ngữ có sẵn

- **English** (mặc định) - `en`
- **Tiếng Việt** - `vi`

### Chuyển đổi ngôn ngữ

Sử dụng **menu chọn ngôn ngữ** trên thanh điều hướng (góc trên bên phải) để chuyển đổi giữa các ngôn ngữ.

### Cách thêm bản dịch

#### 1. Tạo các file translation

```bash
pnpm run write-translations --locale vi
```

Lệnh này tạo cấu trúc translation cần thiết trong `i18n/vi/`.

#### 2. Dịch nội dung tài liệu

Để dịch trang này (`intro.md`) sang tiếng Việt:

**Bước 1:** Tạo cấu trúc thư mục
```bash
mkdir -p i18n/vi/docusaurus-plugin-content-docs/current
```

**Bước 2:** Tạo file đã dịch
```bash
# Tạo: i18n/vi/docusaurus-plugin-content-docs/current/intro.md
```

**Bước 3:** Copy nội dung và dịch sang tiếng Việt

#### 3. Test bản dịch của bạn

```bash
# Chạy với locale tiếng Việt
pnpm start --locale vi

# Hoặc chạy với tất cả locales
pnpm start
```

Truy cập:
- English: `http://localhost:3000/docs/intro`
- Tiếng Việt: `http://localhost:3000/vi/docs/intro`

#### 4. Cấu trúc Translation

```
i18n/
├── en/                    # Bản dịch tiếng Anh
│   └── code.json         # Các phần tử UI
└── vi/                    # Bản dịch tiếng Việt
    ├── code.json         # Các phần tử UI (navbar, footer, v.v.)
    └── docusaurus-plugin-content-docs/
        └── current/      # Docs đã dịch
            └── intro.md  # File này bằng tiếng Việt
```

### Những gì cần dịch

✅ **Cần dịch:**
- Tiêu đề và nội dung
- Mô tả và giải thích
- Văn bản UI trong `code.json`
- Nhãn sidebar trong `current.json`

❌ **Không dịch:**
- Các khóa frontmatter (`sidebar_position`, `title`)
- Các khối code
- URLs và links
- Tên package (`docusaurus`, `node.js`)
- Lệnh command line

### Tìm hiểu thêm

Để biết thông tin chi tiết về i18n trong Docusaurus:
- [Tài liệu i18n của Docusaurus](https://docusaurus.io/docs/i18n/introduction)
- Xem `i18n/README.md` trong dự án này để biết hướng dẫn cụ thể

