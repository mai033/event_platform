// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { SignInButton, SignedOut } from '@clerk/nextjs';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//   return (
//     <header className="w-full border-b">
//       <div className="wrapper flex items-center justify-between">
//         <Link href="/" className="w-36">
//           <Image
//             src="/assets/images/logo.svg"
//             width={128}
//             height={38}
//             alt="Logo"
//           />
//         </Link>
//         <div className="flex w-32 justify-end gap-3">
//           <SignedOut>
//             {/* <Button asChild className="rounded-full" size="lg">
//               <Link href="/sign-in">Login</Link>
//             </Button> */}
//             <div
//               className="rounded-full bg-[#624cf5] text-white px-3 py-2 font-poppins text-sm flex items-center justify-center"
//               style={{ width: 'calc(100% + 20px)' }}
//             >
//               <SignInButton>Login</SignInButton>
//             </div>
//           </SignedOut>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Evently logo"
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
