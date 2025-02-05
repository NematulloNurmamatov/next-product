import Filter from "@/components/filter/Filter";
import Link from "next/link";

const getProducts = async (limit = 10) => {
  let res = await fetch(`https://dummyjson.com/products/?limit=${limit}`, { method: 'GET' });
  res = await res.json();
  return res;
};

export default async function Home({searchParams}) {
  const query = await searchParams
  console.log(query);
  
  const products = await getProducts(query?.limit);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center my-8 text-gray-900">Our Products</h1>
      <Filter />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {
          products?.products?.map(product => (
            <Link href={`/${product.id}`} key={product.id}>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 overflow-hidden cursor-pointer">
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={product?.thumbnail}
                    alt={product?.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800">{product?.title}</h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product?.description}</p>
                  <p className="text-green-600 font-semibold mt-3 text-lg">
                    <span className="text-gray-900 font-bold">Price: </span>${product?.price}
                  </p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}
