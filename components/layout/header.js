import Link from 'next/link';

const Header = () => (
  <div className="header">
    <Link href="/posts">
      <a>Posts</a>
    </Link>
    <Link href="/chat">
      <a>Chat</a>
    </Link>
  </div>
);

export default Header;
