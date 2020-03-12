import Link from 'next/link';
import ThemeButton from "../themeButton";

const Header = () => (
  <div className="header">
    <Link href="/posts" as={`${process.env.ASSET_PREFIX}/posts`}>
      <a>Posts</a>
    </Link>
    <Link href="/chat" as={`${process.env.ASSET_PREFIX}/chat`}>
      <a>Chat</a>
    </Link>
    <ThemeButton></ThemeButton>
  </div>
);

export default Header;
