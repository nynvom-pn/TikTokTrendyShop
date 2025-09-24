// Dữ liệu chi tiết sản phẩm
const productDetails = {
 1: {
  id: 1,
  name: "Sữa rửa mặt Cetaphil Gentle Skin Cleanser 500ml",
  brand: "Cetaphil",
  category: "skincare",
  gender: "unisex",
  price: "245.000 VNĐ",
  images: [
    "/Hình/MYPM/cetaphil-cleanser.webp"
  ],
  colors: [
    { name: "Trắng", value: "white" },
    { name: "Xanh dương", value: "blue" },
    { name: "Xanh lá", value: "green" }
  ],
  sizes: [],
  description: `
    <h2>Mô tả sản phẩm</h2>
    <p>Cetaphil Gentle Skin Cleanser là dòng sữa rửa mặt nổi tiếng toàn cầu, được khuyên dùng bởi nhiều bác sĩ da liễu cho làn da nhạy cảm. Với công thức dịu nhẹ, sản phẩm giúp làm sạch bụi bẩn, dầu thừa và lớp trang điểm nhẹ nhàng mà không làm mất đi độ ẩm tự nhiên của da.</p>
    <p><strong>Công dụng:</strong> Làm sạch da, cân bằng độ ẩm, giảm kích ứng, phù hợp cho mọi loại da, đặc biệt là da nhạy cảm và da khô.</p>
    <p><strong>Thành phần chính:</strong> Nước tinh khiết, Cetyl Alcohol, Propylene Glycol, Sodium Lauryl Sulfate, Stearyl Alcohol. Không chứa hương liệu, không gây mụn, an toàn cho da.</p>
    <p><strong>Hướng dẫn sử dụng:</strong> 
      <ul>
        <li>Làm ướt mặt bằng nước sạch.</li>
        <li>Lấy một lượng nhỏ sản phẩm, xoa đều và mát-xa nhẹ nhàng trên da trong 30 giây.</li>
        <li>Rửa lại bằng nước hoặc lau khô bằng khăn mềm.</li>
      </ul>
    </p>
    <p><strong>Xuất xứ:</strong> Canada.</p>
    <p>Sản phẩm được kiểm nghiệm da liễu, an toàn sử dụng hằng ngày và là lựa chọn hàng đầu cho những ai tìm kiếm một loại sữa rửa mặt dịu nhẹ nhưng hiệu quả.</p>`
  },
  2: {
    name: "Kem dưỡng ẩm Simple Hydrating Light Moisturiser 125ml",
  brand: "Simple",
  category: "skincare",
  gender: "unisex",
  price: "159.000 VNĐ",
  images: [
    "/Hình/MYPM/simple-moisturiser.webp"
  ],
  colors: [
    { name: "Trắng", value: "white" },
    { name: "Xanh nhạt", value: "lightgreen" }
  ],
  sizes: [],
  description: `
    <h2>Mô tả sản phẩm</h2>
    <p>Simple Hydrating Light Moisturiser là kem dưỡng ẩm dịu nhẹ, lành tính, phù hợp cho da nhạy cảm và da dầu. Với kết cấu mỏng nhẹ, sản phẩm thấm nhanh mà không gây nhờn rít, giữ ẩm lên đến 12 giờ.</p>
    <p><strong>Công dụng:</strong> Cấp ẩm tức thì, duy trì độ ẩm tự nhiên, phục hồi hàng rào bảo vệ da và mang lại làn da mềm mịn, tươi sáng.</p>
    <p><strong>Thành phần chính:</strong> Pro-Vitamin B5, Vitamin E, Glycerin. Không chứa hương liệu nhân tạo, không màu nhân tạo, không gây kích ứng.</p>
    <p><strong>Hướng dẫn sử dụng:</strong>
      <ul>
        <li>Sử dụng sau bước làm sạch và toner.</li>
        <li>Lấy một lượng kem vừa đủ, thoa đều khắp mặt và cổ.</li>
        <li>Dùng 2 lần/ngày (sáng và tối) để đạt hiệu quả tối ưu.</li>
      </ul>
    </p>
    <p><strong>Xuất xứ:</strong> Anh Quốc.</p>
    <p>Kem dưỡng Simple luôn được đánh giá cao bởi sự lành tính, phù hợp cho cả những làn da nhạy cảm nhất. Đây là sản phẩm "must-have" trong chu trình skincare cơ bản.</p>
  `
  },
  11: {
    name: "Áo thun Uniqlo U Crew Neck T-Shirt",
  brand: "Uniqlo",
  category: "ao",
  gender: "unisex",
  price: "249.000 VNĐ",
  images: [
    "/Hình/THOITRANG/uniqlo-tee.webp"
  ],
  colors: [
    { name: "Đen", value: "black" },
    { name: "Trắng", value: "white" },
    { name: "Xanh navy", value: "blue" },
    { name: "Xám", value: "gray" }
  ],
  sizes: ["S", "M", "L", "XL"],
  description: `
    <h2>Mô tả sản phẩm</h2>
    <p>Áo thun Uniqlo U Crew Neck T-Shirt là item thời trang cơ bản, được thiết kế tối giản nhưng tinh tế. Sản phẩm nằm trong bộ sưu tập Uniqlo U nổi tiếng, mang tính ứng dụng cao, phù hợp với nhiều phong cách thời trang.</p>
    <p><strong>Đặc điểm nổi bật:</strong> Chất liệu cotton 100% cao cấp, mềm mại, thoáng khí, thấm hút mồ hôi tốt. Form áo vừa vặn, dễ phối cùng nhiều loại trang phục khác nhau.</p>
    <p><strong>Chi tiết sản phẩm:</strong>
      <ul>
        <li>Chất liệu: 100% cotton</li>
        <li>Cổ tròn, tay ngắn, thiết kế basic</li>
        <li>Màu sắc đa dạng, dễ phối</li>
        <li>Kích thước: S – M – L – XL</li>
      </ul>
    </p>
    <p><strong>Xuất xứ:</strong> Nhật Bản (sản xuất tại nhiều nhà máy ở Châu Á).</p>
    <p>Sản phẩm phù hợp mặc hàng ngày, từ đi học, đi làm đến dạo phố. Với chất lượng và độ bền cao, áo thun Uniqlo luôn là lựa chọn được nhiều bạn trẻ yêu thích.</p>
  `
  },
  12: {
    name: "Áo sơ mi tay dài Owen Slim Fit",
  brand: "Owen",
  category: "ao",
  gender: "nam",
  price: "359.000 VNĐ",
  images: [
    "/Hình/THOITRANG/owen-shirt.webp"
  ],
  colors: [
    { name: "Trắng", value: "white" },
    { name: "Xanh nhạt", value: "lightblue" }
  ],
  sizes: ["M", "L", "XL", "XXL"],
  description: `
    <h2>Mô tả sản phẩm</h2>
    <p>Áo sơ mi Owen Slim Fit là sản phẩm thời trang công sở cao cấp dành cho nam giới. Thiết kế hiện đại, trẻ trung với form dáng slim fit ôm gọn, tôn lên vóc dáng nam tính, lịch lãm.</p>
    <p><strong>Đặc điểm nổi bật:</strong> Vải cotton pha polyester chất lượng cao, mềm mịn, dễ giặt ủi, ít nhăn. Phù hợp mặc đi làm, dự tiệc hoặc các sự kiện quan trọng.</p>
    <p><strong>Chi tiết sản phẩm:</strong>
      <ul>
        <li>Chất liệu: Cotton + Polyester</li>
        <li>Kiểu dáng: Slim Fit</li>
        <li>Cổ áo: Cổ bẻ truyền thống</li>
        <li>Tay dài, hàng cúc cài trước</li>
        <li>Kích thước: M – L – XL – XXL</li>
      </ul>
    </p>
    <p><strong>Xuất xứ:</strong> Việt Nam.</p>
    <p>Áo sơ mi Owen mang đến sự thoải mái, sang trọng nhưng vẫn giữ nét nam tính. Đây là lựa chọn hàng đầu cho những quý ông công sở muốn tạo ấn tượng chuyên nghiệp và lịch lãm.</p>
  `
  }
};

