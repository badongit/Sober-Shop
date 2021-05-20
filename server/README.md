# UserSchema

-	username: kiểu String, tối thiểu 8 kí tự, bắt buộc, duy nhất
-   email: kiểu String, bắt buộc, duy nhất
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
-   Form yêu cầu: username, email, password, confirmPassword
-   Quyền truy cập: public

## POST /api/auth/login
-   Mô tả: Đăng nhập tài khoản
-   Form yêu cầu: username và password
-   Quyền truy cập: public

## GET /api/auth
-   Mô tả: Kiểm tra token hợp lệ, có trả về dữ liệu của tài khoản nếu tồn tại ( không bao gồm mật khẩu)
-   Yêu cầu: có token trong request header 'Authorization'

## PATCH /api/auth
-   Mô tả: Cập nhật thông tin người dùng bao gồm fullname, phoneNumber, email, address, accountBalance ( không dùng để đổi mật khẩu )
-   Form yêu cầu: các thuộc tính cho phép
-   Quyền truy cập: user, admin
-   Yêu cầu: có token trong request header 'Authorization'

## PATCH /api/auth/password
-   Mô tả: Đổi mật khẩu
-   Form yêu cầu: password, newPassword, confirmPassword
-   Quyền truy cập: user, admin
-   Yêu cầu: có token trong request header 'Authorization'

## POST /api/auth/token
-   Mô tả: Làm mới lại token
-   Form yêu cầu: refreshToken
-   Yêu cầu: đã đăng nhập
-   Quyền truy cập: user, admin

## GET /api/auth/logout
-   Mô tả: Đăng xuất tài khoản
-   Yêu cần: có token trong request header 'Authorization'

# Category Schema
-   name: kiểu String, bắt buộc, duy nhất
-   thumb: kiểu String, bắt buộc

# Product Schema
-   name: kiểu String, bắt buộc
-   thumb: kiểu mảng String (yêu cầu 2 ảnh), bắt buộc
-   listImage: kiểu mảng String, mặc định undefined
-   price: kiểu Number, bắt buộc
-   discount: kiểu Number, mặc định 0, (% giảm giá)
-   evaluation: kiểu Number, mặc định 0, (đánh giá trung bình theo dữ liệu của bảng Feedback)
-   description: kiểu String, mặc định là ''
-   sold: kiểu Number, mặc định là 0, (chỉ số lượng đã bán, tự tăng sau mỗi lần bán được sản phẩm)
-   category: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Category

# Feedback Schema
-   comment: kiểu String, mặc định là ''
-   evaluation: kiểu Number, bắt buộc, nhỏ nhất là 1, lớn nhất là 5
-   user: kiểu ObjectId, bắt buộc, tham chiếu tới bảng User
-   product: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Product

# Order Schema 
-   address: kiểu String, bắt buộc
-   phoneNumber: kiểu String, bắt buộc, chuỗi phải đủ 10 kí tự và bắt đầu bằng kí tự 0
-   totalAmount: kiểu Number, bắt buộc
-   user: kiểu ObjectId, bắt buộc, tham chiếu tới bảng User

# Order Detail Schema
-   discount: kiểu số, bắt buộc (% giảm giá)
-   quantity: kiểu số, bắt buộc (chỉ số lượng mua)
-   order: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Order
-   product: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Product
-   amount: thuộc tính ảo ( chỉ thành tiền )
