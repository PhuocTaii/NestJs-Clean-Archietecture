# Geek Assignment

# Approach

## API: Tạo user

- What

API này dùng để tạo mới một người dùng trong hệ thống, bao gồm các thông tin như:

- Tên người dùng
- Điểm cam kết ban đầu (Commitment Score) — ví dụ: 45

→ Dữ liệu này sẽ phục vụ cho việc đánh giá trạng thái cam kết của team member, bao gồm: "Issue", "Potential Issue", "Good", “Opportunity”, “Excellent”

- How

```jsx
POST /api/v1/user

Header:  x-test-token

Content-Type: application/json

{
  "name": "John Doe",
  "point": 40
}
```

Phản hồi thành công

```jsx
{
  "message": "User created successfully",
  "statusCode": 201,
  "data": {
    "id": "12345",
    "name": "John Doe",
    "point": 40
  }
}
```

## API: Lấy thông tin user

- What

API này dùng để truy xuất thông tin chi tiết của một người dùng, bao gồm:

- Tên
- Điểm cam kết
- Trạng thái cam kết (được suy ra từ điểm)
- How

```html
GET /api/v1/user/{id}

Header:  x-test-token
```

Phản hồi thành công

```json
{
  "message": "User found successfully",
  "statusCode": 200,
  "data": {
    "id": "12345",
    "name": "John Doe",
    "point": 40,
    "status": "Issue"
  }
}
```

# API Specs

## API: Tạo user

- End point:

```json
POST /api/v1/user
```

- Mô tả

Tạo mới một người dùng cùng với điểm cam kết ban đầu.

- Request

Header

```json
Content-Type: application/json
x-test-token: token
```

Body

```json
{
  "name": "John Doe",
  "point": 40
}
```

- Response

201 Created

```json
{
  "message": "User created successfully",
  "statusCode": 201,
  "data": {
    "id": "12345",
    "name": "John Doe",
    "point": 40
  }
}
```

403 Forbidden

```json
{
    "statusCode": 403,
    "message": "Không có quyền truy cập"
}
```

## API: Lấy thông tin user

- End point:

```json
POST /api/v1/user/{id}
```

- Mô tả

Truy xuất thông tin người dùng theo id, bao gồm tên, điểm cam kết và trạng thái.

- Request

Header

```json
x-test-token: token
```

- Response

200 OK

```json
{
  "message": "User found successfully",
  "statusCode": 200,
  "data": {
    "id": "12345",
    "name": "John Doe",
    "point": 40,
    "status": "Issue"
  }
}
```

403 Forbidden

```json
{
    "statusCode": 403,
    "message": "Không có quyền truy cập"
}
```

404 Not Found

```json
{
    "statusCode": 404,
    "message": "Không tìm thấy người dùng"
}
```