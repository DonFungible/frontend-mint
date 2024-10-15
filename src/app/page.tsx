'use client';

// Mint contract 0x345d28cfcde89501e1c7289a7b5559f98dcfbe68

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="mt-40" />
      <MintButton />
    </div>
  );
}

function MintButton() {
  return <button className="text-3xl">Mint</button>;
}
