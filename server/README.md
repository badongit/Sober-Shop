# UserSchema

-	username: kiểu String, tối thiểu 8 kí tự, bắt buộc, duy nhất
-	password: kiểu String, đã được mã hóa, bắt buộc
-	fullname: kiểu String, không bắt buộc
-	role : kiểu String, bắt buộc, chỉ thuộc 1 trong 2 giá trị "user" hoặc "admin"
-   phoneNumber: kiểu String, không bắt buộc, phải đủ 10 kí tự là chữ số và bắt đầu bằng kí tự 0
-   address: kiểu String, không bắt buộc
-   accountBalance: kiểu Number, có mặc định là 0, nhỏ nhất là 0
-   createdAt: auto
-   updatedAt: auto


# Auth Routers

## POST /api/auth/register
-   Mô tả: Đăng kí tài khoản
-   Form yêu cầu: username và password
-   Quyền truy cập: public

## POST /api/auth/login
-   Mô tả: Đăng nhập tài khoản
-   Form yêu cầu: username và password
-   Quyền truy cập: public

## GET /api/auth
-   Mô tả: Kiểm tra token hợp lệ, có trả về dữ liệu của tài khoản nếu tồn tại ( không bao gồm mật khẩu)
-   Yêu cầu: có token trong request header 'Authorization'

## PATCH /api/auth
-   Mô tả: Cập nhật thông tin người dùng bao gồm fullname, phoneNumber, address, accountBalance ( không dùng để đổi mật khẩu )
-   Form yêu cầu: các thuộc tính cho phép
-   Quyền truy cập: user, admin

## PATCH /api/auth/password
-   Mô tả: Đổi mật khẩu
-   Form yêu cầu: password và newPassword
-   Quyền truy cập: user, admin