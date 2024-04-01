import { writable } from "svelte/store";

export const productData = writable([
  {
    id: 1,
    img: "https://www.libertyshoesonline.com/pub/media/catalog/product/cache/036e1f77cd3178c76f889f39e301037b/c/l/clq_5499.jpg",
    price: 700,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAIczPIufDsH1_6uq7CgELQUJwDUwMMHoivNZ69dwng&s",
    price: 1399,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnggnCnWt4I6XC9FIc8LguHVbHS2X0NAbJPl7oloZmw&s",
    price: 1000,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDJHcceJPppzJj-r-F8Pwmg7b8voc09vs3Hnq2WZXDg&s",
    price: 1700,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskNRy1ZCz_1Yi6VgZfU239Eld2WLazRHUBiwPIMGF-g&s",
    price: 2000,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 6,
    img: "https://assets.ajio.com/medias/sys_master/root/20220927/CLrU/63332d8ef997dd1f8d20a481/-473Wx593H-469229575-black-MODEL7.jpg",
    price: 900,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-cytdWYoMksYbDvw8moD3qCV20-uu575JJwggeyXvQ&s",
    price: 500,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 8,
    img: "https://images-cdn.ubuy.co.in/6359aecf9abb5d5b8d3eda43-ukko-running-shoes-men-shoes-sneakers.jpg",
    price: 1500,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/I/614ZnW6FAiL._AC_UY1000_.jpg",
    price: 1000,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
  {
    id: 10,
    img: "https://assets.ajio.com/medias/sys_master/root/20230620/uokZ/6491829a42f9e729d74ffedb/-473Wx593H-466290581-pink-MODEL.jpg",
    price: 800,
    description: "Men White And Blue Memory Foam Technology Running Shoes",
    totalqty: 10,
  },
]);



function additemHandler(id)
 {
		let findProduct = $products.find((product) => product.id === id);

		if ($cartIems.find((item) => item.id === id)) {
			alert('This product is already in the cart!');
			return;
		}

		cartIems.update((val) => [...val, { ...findProduct, cart_quantity: 1 }]);

		products.update((val) => {
			return val.map((product) => {
				if (product.id === id) {
					return { ...product, quantity: product.quantity - 1 };
				}
				return product;
			});
		});
	}