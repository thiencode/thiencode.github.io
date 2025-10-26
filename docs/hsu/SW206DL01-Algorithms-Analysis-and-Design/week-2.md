---
title: Week 2
sidebar_label: Week 2
description: Notes and diagrams for SW206DL01 - Week 2
---

# Week 2

## P2-B1.01. Cho đoạn Code sau, xác định có bao nhiêu phép tính toán(++,--,+,-,*,/), phép gán, phép so sánh:

```cpp
Fx = 5*x*x - 3*x + 5
```

### Giải

#### Phân tích:
- 5*x*x → 2 phép nhân
- -3*x → thêm 1 phép nhân và 1 phép trừ
- +5 → 1 phép cộng
- = → 1 phép gán

#### Kết quả:
- 5 Phép tính (++ , -– , + , - , *, /)
- 1 phép gán

---

## P2-B1.02. Viết lại đoạn Code hiện thực lại cách thức căn bản cho tính đa thức như bên dưới:

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "Nhan da thuc!\n";

    double a[] = {0, 1, 2, 3};
    int n = 4;
    double x = 2;
    double result, xpower;

    xpower = x;
    result = a[0] + a[1] * x;

    for (int i = 2; i < n; i++) {
        xpower = xpower * x;
        result = result + a[i] * xpower;
    }

    cout << "Ket qua = " << result;
}
```

### Yêu cầu:

1. Chèn thêm các biến đếm cho đoạn Code sau để xác định có bao nhiêu phép tính toán(++,--,+,-,*,/), phép gán, phép so sánh.

2. Viết thêm một hàm để nhập dữ liệu cho các hệ số vào mảng `a` và biến `n` chứa số lượng các hệ số (kích cỡ của mảng `a`).

3. Hãy thành lập công thức tính và xác nhận công thức tính độ phức tạp cho từng phần theo `n` (chạy thử với các trường hợp khác nhau).

### Giải:

#### Viết lại code chèn thêm biến và hàm để nhập dữ liệu cho các hệ số vào mảng `a` và biến `n` chứa số lượng các hệ số (kích cỡ của mảng `a`).

```cpp
#include <iostream>
using namespace std;

void nhapDaThuc(double a[], int &n)
{
    cout << "Nhap so luong he so n: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
}

int main()
{
    cout << "Nhan da thuc!\n";

    // double a[] = {0, 1, 2, 3};
    // int n = 4;
    
    double a[100];
    int n;
    nhapDaThuc(a, n);
    
    double x = 2;
    double result, xpower;

    int PhepTinh = 0;
    int PhepGan = 0;
    int PhepSoSanh = 0;

    xpower = x; 
    PhepGan++;
    result = a[0] + a[1] * x; 
    PhepGan++; 
    PhepTinh += 2;

    for (int i = 2; i < n; i++) {
        PhepSoSanh++;
        xpower = xpower * x; 
        PhepGan++; 
        PhepTinh++;
        result = result + a[i] * xpower; 
        PhepGan++; 
        PhepTinh += 2;
        PhepTinh++; // i++ 
    }
    PhepSoSanh++; // i < n

    cout << "Ket qua = " << result << endl;
    cout << "Phep tinh toan = " << PhepTinh << endl;
    cout << "Phep gan = " << PhepGan << endl;
    cout << "Phep so sanh = " << PhepSoSanh << endl;
   
}
```

#### Phân tích:

- xpower = x; → 1 phép gán
- result = a[0] + a[1] * x; → 1 phép cộng, 1 phép nhân, 1 phép gán
- for (int i = 2; i < n; i++) \{ → 1 phép so sánh, 1 phép cộng
  - xpower = xpower * x; → 1 phép nhân, 1 phép gán
  - result = result + a[i] * xpower; → 1 phép cộng, 1 phép nhân, 1 phép gán
\} → Tổng số các phép bên trong sẽ nhân với (n - 2) lần

#### Công thức tổng quát theo n

| Loại phép                                | Công thức          | Giải thích                                 |
|------------------------------------------|--------------------|--------------------------------------------|
| Phép tính (++ , –, +, -, *, /)           | 2 + 4 × (n − 2)    | 2 phép ngoài vòng + 4 phép mỗi vòng        |
| Phép gán                             | 2 + 2 × (n − 2)    | 2 phép ngoài vòng + 2 phép mỗi vòng        |
| Phép so sánh                          | (n − 2\) + 1        | 1 mỗi vòng + 1 lần cuối                    |

#### Công thức rút gọn

| Loại         | Công thức rút gọn |
|--------------|------------------|
| Phép tính    | 4n − 6           |
| Phép gán     | 2n − 2           |
| Phép so sánh | n − 1            |



#### Xác nhận bằng chạy thử

| n  | Vòng lặp (n−2) | Phép Tính (4n−6) | Phép Gán (2n−2) | Phép So Sánh (n−1) |
|----|:--------------:|:----------------:|:---------------:|:------------------:|
| 3  |       1        |        6         |        4        |         2          |
| 4  |       2        |       10         |        6        |         3          |
| 5  |       3        |       14         |        8        |         4          |
| 6  |       4        |       18         |       10        |         5          |

---

## P2-B1.03. Viết lại đoạn Code hiện thực lại giải thuật Horner cho tính đa thức.

1. Chèn thêm các biến đếm cho đoạn Code sau để xác định có bao nhiêu phép tính toán(++,--,+,-,*,/), phép gán, phép so sánh.

2. Hãy thành lập công thức tính và xác nhận công thức tính độ phức tạp cho từng phần theo `n` (chạy thử với các trường hợp khác nhau). 

### Giải:

```cpp
#include <iostream>
using namespace std;

