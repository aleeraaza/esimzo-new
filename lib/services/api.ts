// Define a type for our configuration that extends standard fetch options
type ApiConfig = RequestInit & {
  params?: Record<string, string>;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export async function api<T>(
  endpoint: string,
  { params, ...config }: ApiConfig = {},
): Promise<T> {
  // 1. Automatic Query String building (e.g., ?id=123)
  const searchParams = params ? `?${new URLSearchParams(params)}` : "";
  const url = `${BASE_URL}${endpoint}${searchParams}`;

  // 2. Default Headers
  const headers = {
    "Content-Type": "application/json",
    ...config.headers,
  };

  const response = await fetch(url, { ...config, headers });

  // 3. Centralized Error Handling
  // Fetch doesn't throw on 404 or 500, so we must check manually
  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.message || `HTTP Error: ${response.status}`);
  }

  // 4. Handle Empty Responses (204 No Content)
  if (response.status === 204) return {} as T;

  // 5. Automatic JSON Parsing
  return response.json();
}
