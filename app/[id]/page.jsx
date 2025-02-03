import Image from "next/image";

const getProduct = async (id) => {
    let res = await fetch(`https://dummyjson.com/products/${id}`, { method: "GET" });
    res = await res.json();
    return res;
};

export default async function ProductPage({ params }) {
    const product = await getProduct(params.id);

    return (
        <div className="container mx-auto p-5">
            <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 gap-6">
                {/* Rasm */}
                <div className="relative w-full md:w-1/2 h-64">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="rounded-lg border"
                    />
                </div>

                {/* Mahsulot haqida ma'lumot */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <p className="text-gray-600 mt-2"><strong>Category:</strong> {product.category}</p>
                    <p className="text-gray-600 mt-2"><strong>Brand:</strong> {product.brand}</p>
                    <p className="text-gray-600 mt-2"><strong>SKU:</strong> {product.sku}</p>
                    <p className="text-gray-600 mt-2"><strong>Stock:</strong> {product.stock} left</p>
                    <p className="text-gray-600 mt-2"><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
                    <p className="text-gray-600 mt-2"><strong>Weight:</strong> {product.weight}g</p>
                    <p className="text-gray-600 mt-2"><strong>Warranty:</strong> {product.warrantyInformation}</p>
                    <p className="text-gray-600 mt-2"><strong>Shipping:</strong> {product.shippingInformation}</p>
                    <p className="text-yellow-500 font-semibold"><strong>Rating:</strong> {product.rating} ⭐</p>
                    <p className="text-green-600 font-semibold mt-3 text-xl">${product.price}</p>
                </div>
            </div>
        </div>
    );
}
