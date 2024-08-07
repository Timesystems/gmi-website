export default function Loading({ children }) {
  return (
    <>
      <h1 className='fixed top-0 z-50 text-3xl'>Loading</h1>
      {children}
    </>
  );
}
