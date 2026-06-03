export async function loader() {
  const content = `Contact: mailto:contact@projectrunpi.com
Expires: 2027-06-03T00:00:00.000Z
Canonical: https://projectrunpi.com/.well-known/security.txt
Preferred-Languages: en`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}