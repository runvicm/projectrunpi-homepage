import type { ActionFunctionArgs } from 'react-router';

export const action = async ({  params, context }: ActionFunctionArgs) => {
 const slug = params.slug;
  const API_URL = (context as any)?.cloudflare?.env?.API_URL;
  const API_KEY = (context as any)?.cloudflare?.env?.API_KEY;
 
  await fetch(`${API_URL}/api/devlog/view/${slug}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });

  return null;
}