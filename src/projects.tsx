import React, { useState, useEffect } from 'react';

type ProjectItem = {
  title: string;
  description?: string;
  link?: string;
  images?: string[]; // additional images (relative to public/assets/projects or absolute)
  demo?: string; // demo video or external demo link
};
type Group = { title: string; items: ProjectItem[]; github?: string };

const groups: Group[] = [
  {
    title: 'Web — HTML / CSS / JavaScript',
    items: [
      { title: 'XMB Wave Menu [Home Page]' },
      { title: 'FL Window & Door Maintenance Landing Page', description: 'Home / Services / Images' },
      { title: 'MG Gutters Landing Page' },
      { title: 'Personal Website', link: 'https://robertfernandez.dev/', description: 'Home / Coding Projects / Art / Aviation' },
      { title: 'Restaurant Website' },
      { title: 'Landing Page' },
      { title: 'Aviation Flight Planner' },
      { title: 'Music Player with Themes' },
      { title: 'Winamp Clone with Themes' },
      { title: 'Desktop Environment Simulation' },
      { title: 'Business Card Builder' },
      { title: 'Resume Generator' },
      { title: 'Invoice Generator' },
      { title: 'PDF Editor' },
      { title: 'Comic Reader' }
    ]
  },
  {
    title: 'Web Development with Bolt & Copilot',
    items: [
      { title: 'AviationPro — Professional Flight Planning Suite', description: 'React, TypeScript, Tailwind — Flight Planner | CX-6 | Weather | Performance | Navigation | Flight Logs' },
      { title: 'PSP Digital Comics (Bolt only so far)' },
      { title: 'Portfolio (two different style sites, Bolt only so far)' }
    ]
  },
  {
    title: 'Web Development with Lovable & Copilot',
    items: [
      { title: 'Music Player with Vinyl | Cassette | MiniDisc theme' },
      { title: 'Portfolio Modernized' }
    ]
  },
  {
    title: 'SFML with C++',
    items: [
      { title: 'Comic Reader (Functional Project)', description: 'Includes page navigation, zoom, and drag support.' },
      { title: 'Digital Comics Recreation (UI Project)', description: 'Browse Collection, Recently Added, Unread, Bookmarks, Options.' },
      { title: 'Music Player', description: 'Audio playback with playlist and themed UI.' },
      { title: 'XMB Menu (Wave Animation / Themes)' },
      { title: 'XMB Launcher (earlier version)' },
      { title: 'SFML/OpenGL: Fluid Simulation' },
      { title: 'SFML/OpenGL: Wave Animation' }
    ]
  },
  {
    title: 'Love2D with Lua',
    items: [
      { title: 'Note Editor (line numbering and text entry)' },
      { title: 'Music Player (Love2D)' },
      { title: 'Comic Reader (Two-page display)' },
      { title: 'Key Logger (input logging)' },
      { title: 'Christmas Top-Down Horror Game' },
      { title: 'Aviation Projects: Flight Log, Weather, Weight & Balance' },
      { title: 'Platformer Game' },
      { title: 'PSP Clock Screen Saver' },
      { title: 'Solitaire Style' },
      { title: 'Winamp Clone' },
      { title: 'Jet Pack Joy Ride Clone' },
      { title: 'Hopeless Catch (itch.io)', description: 'A peaceful fishing adventure with a subtle secret', link: 'https://mungdaal321.itch.io/hopeless-catch' }
    ]
  },
  {
    title: 'Unity Projects',
    items: [
      { title: 'Unity: Music Player' },
      { title: 'Unity: Car Game' }
    ]
  },
  {
    title: 'Godot Projects',
    items: [
      { title: 'Godot: Music Player' }
    ]
  },
  {
    title: 'Defold Projects',
    items: [
      { title: 'Defold: Music Player (cross-platform)' }
    ]
  },
  {
    title: 'Android Watch Face Studio',
    items: [
      { title: 'Android Watch Face Studio (First Watch Face | June 8, 2023)' }
    ]
  },
  {
    title: 'PSPSDK Development',
    github: 'https://github.com/robfernan/PSP-Programming',
    items: [
      { title: 'hello_world_psp', description: 'Minimal Hello World for PSP using C and PSPSDK.' },
      { title: 'drawing_square_psp', description: 'Draws a red rectangle on a white background using SDL2.' },
      { title: 'drawing_input_psp', description: 'Demonstrates reading controller input and drawing shapes.' },
      { title: 'drawing_sprite_psp', description: 'Loads and displays a sprite image with SDL2_image.' },
      { title: 'audio_psp', description: 'Plays a WAV/OGG/MP3 file using native PSP audio or SDL2_mixer.' },
      { title: 'sdl_square_psp', description: 'SDL2 example: draws a green square, handles input.' },
      { title: 'sdl_image_psp', description: 'Loads and displays PNG images using SDL2_image.' },
      { title: 'sdl_mixer_psp', description: 'Plays background music with SDL2_mixer, shows pause/resume.' },
      { title: 'sdl_ttf_psp', description: 'Renders TrueType fonts with SDL2_ttf.' },
      { title: 'Minimalist SDK: Hello World', description: 'Hello World for PSP using Minimalist SDK.' },
      { title: 'Minimalist SDK: Color Strings', description: 'Color string demo for PSP using Minimalist SDK.' }
    ]
  },
  {
    title: 'PS1 Mips Assembly',
    github: 'https://github.com/robfernan/PS1-Mips-Programming',
    items: [
      { title: 'PS1 MIPS Assembly tutorials (background, triangles, gouraud shading)' }
    ]
  },
  {
    title: 'Retro Projects',
    items: [
      { title: 'PS2 Bare Metal with C (early experiments)' },
      { title: 'PS3 XMB Layout with Animated Background (Bolt only so far)' },
      { title: 'Gameboy Assembly (loading screen)' }
    ]
  },
];

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function Projects() {
  const [openGroups, setOpenGroups] = useState(() => new Set(groups.map(g => g.title)));

  // Map exact project titles to existing filenames in public/assets/projects
  const filenameMap: Record<string, string> = {
    'XMB Wave Menu [Home Page]': 'home_page_xmb_launcher.png',
    'FL Window & Door Maintenance Landing Page': 'flwindow.png',
    'Personal Website': 'personal_website.png',
    'Music Player with Themes': 'music_player_web.png',
    'Winamp Clone with Themes': 'winamp_clone_web.png',
    'Desktop Environment Simulation': 'desktop_simulation.png',
    'Resume Generator': 'resume_generator.png',
    'Comic Reader': 'comic_book_reader_sfml.png',
    'Comic Reader (Functional Project)': 'comic_book_reader_sfml.png',
    'Digital Comics Recreation (UI Project)': 'digital_comics_recreation_sfml.png',
    'XMB Launcher (earlier version)': 'xmb_launcher_sfml.png',
    'XMB Menu (Wave Animation / Themes)': 'xmb_menu_wave.png',
    'Note Editor (line numbering and text entry)': 'note_editor_love2d.png',
    'Music Player': 'music_player_sfml.png',
    'Music Player (Love2D)': 'music_player_love2d.png',
    'Key Logger (input logging)': 'key_logger_love2d.png',
    'Christmas Top-Down Horror Game': 'christmas_topdown_horror_game.png',
    'PSP Clock Screen Saver': 'psp_clock_love2d.png',
    'Unity: Music Player, Car Game': 'music_player_unity.png',
    'Godot: Music Player': 'music_player_godot.png',
    'Defold: Music Player (cross-platform)': 'music_player_defold.png',
    'Android Watch Face Studio (First Watch Face | June 8, 2023)': 'watch_face_android.png',
    'Website Homepage': 'website_homepage.jpg'
  };

  // Modal state for gallery (must be in Projects scope)
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  // Helper to get all images for a project (main + extra)
  function getProjectImages(item: ProjectItem, mapped?: string, slug?: string) {
    const images: string[] = [];
    if (item.images && item.images.length > 0) {
      images.push(...item.images);
    } else {
      // fallback to mapped/slug
      if (mapped) images.push(`/assets/projects/${mapped}`);
      else if (slug) {
        images.push(`/assets/projects/${slug}.png`, `/assets/projects/${slug}.jpg`);
      }
    }
    return images;
  }

  const ProjectThumb = React.memo(({ mappedFilename, slug, alt, onClick }: { mappedFilename?: string; slug: string; alt: string; onClick?: () => void }) => {
    const placeholder = '/images/placeholder.svg';
    const [src, setSrc] = useState<string>(placeholder);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      let canceled = false;
      const candidates: string[] = [];
      if (mappedFilename) candidates.push(`/assets/projects/${mappedFilename}`);
      // try png then jpg for slug-based filenames
      candidates.push(`/assets/projects/${slug}.png`, `/assets/projects/${slug}.jpg`);

      (async () => {
        for (const c of candidates) {
          // attempt to preload
          try {
            await new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () => reject();
              img.src = c;
            });
            if (!canceled) {
              setSrc(c);
              setIsLoading(false);
              return;
            }
          } catch {
            // try next candidate
          }
        }
        // none loaded; leave placeholder
        if (!canceled) {
          setIsLoading(false);
        }
      })();

      return () => { canceled = true; };
    }, [mappedFilename, slug]);

    return (
      <div className="relative w-full h-full group cursor-pointer" onClick={onClick} tabIndex={0} role="button" aria-label={`View details for ${alt}`}> 
        {isLoading && (
          <div className="absolute inset-0 bg-theme-bg dark:bg-theme-bg-dark animate-pulse rounded" />
        )}
        <img 
          loading="lazy" 
          decoding="async" 
          src={src} 
          alt={alt} 
          className={`w-full h-full object-cover bg-theme-card/50 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} group-hover:scale-125 group-hover:z-10 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-theme-accent dark:group-hover:ring-theme-accent-dark`} 
          style={{ transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, z-index 0.3s' }}
          onError={(e) => { 
            (e.currentTarget as HTMLImageElement).src = placeholder;
            setIsLoading(false);
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    );
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web', 'Game Development', 'Tools', 'Embedded'];

  const getCategory = (groupTitle: string): string => {
    if (groupTitle.includes('Web')) return 'Web';
    if (groupTitle.includes('SFML') || groupTitle.includes('Love2D') || groupTitle.includes('Unity') || groupTitle.includes('Godot')) return 'Game Development';
    if (groupTitle.includes('Tools') || groupTitle.includes('Embedded')) return 'Tools';
    if (groupTitle.includes('PSP') || groupTitle.includes('PS1') || groupTitle.includes('Arduino')) return 'Embedded';
    return 'Other';
  };

  // Filter groups and items by search and category
  const filteredGroups = groups
    .map(group => {
      const matchesCategory = selectedCategory === 'All' || getCategory(group.title) === selectedCategory;
      if (!matchesCategory) return null;
      const groupTitleMatches = searchTerm === '' || group.title.toLowerCase().includes(searchTerm.toLowerCase());
      let filteredItems = group.items;
      if (!groupTitleMatches && searchTerm) {
        filteredItems = group.items.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }
      if ((groupTitleMatches && filteredItems.length > 0) || filteredItems.length > 0) {
        return { ...group, items: filteredItems };
      }
      return null;
    })
    .filter((g): g is Group => g !== null);

  // Count only visible items
  const foundCount = filteredGroups.reduce((acc, group) => acc + group.items.length, 0);

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => {
      const s = new Set(prev);
      if (s.has(title)) s.delete(title);
      else s.add(title);
      return s;
    });
  };
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-theme-primary dark:text-theme-primary-dark">Projects</h1>
          <a href="https://github.com/robfernan/portfolio.git" target="_blank" rel="noopener noreferrer" title="View Portfolio on GitHub" className="inline-block align-middle ml-4">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-theme-secondary dark:text-theme-secondary-dark hover:text-theme-accent dark:hover:text-theme-accent-dark transition-colors">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <p className="text-theme-secondary dark:text-theme-secondary-dark mt-2">A consolidated list of completed, in-progress, and planned projects across web, desktop, and game development.</p>
      </header>

      <section className="mb-8 bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark p-4 rounded">
        <h2 className="text-xl font-semibold text-theme-primary dark:text-theme-primary-dark">About</h2>
        <p className="mt-2 text-theme-secondary dark:text-theme-secondary-dark">I blend systems programming, interactive design, and web development across many platforms: SFML/C++, Love2D/Lua, React/TypeScript, and experimental engine work. Below are representative projects grouped by platform and area.</p>
      </section>

      {/* Search and Filter */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-theme-accent dark:border-theme-accent-dark rounded-lg bg-theme-card dark:bg-theme-card-dark text-theme-primary dark:text-theme-primary-dark focus:outline-none focus:ring-2 focus:ring-theme-accent dark:focus:ring-theme-accent-dark"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category
                    ? 'bg-theme-accent dark:bg-theme-accent-dark text-white border-theme-accent dark:border-theme-accent-dark'
                    : 'bg-theme-card dark:bg-theme-card-dark text-theme-secondary dark:text-theme-secondary-dark border-theme-accent dark:border-theme-accent-dark hover:bg-theme-accent/10 dark:hover:bg-theme-accent-dark/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {searchTerm && (
          <p className="text-theme-secondary dark:text-theme-secondary-dark mb-4">
            Showing results for "{searchTerm}" • {foundCount} project{foundCount !== 1 ? 's' : ''} found
          </p>
        )}
      </section>

      {filteredGroups.map(group => (
        <section key={group.title} className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-theme-primary dark:text-theme-primary-dark flex items-center gap-2">
              {group.title}
              {group.github && typeof group.github === 'string' && (
                <a href={group.github} target="_blank" rel="noopener noreferrer" title="View on GitHub" className="inline-block align-middle">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-theme-secondary dark:text-theme-secondary-dark hover:text-theme-accent dark:hover:text-theme-accent-dark transition-colors">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </h3>
            <button
              type="button"
              onClick={() => toggleGroup(group.title)}
              aria-expanded={openGroups.has(group.title)}
              className="ml-4 px-2 py-1 rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark text-theme-secondary dark:text-theme-secondary-dark"
            >
              {openGroups.has(group.title) ? 'Collapse' : `Expand (${group.items.length})`}
            </button>
          </div>

          {openGroups.has(group.title) && group.items.length > 0 && (
            <ul className="project-list mt-3">
              {group.items.map(item => {
                const slug = slugify(item.title);
                // Prefer a mapped filename in public/assets/projects when available
                const mapped = filenameMap[item.title];
                const imgBase = mapped ? `/assets/projects/${mapped.replace(/\.(png|jpg)$/, '')}` : `/assets/projects/${slug}`;
                const imgPathPng = `${imgBase}.png`;
                const imgPathJpg = `${imgBase}.jpg`;
                return (
                  <li key={item.title} className="project-item mb-4 p-3 rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark flex items-start gap-4">
                    <div className="project-image flex-shrink-0 w-36 h-24 bg-theme-bg dark:bg-theme-bg-dark rounded overflow-hidden">
                      <ProjectThumb 
                        mappedFilename={mapped} 
                        slug={slug} 
                        alt={item.title} 
                        onClick={() => {
                          setModalProject(item);
                          setModalImageIdx(0);
                          setModalOpen(true);
                        }}
                      />
                    </div>
      {/* Modal for project gallery */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => setModalOpen(false)}>
          <div className="relative bg-theme-card dark:bg-theme-card-dark rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-6" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-2xl text-theme-secondary dark:text-theme-secondary-dark hover:text-theme-accent" onClick={() => setModalOpen(false)} aria-label="Close">&times;</button>
            <div className="flex flex-col items-center">
              <div className="w-full flex items-center justify-center mb-4">
                {getProjectImages(modalProject, filenameMap[modalProject.title], slugify(modalProject.title)).length > 1 && (
                  <button onClick={() => setModalImageIdx(idx => Math.max(0, idx - 1))} disabled={modalImageIdx === 0} className="px-2 py-1 text-lg">&#8592;</button>
                )}
                <img
                  src={getProjectImages(modalProject, filenameMap[modalProject.title], slugify(modalProject.title))[modalImageIdx]}
                  alt={modalProject.title}
                  className="max-h-96 max-w-full rounded shadow-lg object-contain bg-theme-bg dark:bg-theme-bg-dark"
                  style={{ minHeight: 200 }}
                />
                {getProjectImages(modalProject, filenameMap[modalProject.title], slugify(modalProject.title)).length > 1 && (
                  <button onClick={() => setModalImageIdx(idx => Math.min(getProjectImages(modalProject, filenameMap[modalProject.title], slugify(modalProject.title)).length - 1, idx + 1))} disabled={modalImageIdx === getProjectImages(modalProject, filenameMap[modalProject.title], slugify(modalProject.title)).length - 1} className="px-2 py-1 text-lg">&#8594;</button>
                )}
              </div>
              <div className="text-center">
                <strong className="text-xl text-theme-primary dark:text-theme-primary-dark">{modalProject.title}</strong>
                {modalProject.description && <div className="mt-2 text-theme-secondary dark:text-theme-secondary-dark">{modalProject.description}</div>}
                {modalProject.link && <div className="mt-2"><a href={modalProject.link} className="text-theme-accent dark:text-theme-accent-dark underline" target="_blank" rel="noreferrer">Project Link</a></div>}
                {modalProject.demo && <div className="mt-4"><a href={modalProject.demo} className="text-theme-accent dark:text-theme-accent-dark underline" target="_blank" rel="noreferrer">View Demo</a></div>}
              </div>
              {getProjectImages(modalProject, filenameMap[modalProject.title], slugify(modalProject.title)).length > 1 && (
                <div className="flex gap-2 mt-4">
                  {getProjectImages(modalProject, filenameMap[modalProject.title], slugify(modalProject.title)).map((img, i) => (
                    <button key={img} onClick={() => setModalImageIdx(i)} className={`w-10 h-10 rounded border ${i === modalImageIdx ? 'border-theme-accent dark:border-theme-accent-dark' : 'border-theme-secondary dark:border-theme-secondary-dark'} overflow-hidden`}>
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
                    <div className="project-description text-theme-secondary dark:text-theme-secondary-dark flex-1">
                      <strong className="block text-theme-primary dark:text-theme-primary-dark">{item.title}</strong>
                      {item.description && <span className="block mt-1">{item.description}</span>}
                      {item.link && <a className="inline-block mt-2 text-theme-accent dark:text-theme-accent-dark" href={item.link} target="_blank" rel="noreferrer">Visit</a>}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      ))}

      <footer className="mt-8 text-theme-secondary dark:text-theme-secondary-dark">© Robert Fernandez</footer>
    </div>
  );
}
