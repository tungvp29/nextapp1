// components/Pagination.tsx
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    let startPage = currentPage;
    let endPage = Math.min(currentPage + 1, totalPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-4 py-2 rounded-md mx-1 transition-colors ${
          currentPage === page
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md mx-1 bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        Đầu
      </button>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-md mx-1 bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        Trước
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md mx-1 bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        Tiếp
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-md mx-1 bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
      >
        Cuối
      </button>
    </div>
  );
};

export default Pagination;
