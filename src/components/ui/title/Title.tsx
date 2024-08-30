import { titleFont } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-5`}>
        {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
      </h1>
      {subtitle && (
        <h3 className='text-xl mb-5'>
          {subtitle.charAt(0).toUpperCase() + subtitle.slice(1).toLowerCase()}
        </h3>
      )}
    </div>
  );
};
