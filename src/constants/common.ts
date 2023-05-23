const API_URL = 'https://jsonplaceholder.typicode.com';

const IDS_SKELETONS = [0, 1, 2, 3, 4, 5];

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

export { API_URL, IDS_SKELETONS, RoutePath, ApiPath };
