# UserSchema
- username: kiểu String, tối thiểu 8 kí tự, bắt buộc, duy nhất
- email: kiểu String, bắt buộc, duy nhất
- password: kiểu String, đã được mã hóa, bắt buộc
- fullname: kiểu String, không bắt buộc
- role : kiểu String, bắt buộc, chỉ thuộc 1 trong 2 giá trị "user" hoặc "admin"
- phoneNumber: kiểu String, không bắt buộc, phải đủ 10 kí tự là chữ số và bắt đầu bằng kí tự 0
- address: kiểu String, không bắt buộc
- accountBalance: kiểu Number, có mặc định là 0, nhỏ nhất là 0
- createdAt: auto
- updatedAt: auto

# Auth Routers

## POST /api/auth/register
- Mô tả: Đăng kí tài khoản
- Form yêu cầu: username, email, password, confirmPassword
- Quyền truy cập: public

## POST /api/auth/login
- Mô tả: Đăng nhập tài khoản
- Form yêu cầu: username và password
- Quyền truy cập: public

## GET /api/auth
- Mô tả: Kiểm tra token hợp lệ, có trả về dữ liệu của tài khoản nếu tồn tại ( không bao gồm mật khẩu)
- Quyền truy cập: user, admin

## PUT /api/auth
-   Mô tả: Cập nhật thông tin người dùng bao gồm fullname, phoneNumber, email, address, accountBalance ( không dùng để đổi mật khẩu )
-   Form yêu cầu: các thuộc tính cho phép
-   Quyền truy cập: user, admin

## PUT /api/auth/password
-   Mô tả: Đổi mật khẩu
-   Form yêu cầu: password, newPassword, confirmPassword
-   Quyền truy cập: user, admin

## POST /api/auth/token
- Mô tả: Làm mới lại token
- Form yêu cầu: refreshToken
- Yêu cầu: đã đăng nhập
- Quyền truy cập: user, admin

## GET /api/auth/logout
- Mô tả: Đăng xuất tài khoản
- Quyền truy cập: user, admin

## POST /api/auth/forget-password
- Mô tả: Yêu cầu gửi link đặt lại mật khẩu tới email
- Form yêu cầu: email
- Quyền truy cập: public

## PUT /api/auth/reset-password/:resetToken
-   Mô tả: Đặt lại mật khẩu theo resetToken
-   Form yêu cầu: newPassword, confirmPassword
-   Quyền truy cập: public

# Category Schema
- name: kiểu String, bắt buộc, duy nhất
- thumb: kiểu String, bắt buộc

# Product Schema
- name: kiểu String, bắt buộc
- thumb: kiểu mảng String (yêu cầu 2 ảnh), bắt buộc
- listImage: kiểu mảng String, mặc định undefined
- price: kiểu Number, bắt buộc
- discount: kiểu Number, mặc định 0, (% giảm giá)
- evaluation: kiểu Decimal128, mặc định 0, (đánh giá trung bình theo dữ liệu của bảng Feedback)
- description: kiểu String, mặc định là ''
- sold: kiểu Number, mặc định là 0, (chỉ số lượng đã bán, tự tăng sau mỗi lần bán được sản phẩm)
- category: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Category

# Feedback Schema
- comment: kiểu String, mặc định là ''
- rating_star: kiểu Number, bắt buộc, nhỏ nhất là 1, lớn nhất là 5
- user: kiểu ObjectId, bắt buộc, tham chiếu tới bảng User
- product: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Product

# Order Schema
- address: kiểu String, bắt buộc
- phoneNumber: kiểu String, bắt buộc, chuỗi phải đủ 10 kí tự và bắt đầu bằng kí tự 0
- totalAmount: kiểu Number, bắt buộc
- user: kiểu ObjectId, bắt buộc, tham chiếu tới bảng User
- orderDetails: thuộc tính ảo, là danh sách id chi tiết mua của đơn hàng ( có thể populate để lấy thông tin chi tiết )

# Order Router

## POST /api/order
- Mô tả: Thêm 1 đơn hàng sau khi mua
- Form yêu cầu: address, phoneNumber, totalAmount, carts( danh sách id giỏ hàng )
- Quyền truy cập: user
- Quá trình thực hiện: Kiểm tra số dư tài khoản người dùng -> Lấy thông tin những sản phẩm muốn mua trong giỏ hàng và xóa chúng -> Tạo hóa đơn -> Trừ tài khoản người dùng -> Gửi tiền đến người nhận -> Tạo danh sách chi tiết đơn hàng dựa tào thông tin lấy ở bước 2 -> Hoàn thành

## GET /api/order/user
- Mô tả: Lấy thông tin những đơn hàng đã mua của người dùng
- Quyền truy cập: user

## GET /api/order/admin
- Mô tả: Lấy thông tin tất cả những đơn hàng trong database
- Quyền truy cập: admin

# Order Detail Schema
- discount: kiểu số, bắt buộc (% giảm giá)
- quantity: kiểu số, bắt buộc (chỉ số lượng mua)
- order: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Order
- product: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Product
- amount: thuộc tính ảo ( chỉ thành tiền )

# Cart Schema
- user: kiểu ObjectId, bắt buộc, tham chiếu tới bảng User
- product: kiểu ObjectId, bắt buộc, tham chiếu tới bảng Product
- quantity: kiểu Number, bắt buộc, nhỏ nhất là 1

# Cart Router

## POST /api/cart
- Mô tả: Thêm sản phẩm vào giỏ hàng của người dùng ( nếu sản phẩm đã có trong giỏ hàng thì tăng số lượng sản phẩm muốn mua )
- Form yêu cầu: productId, quantity
- Quyền truy cập: user

## GET /api/cart
- Mô tả: Lấy ra toàn bộ sản phẩm có trong giỏ hàng của người dùng
- Quyền truy cập: user

## DELETE /api/cart/:productId
- Mô tả: Xóa sản phẩm trong giỏ hàng của người dùng
- Quyền truy cập: user

## PUT /api/cart
- Mô tả: Cập nhật số lượng sản phẩm muốn mua trong giỏ hàng của người dùng
- Form yêu cầu: productId, quantity
- Quyền truy cập: user