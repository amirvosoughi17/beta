import { useRouter } from 'next/navigation';
import Link from 'next/link';

const ActiveLink = ({ href, children }) => {
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <div className={`text-[16px] font-medium ${isActive ? 'text-[#5D5AFF]' : 'text-[#313B78]'} duration-300 relative`}>
        {children}
        {isActive && <div className="circle"></div>}
      </div>
    </Link>
  );
};

export default ActiveLink;
