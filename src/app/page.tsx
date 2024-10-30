'use client';

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
