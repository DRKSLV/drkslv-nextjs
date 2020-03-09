import Link from 'next/link';

const Header = () => (
  <div className="header">
    <Link href="/posts" as={`${process.env.ASSET_PREFIX}/posts`}>
      <a>Posts</a>
    </Link>
    <Link href="/chat" as={`${process.env.ASSET_PREFIX}/chat`}>
      <a>Chat</a>
    </Link>
  </div>
);

export default Header;
