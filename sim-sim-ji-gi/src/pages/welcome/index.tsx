import Link from 'next/link';

export default function Welcome() {
  return (
    <div>
      <Link href={'welcome/intro'}>
        <div className='w-screen h-screen text-center'>심심지기</div>
      </Link>
    </div>
  );
}
