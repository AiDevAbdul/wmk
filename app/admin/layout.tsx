import { ReactNode } from 'react';
import AdminLayout from './components/AdminLayout';

export const dynamic = 'force-dynamic';

export default function RootAdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}

