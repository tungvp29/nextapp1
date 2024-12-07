// MetadataProvider.tsx
import React from 'react';
import { Metadata } from 'next';
import Head from 'next/head';
import { createMetadata } from './MetadataComponent';

interface MetadataProviderProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const MetadataProvider: React.FC<MetadataProviderProps> = ({ title, description }) => {
  const metadata: Metadata = createMetadata({ title, description });

  // Đảm bảo rằng giá trị là chuỗi hợp lệ trước khi sử dụng
  const safeTitle = typeof metadata.title === 'string' ? metadata.title : '';
  const safeDescription = typeof metadata.description === 'string' ? metadata.description : '';

  return (
    <>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
    </>
  );
};

export default MetadataProvider;
