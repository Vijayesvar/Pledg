// Custom image loader for Next.js static export
export default function customImageLoader({ src, width, quality }) {
  // For absolute URLs, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, return the path as is (handled by the browser)
  return src;
}
