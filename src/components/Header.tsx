import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import GithubAuth from './GithubAuth';

export default async function Header() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <header className='w-full h-16 flex flex-row items-center border'>
      <div className='flex items-center px-6 lg:px-0 flex-1 sm:items-stretch justify-between'>
        <div>
          <h1>Logo</h1>
        </div>
        <GithubAuth userId={session?.user.id} email={session?.user.email} />
      </div>
    </header>
  );
}
