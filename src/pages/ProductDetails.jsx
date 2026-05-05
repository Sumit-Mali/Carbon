import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { products, productCategories } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <Link
            to="/products"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const category = productCategories.find((c) => c.id === product.category);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Collect all specifications
  const specifications = {};
  Object.keys(product).forEach((key) => {
    if (
      key !== "id" &&
      key !== "name" &&
      key !== "category" &&
      key !== "model" &&
      key !== "description" &&
      key !== "features"
    ) {
      specifications[key] = product[key];
    }
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="bg-slate-900/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            data-testid="back-btn"
            className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              data-testid="product-image"
            >
              <div className="aspect-square bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center rounded-sm border border-slate-800 relative overflow-hidden">
                <div className="text-slate-700 text-9xl font-black uppercase">
                  <img
                    src={product.imageUrl}
                    alt={product.model.substring(0, 3)}
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-sm uppercase">
                    {category?.name}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-blue-400 font-semibold">
                  {category?.name}
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tight uppercase mb-4 text-white"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
                data-testid="product-title"
              >
                {product.name}
              </h1>
              <p className="text-lg text-slate-300 mb-6">
                {product.description}
              </p>

              {/* Model Number */}
              <div className="mb-6 p-4 bg-slate-900/50 border border-slate-800 rounded-sm">
                <p className="text-sm text-slate-400">Model Number</p>
                <p
                  className="text-xl font-bold text-white"
                  data-testid="product-model"
                >
                  {product.model}
                </p>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">
                    Key Features
                  </h3>
                  <ul className="space-y-2" data-testid="product-features">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  data-testid="inquiry-btn"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] text-center"
                >
                  Request Quote
                </Link>
                <Link
                  to="/contact"
                  data-testid="contact-btn"
                  className="bg-transparent border border-blue-600/50 text-blue-400 hover:bg-blue-600/10 hover:border-blue-500 font-semibold py-3 px-8 rounded-sm uppercase tracking-wider transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Specifications Table */}
          {Object.keys(specifications).length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16"
            >
              <h2
                className="text-3xl font-bold uppercase tracking-wide mb-8 text-white"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Technical Specifications
              </h2>
              <div className="bg-slate-900/50 border border-slate-800 rounded-sm overflow-hidden">
                <table className="w-full" data-testid="specifications-table">
                  <tbody>
                    {Object.entries(specifications).map(
                      ([key, value], index) => {
                        // Skip if value is empty or null
                        if (!value) return null;

                        // Format key to be more readable
                        const formattedKey = key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase());

                        // Format value
                        let formattedValue = value;
                        if (Array.isArray(value)) {
                          formattedValue = value.join(", ");
                        } else if (typeof value === "object") {
                          formattedValue = JSON.stringify(value);
                        }

                        return (
                          <tr
                            key={key}
                            className={
                              index % 2 === 0
                                ? "bg-slate-900/30"
                                : "bg-transparent"
                            }
                          >
                            <td className="px-6 py-4 text-sm font-semibold text-slate-300 w-1/3">
                              {formattedKey}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-400">
                              {formattedValue}
                            </td>
                          </tr>
                        );
                      },
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h2
                className="text-3xl font-bold uppercase tracking-wide mb-8 text-white"
                style={{ fontFamily: "Barlow Condensed, sans-serif" }}
              >
                Related Products
              </h2>
              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                data-testid="related-products"
              >
                {relatedProducts.map((relProduct) => (
                  <Link
                    key={relProduct.id}
                    to={`/products/${relProduct.id}`}
                    data-testid={`related-product-${relProduct.id}`}
                    className="group relative bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden rounded-sm"
                  >
                    <div className="aspect-video bg-linear-to-br from-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
                      <div className="text-slate-700 text-6xl font-black uppercase opacity-20">
                        {relProduct.model.substring(0, 3)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-1 group-hover:text-blue-400 transition-colors">
                        {relProduct.name}
                      </h3>
                      <p className="text-sm text-slate-400 line-clamp-2">
                        {relProduct.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
