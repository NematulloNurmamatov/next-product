// import Image from "next/image";
import Link from "next/link";

const getProducts = async () => {
  let res = await fetch(`https://dummyjson.com/products`, { method: 'GET' });
  res = await res.json();
  return res;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center my-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          products?.products?.map(product => (
            <Link href={`/${product.id}`}>
              <div
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4"
                key={product.id}
              >
                <div className="relative w-full min-h-48 mb-4">
                  <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    // layout="fill"
                    // objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h2 className="font-bold text-lg text-gray-800">{product?.title}</h2>
                <p className="text-gray-600 text-sm mt-2">{product?.description}</p>
                <p className="text-green-600 font-semibold mt-3"><span className="text-black">Narxi: </span> ${product?.price}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
