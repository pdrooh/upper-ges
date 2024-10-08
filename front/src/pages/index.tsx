// pages/index.tsx
import React from 'react';
import Layout from '../components/Layout';
import Dashboard from '../components/Dashboard';

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
