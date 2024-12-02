import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import clsx from 'clsx';
import { IoClose } from 'react-icons/io5';
/**
 * Spaced section
 */
export function SpacedSection({
  children,
  className = '',
  top,
  bottom,
}: {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
  className?: string;
}) {
  return (
    <section
      className={clsx(className, {
        'mt-10 md:mt-20': top,
        'mb-10 md:mb-20': bottom,
      })}
    >
      {children}
    </section>
  );
}

/**
 * Centeralized container element.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}

/**
 * Modal Dialog Layout
 */
export function ModalLayout({
  isOpen,
  handleModalStatus,
  children,
  classname,
  ModalTitle, modalSize
}: {
  isOpen: boolean;
  handleModalStatus: (e: boolean) => void;
  children: React.ReactNode;
  classname?: string | undefined;
  ModalTitle?: string | undefined;
  modalSize?: string | undefined;
}) {
  // let [isOpen, setIsOpen] = useState(true)
  return (
    <Dialog
      open={isOpen}
      onClose={() => handleModalStatus(false)}
      className='relative z-50'
    >
      <DialogBackdrop className='bg-black-rgba_5 fixed inset-0' />

      <div className='fixed inset-0 flex w-screen items-center justify-center p-4 border-0 overflow-y-auto '>

        <DialogPanel className={` mt-52 md:mt-0 bg-white w-full ${classname} ${modalSize || "max-w-md"}`} >
          {/*  Modal Title section */}
          {ModalTitle && <DialogTitle className='flex items-center justify-between border-b px-4 py-4  text-2xl font-semibold '>
            <span>{ModalTitle}</span>
            <button
              onClick={() => handleModalStatus(false)}
            >
              <IoClose className='text-base' />
            </button>{' '}
          </DialogTitle>}

          <div>  {children} </div>
        </DialogPanel>

      </div>

    </Dialog >
  );
}
