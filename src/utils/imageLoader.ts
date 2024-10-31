// Optimize image loading with SEO parameters
const imageLoader = (
  src: string, 
  width = 800, 
  alt = '', 
  category = ''
): { url: string; alt: string } => {
  if (!src) return { url: '', alt: '' };
  
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    
    // Production optimizations
    url.searchParams.set('auto', 'format,compress');
    url.searchParams.set('q', '80');
    url.searchParams.set('w', width.toString());
    url.searchParams.set('fit', 'crop');
    
    // SEO optimization
    const baseAlt = alt || 'Atlanta event venue';
    const seoAlt = category 
      ? `${category} venue in Atlanta - ${baseAlt}`
      : `${baseAlt} - Event Space Atlanta`;
    
    return {
      url: url.toString(),
      alt: seoAlt
    };
  }
  
  return { 
    url: src,
    alt: alt || 'Atlanta event venue'
  };
};

export default imageLoader;