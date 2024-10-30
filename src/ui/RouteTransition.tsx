'use client';
import { useEffect, useState } from 'react';

import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url, 'page changed!');
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return null;
}
