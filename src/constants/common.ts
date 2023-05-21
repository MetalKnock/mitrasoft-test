const API_URL = 'https://jsonplaceholder.typicode.com';

enum RoutePath {
  main = '/',
  about = '/about',
  user = '/user',
  notFound = '*',
}

enum ApiPath {
  posts = '/posts',
  comments = '/comments',
}

export { API_URL, RoutePath, ApiPath };
