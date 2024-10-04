import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Posts',
};

export default async function Posts() {
  const data = await fetch('https://api.github.com/users/artos1tash');
  const res = await data.json();
  return (
    <div>
      Posts <br />
      <Link href="/">Home</Link>
      <p>{res.name}</p>
    </div>
  );
}