// Function to render products on the homepage
function renderProducts(filteredProducts) {
  const container = document.getElementById('products-container');
  if (!container) {
    console.error("Products container not found! Check if 'products-container' div exists in index.html.");
    return;
  }
  container.innerHTML = '';

  console.log("Rendering products:", filteredProducts);

  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <a href="product-detail.html?id=${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h4>${product.name}</h4>
          <p class="price">${product.price}</p>
          <div class="colors">
            ${product.colors.map(color => `<span class="color ${color}"></span>`).join('')}
          </div>
        </div>
      </a>
    `;
    container.appendChild(productCard);
  });
}

// Combined filter function for both checkboxes and search input
function filterProducts() {
  const selectedBrands = Array.from(document.querySelectorAll('input[name="brand"]:checked')).map(input => input.value);
  const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(input => input.value);
  const selectedGenders = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(input => input.value);
  const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(input => input.value);
  const searchTerm = document.querySelector('.header-right input')?.value.trim().toLowerCase() || '';

  const filteredProducts = products.filter(product => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const genderMatch = selectedGenders.length === 0 || selectedGenders.includes(product.gender);
    const colorMatch = selectedColors.length === 0 || selectedColors.some(color => product.colors.includes(color));
    const searchMatch = searchTerm === '' || product.name.toLowerCase().includes(searchTerm);
    return brandMatch && categoryMatch && genderMatch && colorMatch && searchMatch;
  });

  console.log("Filtered products:", filteredProducts);
  renderProducts(filteredProducts);
}

// Function to render product details on product-detail.html
function renderProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  console.log("URL Search Params:", window.location.search);
  console.log("Extracted Product ID:", productId);

  // Ensure productId is a number and exists in productDetails
  const parsedProductId = parseInt(productId, 10);
  if (!productId || isNaN(parsedProductId) || !productDetails[parsedProductId]) {
    console.error(`Product not found for ID: ${productId}`);
    document.body.innerHTML = '<h2>Sản phẩm không tồn tại!</h2>';
    return;
  }

  const product = productDetails[parsedProductId];
  console.log("Product found:", product);

  // Populate product details
  document.getElementById('product-name').textContent = product.name;
  document.getElementById('product-brand').textContent = product.brand;
  document.getElementById('product-price').textContent = product.price;

  const mainImage = document.getElementById('main-image');
  mainImage.src = product.images[0];
  mainImage.alt = product.name;

  const thumbnailContainer = document.getElementById('thumbnail-images');
  thumbnailContainer.innerHTML = ''; // Clear any existing thumbnails
  product.images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.alt = `${product.name} thumbnail ${index + 1}`;
    thumbnail.addEventListener('click', () => {
      mainImage.src = image;
      mainImage.alt = `${product.name} thumbnail ${index + 1}`;
    });
    thumbnailContainer.appendChild(thumbnail);
  });

  const colorContainer = document.getElementById('color-options');
  colorContainer.innerHTML = ''; // Clear existing colors
  product.colors.forEach((color, index) => {
    const colorOption = document.createElement('div');
    colorOption.classList.add('color-option');
    if (index === 0) colorOption.classList.add('active');
    colorOption.innerHTML = `
      <span class="color ${color.value}"></span>
      <span>${color.name}</span>
    `;
    colorContainer.appendChild(colorOption);
  });

  const sizeContainer = document.getElementById('size-options');
  sizeContainer.innerHTML = ''; // Clear existing sizes
  product.sizes.forEach((size, index) => {
    const sizeOption = document.createElement('button');
    sizeOption.classList.add('size');
    if (index === 0) sizeOption.classList.add('active');
    sizeOption.textContent = size;
    // Add event listener for size selection
    sizeOption.addEventListener('click', () => {
      // Remove 'active' class from all size buttons
      document.querySelectorAll('.size').forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked size button
      sizeOption.classList.add('active');
    });
    sizeContainer.appendChild(sizeOption);
  });

  document.getElementById('product-description').innerHTML = product.description;

  let quantity = 1;
  const quantityDisplay = document.getElementById('quantity');
  quantityDisplay.textContent = quantity;

  document.getElementById('increase-quantity').addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  document.getElementById('decrease-quantity').addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  document.querySelector('.add-to-cart').addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.fullname) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
      window.location.href = '/login.html';
      return;
    }

    const selectedSize = document.querySelector('.size.active')?.textContent;
    const quantity = parseInt(document.getElementById('quantity').textContent, 10);

    const product = productDetails[parsedProductId]; // Lấy sản phẩm theo ID trên URL

    const cartItem = {
      id: parsedProductId,
      name: product.name,
      brand: product.brand,
      price: Number(product.price.replace(/[^\d]/g, "")),
      image: (product.images && product.images[0]) ? product.images[0] : '/images/default.png',
      size: selectedSize || '',
      quantity: quantity,
      username: user.fullname // Associate with the logged-in user
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItemIndex = cart.findIndex(item => item.id === cartItem.id && item.size === cartItem.size && item.username === cartItem.username);
    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += cartItem.quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`Đã thêm ${product.name} vào giỏ hàng!`);
  });

  document.querySelector('.buy-now').addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user || !user.fullname) {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào mua ngay!");
      window.location.href = '/login.html';  // Chuyển hướng đến trang đăng nhập nếu người dùng chưa đăng nhập
      return;
    }
  
    const selectedSize = document.querySelector('.size.active')?.textContent;
    const quantity = parseInt(document.getElementById('quantity').textContent, 10);
  
    const product = productDetails[parsedProductId]; // Lấy thông tin sản phẩm
  
    const cartItem = {
      id: parsedProductId,
      name: product.name,
      brand: product.brand,
      price: Number(product.price.replace(/[^\d]/g, "")),
      image: (product.images && product.images[0]) ? product.images[0] : '/images/default.png',
      size: selectedSize || '',
      quantity: quantity,
      username: user.fullname // Liên kết với người dùng đã đăng nhập
    };
  
    localStorage.setItem('buyNow', JSON.stringify(cartItem));
  
    // Chuyển hướng đến trang thanh toán
    window.location.href = '/checkout.html';  
  });
  
  
}

// Banner Slideshow Functionality
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  startAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(() => plusSlides(1), 5000); // Auto-slide every 5 seconds
}

function initSlideshow() {
  if (document.getElementsByClassName("slide").length > 0) {
    showSlides(slideIndex); // Show the first slide on load
    startAutoSlide(); // Start auto-sliding
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('products-container')) {
    // Homepage logic
    console.log("Page loaded, rendering all products...");
    renderProducts(products); // Render all products initially

    // Add event listeners for filter checkboxes
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    if (checkboxes.length === 0) {
      console.warn("No filter checkboxes found! Check the filter sidebar in index.html.");
    } else {
      checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
      });
    }

    // Add event listener for search input
    const searchInput = document.querySelector('.header-right input');
    if (searchInput) {
      searchInput.addEventListener('input', filterProducts);
    } else {
      console.warn("Search input not found! Check the header in index.html.");
    }

    initSlideshow(); // Initialize the slideshow
  } else if (document.getElementById('product-name')) {
    // Product detail page logic
    renderProductDetail();

    // Add event listener for search input on product detail page
    const searchInput = document.querySelector('.header-right input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        window.location.href = `index.html?search=${encodeURIComponent(searchInput.value)}`;
      });
    }
  }
});