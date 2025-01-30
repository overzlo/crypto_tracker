export const useHttp = () => {
  const request = async (
    url: RequestInfo | URL,
    method = "GET",
    body = null,
    params = {},
    headers: {},
  ) => {
    try {
      const qString = new URLSearchParams(params).toString();
      const fUrl = qString ? `${url}?${qString}` : url;
      const response = await fetch(fUrl, { method, body, headers });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  };
  return { request };
};
