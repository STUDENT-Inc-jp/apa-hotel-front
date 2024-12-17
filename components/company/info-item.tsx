interface CompanyInfoItemProps {
  label: string;
  value: string;
}

export function CompanyInfoItem({ label, value }: CompanyInfoItemProps) {
  return (
    <div className="flex flex-col space-y-1">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}