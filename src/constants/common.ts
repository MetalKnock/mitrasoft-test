const API_URL = 'https://jsonplaceholder.typicode.com';

const IDS_SKELETONS = [0, 1, 2, 3, 4, 5];

const PROJECTS = [
  { title: 'Historical dates', link: 'https://metalknock-historical-dates.netlify.app/' },
  { title: 'Online store', link: 'https://metalknock-online-store.netlify.app/' },
  { title: 'Music quiz', link: 'https://metalknock.github.io/music-quiz/' },
  { title: 'RSSpace', link: 'https://rsspace.onrender.com/' },
  { title: 'Gem Puzzle', link: 'https://metalknock.github.io/codejam/' },
  { title: 'Online zoo', link: 'https://metalknock.github.io/online-zoo/' },
];

const ABOUT_INFO = [
  { title: 'Full Name', description: 'Dmitry Ivanov' },
  { title: 'Years', description: '24' },
  { title: 'City', description: 'Biysk' },
  { title: 'Email', description: 'dimannisik1@gmail.com' },
];

const NAVBAR_ARIA_CONTROLS = 'navbar';

enum RoutePath {
  main = '/',
  about = '/about',
  user = '/user',
  notFound = '*',
}

enum ApiPath {
  posts = '/posts',
  comments = '/comments',
  users = '/users',
}

export { API_URL, IDS_SKELETONS, NAVBAR_ARIA_CONTROLS, PROJECTS, ABOUT_INFO, RoutePath, ApiPath };
