import { auth, signIn, signOut } from '@/auth';
import Link from 'next/link'
import { env } from 'process';

const Navbar = async () => {
  const session = await auth(); 



  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href="/">
          <img src="/logo.png" width={144} height={30} alt="Logo" />
        </Link>
        <div className='flex items-center gap-5 text-black' >
          {session?.user ? (
            <>
              <Link href="/startup/create">
              Create
              </Link>

              <form action={async () => { "use server"; await signOut({redirectTo:"/"}); }}>
                <button type="submit">Logout</button>
              </form>


              <Link href={`/users/${session?.user?.id}`}>
                {session.user.name}
              </Link>
            </>
          ) : (
            <form action={
                async () => { 
                    "use server"
                 await signIn('github')
                  }}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
