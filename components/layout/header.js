import Link from 'next/link';

const Header = () => (
  <div className="header">
    <Link href="/posts" as={ process.env.BACKEND_URL + '/posts'}>
      <a>Posts</a>
    </Link>
    <Link href="/chat" as={ process.env.BACKEND_URL + '/chat'}>
      <a>Chat</a>
    </Link>
  </div>
);

export default Header;
