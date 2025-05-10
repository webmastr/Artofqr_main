import React from "react";
import { X, ChevronDown } from "lucide-react";
import BundleDisplay from "./BundleDisplay";

const CartItem = ({
  item,
  index,
  selectedVariants,
  handleVariantChange,
  removeItem,
  cart,
}) => {
  // Check if this item is part of a bundle
  const isPartOfBundle = item.bundle_id !== undefined;

  // Find all items that belong to the same bundle
  const bundleItems = isPartOfBundle
    ? cart.filter((cartItem) => cartItem.bundle_id === item.bundle_id)
    : [];

  // Only render the first item of each bundle group to avoid duplicates
  const isFirstInBundle = isPartOfBundle
    ? cart.findIndex((cartItem) => cartItem.bundle_id === item.bundle_id) ===
      index
    : true;

  // Skip rendering if not the first item in bundle and is part of a bundle
  if (isPartOfBundle && !isFirstInBundle) {
    return null;
  }

  // For standalone item (not part of a bundle)
  const renderStandaloneItem = () => {
    const variants = item.pricing?.variants || {};

    return (
      <div className="flex items-start">
        <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 mr-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-800 dark:text-gray-200">
              {item.name}
            </h3>
            <button
              onClick={removeItem}
              className="text-gray-400 hover:text-red-500"
            >
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Size: {item.size}
          </p>

          {item.designText && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Design: {item.designText}
            </p>
          )}

          {/* Variant dropdown for standalone items */}
          {Object.keys(variants).length > 0 && (
            <div className="mt-3 w-full max-w-xs">
              <div className="relative">
                <select
                  value={selectedVariants[item.product_id] || item.variant_id}
                  onChange={(e) => {
                    const variantId = e.target.value;
                    const variantData = variants[variantId];
                    handleVariantChange(
                      index,
                      item.product_id,
                      variantId,
                      variantData
                    );
                  }}
                  className="block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {Object.entries(variants).map(([variantId, variant]) => (
                    <option key={variantId} value={variantId}>
                      {variant.size}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-gray-500 dark:text-gray-400">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="text-right ml-4">
          <p className="font-medium text-gray-800 dark:text-gray-200">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-6 first:pt-0">
      {isPartOfBundle ? (
        <BundleDisplay bundleItems={bundleItems} removeBundle={removeItem} />
      ) : (
        renderStandaloneItem()
      )}
    </div>
  );
};

export default CartItem;
