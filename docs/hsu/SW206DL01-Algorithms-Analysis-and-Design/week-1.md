---
title: Bài tập tuần 1
sidebar_label: Week 1
---

# Bài tập Tuần 1

## P1.01. Cho đoạn Code sau, xác định có bao nhiêu phép tính toán(++,--,+,-,*,/)

```cpp
A = b++ + c+d - --e;
```

### Giải 

#### Phân tích:
-	b++ → 1 phép tăng (++)
-	--e → 1 phép giảm (--)
- giữa b++ và c → 1 phép cộng
- giữa c và d → 1 phép cộng
- giữa d và --e → 1 phép trừ
-	= → 1 phép gán

#### Kết quả:
- 5 phép tính toán (++,--,+,-,*)
- 1 phép gán (=)

---

## P1.02. Cho đoạn Code sau, xác định có bao nhiêu phép tính toán(++,--,+,-,*,/)

```cpp
if (a > b)
    a = a - b;
else
    b = b - a;
```

### Giải:

#### Phân tích:
- a > b → 1 phép so sánh
- a = a - b → 1 phép gán, 1 phép trừ
- b = b - a → 1 phép gán, 1 phép trừ

#### Kết quả:
- 1 phép so sánh
- 2 phép gán, 2 phép trừ


---

## P1.03. Cho đoạn Code sau, xác định có bao nhiêu phép tính toán(++,--,+,-,*,/), phép gán, phép so sánh:

```cpp
tong = 0;
for(int i=0; i<3; i++) {
    tong = tong + i*i;
}
```
### Giải

#### Phân tích:
- tong = 0; → 1 phép gán
- int i=0; → 1 phép gán
- i < 3 → 1 phép so sánh, lặp 4 lần (i = 0,1,2,3) → 4 phép so sánh
- tong = tong + i*i;
    - i*i → 1 phép nhân
    - tong + (i*i) → 1 phép cộng
    - tong = ... → 1 phép gán
        → mỗi vòng lặp: 2 phép tính + 1 gán
- i++ → 1 phép tăng mỗi vòng → 3 lần

#### Tổng hợp:
- Phép gán: 1 (tong=0) + 1 (i=0) + 3 (tong=…) = 5
- Phép tính toán: (3 vòng × 2) + 3 (++): 6 + 3 = 9
- Phép so sánh: 4

#### Kết quả:
- 5 phép gán
- 9 phép tính toán (++ , –- , + , - , *, /)
- 4 phép so sánh


## P1.04. Chèn thêm các biến đếm cho đoạn Code sau để xác định có bao nhiêu phép tính toán(++,--,+,-,*,/), phép gán, phép so sánh:

### CODE nguyên mẫu:

```cpp
int tong = 0;
int N = 10;

for(int i=0; i<N; i++) {
    tong = tong + i*i;
}
```

### CODE đã thêm các biến để ghi nhận:

```cpp
int PhemTinh=0,
    PhepSoSanh=0,
    PhepGan=0;

int tong = 0;  PhepGan++;
int N = 10;    PhepGan++;
PhepGan++;     // i=0

for(int i=0; i<N; i++) {
    PhepSoSanh++;  // FOR i<N TRUE
    
    tong = tong + i*i;
    PhepGan++;
    PhemTinh += 2;  // 1 *, 1 +
    
    PhemTinh++;  // i++
}

PhepSoSanh++;  // FOR i<N FALSE (i=N)
``` 

### Giải

#### Phân tích:
- tong=0, N=10, i=0 → 3 phép gán
- Mỗi vòng lặp (với N=10):
    - i < N → 1 phép so sánh × 11 lần (0→10)
    - tong = tong + i*i; → 1 phép gán + 2 phép tính (*, +)
    - i++ → 1 phép tính
        → mỗi vòng có 1 gán + 3 phép tính + 1 so sánh

#### Kết quả:
- PhemTinh = 10 × 3 = 30
- PhepGan = 3 + 10 = 13
- PhepSoSanh = 11