void nhapDaThuc(double a[], int &n)
{
    cout << "Nhap so luong he so n: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "a[" << i << "] = ";
        cin >> a[i];
    }
}

int main() {
    cout << "Tinh da thuc theo Horner!\n";

    double a[100];
    int n;
    nhapDaThuc(a, n);
    
    double x = 2;
    double result;

    int PhepTinh = 0;
    int PhepGan = 0;
    int PhepSoSanh = 0;

    // Bắt đầu từ hệ số cao nhất
    result = a[n - 1]; 
    PhepGan++;

    for (int i = n - 2; i >= 0; i--) {
        PhepSoSanh++;                 // i >= 0 (true)
        result = result * x;  
        PhepGan++; 
        PhepTinh++;                   // 1 nhân
        result = result + a[i]; 
        PhepGan++; 
        PhepTinh++;                   // 1 cộng
        PhepTinh++;                   // i-- (giảm)
    }
    PhepSoSanh++;                     // i >= 0 (false)

    cout << "Ket qua = " << result << endl;
    cout << "Phep tinh toan = " << PhepTinh << endl;
    cout << "Phep gan = " << PhepGan << endl;
    cout << "Phep so sanh = " << PhepSoSanh << endl;
}
```

#### Phân tích:

- result = a[n - 1]; → 1 phép gán
- for (int i = n - 2; i >= 0; i--) \{ → 1 phép so sánh, 1 phép trừ
  - result = result * x; → 1 phép nhân, 1 phép gán
  - result = result + a[i]; → 1 phép cộng, 1 phép gán
\} → Tổng số các phép bên trong sẽ nhân với (n - 1) lần

#### Công thức tổng quát theo n

| Loại phép       | Công thức tổng        | Giải thích                   |
|-----------------|----------------------|------------------------------|
| Phép tính | 3 × (n - 1)           | 3 mỗi vòng                   |
| Phép gán    | 1 + 2 × (n - 1)      | 1 ngoài + 2 mỗi vòng         |
| Phép so sánh | (n - 1) + 1 = n      | 1 mỗi vòng + 1 lần false     |

#### Rút gọn

| Loại         | Biểu thức rút gọn |
|--------------|-------------------|
| Phép tính    | 3n − 3            |
| Phép gán     | 2n − 1            |
| Phép so sánh | n                 |



#### Bảng kiểm chứng chạy thử

| n  | Số vòng (n−1) | Phép tính (3n−3) | Phép gán (2n−1) | Phép so sánh (n) |
|----|---------------|------------------|-----------------|------------------|
| 3  | 2             | 6                | 5               | 3                |
| 4  | 3             | 9                | 7               | 4                |
| 5  | 4             | 12               | 9               | 5                |
| 6  | 5             | 15               | 11              | 6                |
