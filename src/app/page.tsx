import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';
import { useRouter } from 'next/router';


const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Submit',
    },
    {
      action: 'link',
      label: 'New conversation',
      target: 'https://www.google.com',
    },
  ],
  image:
    `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmWDpinV5Ew9RkRQVm4Da1QX2jvaLGn3AaBtXRKYLTeCQc.png`,
  input: {
    text: 'Tell me more about Ledger',
  },
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'SamanthaBot', 
  description: 'A frame to chat with SamanthaBot',
  openGraph: {
    title: 'SamanthaBot',
    description: 'A frame to chat with SamanthaBot',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmWDpinV5Ew9RkRQVm4Da1QX2jvaLGn3AaBtXRKYLTeCQc.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  const router = useRouter();

  const handleQuestion = () => {
    const textInput = 'Tell me more about Ledger'; // This should be dynamic based on actual user input
    router.push(`/api/frame?id=1&text=${encodeURIComponent(textInput)}`);
  };

  return (
    <>
      <h1>SamanthaBot</h1>
      <button onClick={handleQuestion}>Submit</button>
    </>
  );
}