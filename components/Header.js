import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/">
      <a>index</a>
    </Link>
    <Link href="/about/">
      <a>about</a>
    </Link>
  </div>
);
export default Header;
