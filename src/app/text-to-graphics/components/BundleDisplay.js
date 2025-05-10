import React from "react";
import { Package, X } from "lucide-react";

const BundleDisplay = ({ bundleItems, removeBundle }) => {
  return (
    <div className="border border-orange-100 dark:border-orange-900 rounded-lg p-4 bg-orange-50 dark:bg-orange-900/20">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <Package size={20} className="text-orange-500 mr-2" />
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Product Bundle
            </h3>
            <p className="text-sm text-orange-500">
              {bundleItems.length} items • Bundle Price: $99.00
            </p>
          </div>
        </div>
        <button
          onClick={removeBundle}
          className="text-gray-400 hover:text-red-500"
        >
          <X size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {bundleItems.map((item, index) => (
          <div
            key={`bundle-item-${index}`}
            className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden bg-white dark:bg-gray-800"
          >
            <div className="h-32 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                {item.name}
              </p>
              <div className="flex justify-between items-center mt-1">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Size: {item.size}
                </p>
                <p className="text-xs font-medium text-orange-500">$33.00</p>
              </div>
              {item.designText && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                  Design: {item.designText}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-right">
        <p className="font-medium text-gray-800 dark:text-gray-200">
          Total: $99.00
        </p>
      </div>
    </div>
  );
};

export default BundleDisplay;
