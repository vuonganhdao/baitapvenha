$(function () {
  //
  loadComponentAdmin();
});

// Hàm load các thành phần trang Home
function loadComponentAdmin(params) {
  $(".MenuSection").load("./MenuAdmin.html");
  $(".SideBarSection").load("./SidebarAdmin.html");
  //   $(".ProductAdminSection").load("./ContentProductAdmin.html");
}

// Hàm xử lý khi click vào menu item Product
function handleShowProduct(params) {
  $(".ProductAdminSection").load("./ContentProductAdmin.html", function () {
    generateProductAdmin();
  });
}

// Hàm xử lý khi click vào menu item Menufacturer
function handleShowManuFacturer(params) {
  $(".ProductAdminSection").load("./ContentManufacturerAdmin.html");
}

// Hàm xử lý khi click vào menu item Category
function handleShowCategory(params) {
  $(".ProductAdminSection").load("./ContentCategoryAdmind.html");
}

// Hàm xử lý khi click vào menu item Account
function handleShowAccount(params) {
  $(".ProductAdminSection").load("./ContentAccountAdmind.html");
}

// Hàm generate sản phẩm trang Admin
function generateProductAdmin(params) {
  for (let index = 0; index < 5; index++) {
    $("#tbProductAdmin").append(`
      <tr>
      <td>1</td>
      <td>Samsung Galaxy S22 Ultra 5G</td>
      <td>30.990.000₫</td>
      <td>6.9 inches, Chip MediaTek Helio G85 (12nm) mạnh mẽ, Ram 4G, Pin 7000 mAh</td>
      <td>ProductDetail1</td>
      <td>5</td>
      <td>image1.jpg</td>
      <td>SAMSUNG</td>
      <td>Điện thoại</td>
      <td>
        <button type="button" class="btn btn-warning">Edit</button>
      </td>
      <td>
        <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
      `);
  }
}
