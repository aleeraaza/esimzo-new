export async function getCountryImage(
  countryName: string,
): Promise<string | null> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) return null;

  try {
    const query = encodeURIComponent(`${countryName} travel landmark`);
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`,
      {
        headers: { Authorization: `Client-ID ${accessKey}` },
        next: { revalidate: 86400 }, // cache for 24 hours
      },
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data?.urls?.regular || null;
  } catch {
    return null;
  }
}
