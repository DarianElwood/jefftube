const ASSETS_BASE_URL = "https://assets.getkino.com/documents";

export function getThumbnailUrl(filename: string): string {
  return `${ASSETS_BASE_URL}/${filename}/thumbnail.jpg`;

}

export function getVideoUrl(filename: string): string {
  return `${ASSETS_BASE_URL}/${filename}.mp4`;
}
