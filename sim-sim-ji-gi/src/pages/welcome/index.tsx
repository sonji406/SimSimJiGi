import Link from 'next/link';

export default function Welcome() {
  return (
    <div className='text-center'>
      <Link href={'welcome/intro'}>
        <div className='w-screen h-screen'>심심지기</div>
      </Link>
    </div>
  );
}
