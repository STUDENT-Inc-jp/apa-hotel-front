import { CompanyInfo } from '@/components/company/info';
import { CustomInfo } from '@/components/company/custom-info';
import { CompanyHeader } from '@/components/company/header';

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <CompanyHeader />
      <div className="grid gap-6">
        <CompanyInfo />
        <CustomInfo />
      </div>
    </div>
  );
}