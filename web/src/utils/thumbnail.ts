const ORG_ID = "org_37DTcE9rIAuV5txfYQzkMcJXKbJ";

// Use local proxy server for development
const PROXY_BASE_URL = "http://localhost:3001";

const ASSETS_BASE_URL = "https://assets.getkino.com/documents";

export function getThumbnailUrl(id: string): string {
  return `${PROXY_BASE_URL}/${ORG_ID}/${id}/thumbnail.jpg`;
}

export function getVideoUrl(filename: string): string {
  return `${ASSETS_BASE_URL}/${filename}`;
  // return `${ASSETS_BASE_URL}/${filename}.mp4`;
}
