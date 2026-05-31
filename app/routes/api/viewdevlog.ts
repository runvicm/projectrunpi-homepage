// app/routes/view.api.devlog.view.$slug.ts

import type { ActionFunctionArgs } from 'react-router';

export const action = async ({  params, context }: ActionFunctionArgs) => {
 const slug = params.slug;
 
  await fetch(`${context.cloudflare.env.API_URL}/api/devlog/view/${slug}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${context.cloudflare.env.API_KEY}`,
    },
    body: JSON.stringify({ slug }),
  });

  return null;
}