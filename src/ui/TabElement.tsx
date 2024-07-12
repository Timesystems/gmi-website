'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

export default function TabElement({
  name,
  tabs,
  tabContent,
}: {
  name: string;
  tabs: string[];
  tabContent: React.ReactNode[];
}) {
  return (
    <TabGroup>
      <TabList className='no-scrollbar mb-8 flex gap-x-5 overflow-x-scroll md:mb-14'>
        {tabs.map((tab, index) => (
          <Tab as={Fragment} key={`tab-${name}-${index}`}>
            {({ hover, selected }) => (
              <button
                className={clsx(
                  'rounded-full border border-black-100 px-4 py-1 font-heading text-[0.9rem] text-black-500 transition-colors duration-300',
                  {
                    'border-primary-500 bg-primary-500 text-white transition-colors duration-300':
                      hover || selected,
                  }
                )}
              >
                {tab}
              </button>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabContent.map((content, index) => (
          <TabPanel key={`tabcontent-${name}-${index}`}>{content}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
