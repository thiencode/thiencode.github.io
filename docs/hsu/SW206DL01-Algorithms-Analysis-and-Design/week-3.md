---
title: Week 3 - Linear Equations & Gauss-Jordan
sidebar_label: Week 3 - Gauss-Jordan and Operation Counting
description: Notes and exercises on counting operations and implementing Gauss-Jordan for SW206DL01
---

# Bài tập Tuần 3

## P2-B2.01. Cho đoạn code sau, xác định số lượng phép tính toán (++,--,+,-,*,/), phép gán, phép so sánh

```cpp
X = 5;

Y = 3 * X - 7;
```

**Phân tích:**

- `X = 5;` &rarr; 1 phép gán
- `Y = 3 * X - 7;` &rarr; 2 phép tính, 1 phép gán

**Kết quả:**

  - Phép tính toán: 2 (`*`, `-`)
  - Phép gán: 2


---

## P2-B2.02. Giải hệ phương trình sau bằng phương pháp Gauss-Jordan, xác định số lượng phép tính toán (++,--,+,-,*,/)

Hệ phương trình:
```
3x + 7y = 5
8x + 6y = 7
```

### Giải

#### Bước 1: Viết ma trận mở rộng
$
\begin{bmatrix}
3 & 7 & | & 5 \\
8 & 6 & | & 7
\end{bmatrix}
$

#### Bước 2: Khử hàng 2 (làm cho cột 1 = 0)
- Hệ số nhân: $k = \frac{8}{3}$ &rarr; 1 phép chia
- Dòng 2 mới: $R2 = R2 - k * R1$
    - Mỗi phần tử: 1 nhân + 1 trừ
    - Có 3 phần tử (2 hệ số + 1 vế phải) &rarr; 3 nhân + 3 trừ

&rarr; 7 phép tính

#### Bước 3: Chuẩn hóa R2 (làm pivot = 1)

$R2 = R2 / \text{pivot} = R2 / (-\frac{38}{3})$
- Mỗi phần tử: 1 phép chia × 3 phần tử = 3 chia
&rarr; 3 phép tính

#### Bước 4: Khử hàng 1 cột 2 = 0

- Hệ số: $a12 = 7$
- $R1 = R1 - 7*R2$
- 3 phần tử × (1 nhân + 1 trừ) = 3 + 3 = 6 phép tính

### Kết quả: 16 phép tính

---

## P2-B2.03. Viết code cho phương pháp Gauss-Jordan, chèn thêm biến đếm xác định số lượng phép tính toán (++,--,+,-,*,/), phép gán, phép so sánh.

```cpp
#include <iostream>
using namespace std;

int main() {
    double a[2][3];
    int PhepTinh = 0;     // Đếm ++,--,+,-,*,/
    int PhepGan = 0;      // Đếm phép gán
    int PhepSoSanh = 0;   // Đếm phép so sánh

    // Nhập hệ số cho hệ phương trình
    cout << "Nhap he so cho he phuong trinh (dang ax + by = c):\n";
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            cin >> a[i][j];
            PhepGan++;
        }
        PhepSoSanh++; // for j < 3
    }
    PhepSoSanh++; // for i < 2

    // Bước 1: Chuẩn hóa dòng 1
    double factor = a[0][0];
    PhepGan++;
    for (int j = 0; j < 3; j++) {
        a[0][j] = a[0][j] / factor;
        PhepTinh++; // phép chia
        PhepGan++;
    }
    PhepSoSanh++; // for j < 3

    // Bước 2: Khử x khỏi dòng 2
    factor = a[1][0];
    PhepGan++;
    for (int j = 0; j < 3; j++) {
        a[1][j] = a[1][j] - factor * a[0][j];
        PhepTinh += 2; // 1 phép nhân, 1 phép trừ
        PhepGan++;
    }
    PhepSoSanh++; // for j < 3

    // Bước 3: Chuẩn hóa dòng 2
    factor = a[1][1];
    PhepGan++;
    for (int j = 1; j < 3; j++) {
        a[1][j] = a[1][j] / factor;
        PhepTinh++; // phép chia
        PhepGan++;
    }
    PhepSoSanh++; // for j < 3

    // Bước 4: Khử y khỏi dòng 1
    factor = a[0][1];
    PhepGan++;
    for (int j = 1; j < 3; j++) {
        a[0][j] = a[0][j] - factor * a[1][j];
        PhepTinh += 2; // 1 phép nhân, 1 phép trừ
        PhepGan++;
    }
    PhepSoSanh++; // for j < 3

    double x = a[0][2]; PhepGan++;
    double y = a[1][2]; PhepGan++;

    cout << "Nghiem: x = " << x << ", y = " << y << endl;
    cout << "So phep tinh toan (++,--,+,-,*,/): " << PhepTinh << endl;
    cout << "So phep gan (=): " << PhepGan << endl;
    cout << "So phep so sanh (<, >, ==): " << PhepSoSanh << endl;

    return 0;
}
```

---

### Gợi ý:  
- Hãy nhập lần lượt hệ số từ bàn phím theo thứ tự: `a[0][0]`, `a[0][1]`, `a[0][2]` (tức là hệ số x, y, và hằng số của phương trình 1), tiếp đó là dòng 2.
- Bạn có thể kiểm thử với hệ số:  
  - 3 7 5  
  - 8 6 7  

---

### Phân tích phép toán

- Mỗi vòng lặp và phép tính đều đã cộng biến đếm tương ứng.
- Kiểm tra lại các dòng cập nhật biến đếm để xác định số phép tính thực hiện.

---

