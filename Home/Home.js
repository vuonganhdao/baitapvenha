$(function () {
  //
  loadComponent();

  setTimeout(() => {
    generateProduct();
  }, 200);
});

// Hàm load các thành phần trang Home
function loadComponent(params) {
  $(".MenuSection").load("./Menu.html");
  $(".BannerSection").load("./Banner.html");
  $(".ProductsSection").load("./Products.html");
  $(".FooterSection").load("./Footer.html");
}

// Hàm generate các sản phẩm
function generateProduct(params) {
  // Template String ``
  for (let index = 0; index < 10; index++) {
    $(".ProductList").append(`
  <!-- SP 1 -->
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3" style="text-align: left">
    <!-- Ảnh  -->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <img src="../Asset/Product/ImgMobile1.png" alt="" style="width: 160px; height: 190px" />
      </div>
    </div>
    <!-- Tên sản phẩm  -->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3 style="font-weight: bold">Reno6 Z 5G</h3>
      </div>
    </div>

    <!-- Hãng sản xuất -->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h4>Hãng sản xuất: OPPO</h4>
      </div>
    </div>

    <!-- Đánh giá  -->
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <ul class="rating" style="list-style: none; display: flex; font-size: 20px; padding-inline-start: 0px">
          <li>
            <i class="fa fa-star selected" style="color: orange"></i>
          </li>
          <li>
            <i class="fa fa-star selected" style="color: orange"></i>
          </li>
          <li>
            <i class="fa fa-star selected" style="color: orange"></i>
          </li>
          <li>
            <i class="fa fa-star"></i>
          </li>
          <li>
            <i class="fa fa-star"></i>
          </li>
        </ul>
      </div>
    </div>

    <!-- Thêm vào giỏ hàng  -->
    <div class="row">
      <div class="col-sm-4 col-md-4 col-lg-4">
        <h4>9.490.000₫</h4>
      </div>

      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <button type="button" class="btn btn-default" style="border: 0px">
          <i class="fa fa-shopping-cart" style="color: red; font-size: 35px"></i>
        </button>
      </div>
    </div>

    <br />
    <br />
    <br />
  </div>
  <!-- Finish SP 1 -->
  `);
  }
}
