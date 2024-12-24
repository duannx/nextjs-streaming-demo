const Loading = () => {
  return (
    <div className="w-full animate-pulse">
      {/* Header Section */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        {/* Card-like blocks */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              {/* Avatar */}
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded-md w-1/3 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded-md w-1/4"></div>
              </div>
            </div>
            {/* Content lines */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded-md w-full"></div>
              <div className="h-3 bg-gray-200 rounded-md w-5/6"></div>
              <div className="h-3 bg-gray-200 rounded-md w-4/6"></div>
            </div>
          </div>
        ))}

        {/* List items */}
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={`list-${index}`} className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded-md w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;