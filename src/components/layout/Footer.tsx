import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='flex h-14 w-full items-center'>
      <div className='flex w-full justify-center gap-4 leading-4'>
        <div>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://jasdeepahluwalia.com'>
            Jasdeep Ahluwalia
          </UnderlineLink>
        </div>
        <div>
          Check out my old{' '}
          <UnderlineLink href='https://jasdeepahluwalia.com'>
            website
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
}
