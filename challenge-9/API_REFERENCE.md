# TMDB API Reference - Quick Guide

Dokumentasi singkat untuk endpoint TMDB API yang sering digunakan dalam project ini, semoga membantu kalian ya

## Base URL

```
cek di website https://www.themoviedb.org
```

## Authentication

Semua request membutuhkan API key. Bisa dikirim sebagai:

1. Query parameter: `?api_key=YOUR_API_KEY`
2. Header: `Authorization: Bearer YOUR_API_KEY`

**Recommended**: Gunakan query parameter untuk simplicity.

## Common Endpoints

### 1. Get Popular Movies

```
GET /movie/popular
```

**Query Parameters:**

- `api_key` (required)
- `language` (optional) - Default: en-US
- `page` (optional) - Default: 1

**Example:**

```javascript
const response = await axios.get('/movie/popular', {
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    page: 1,
  },
});
```

**Response:**

```json
{
  "page": 1,
  "results": [
    {
      "id": 123,
      "title": "Movie Title",
      "overview": "Movie description...",
      "poster_path": "/path/to/poster.jpg",
      "backdrop_path": "/path/to/backdrop.jpg",
      "release_date": "2024-01-01",
      "vote_average": 7.5,
      "vote_count": 1000
    }
  ],
  "total_pages": 100,
  "total_results": 2000
}
```

### 2. Get Now Playing Movies

```
GET /movie/now_playing
```

**Query Parameters:** Same as Popular Movies

### 3. Get Movie Details

```
GET /movie/{movie_id}
```

**Query Parameters:**

- `api_key` (required)
- `language` (optional)
- `append_to_response` (optional) - e.g., "credits,videos,similar"

**Example:**

```javascript
const response = await axios.get(`/movie/${movieId}`, {
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    append_to_response: 'credits,videos,similar',
  },
});
```

### 4. Search Movies

```
GET /search/movie
```

**Query Parameters:**

- `api_key` (required)
- `query` (required) - Search term
- `page` (optional)
- `language` (optional)

**Example:**

```javascript
const response = await axios.get('/search/movie', {
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    query: 'spider-man',
    page: 1,
  },
});
```

### 5. Get Movie Credits (Cast & Crew)

```
GET /movie/{movie_id}/credits
```

**Response includes:**

- `cast` - Array of actors
- `crew` - Array of crew members (director, producer, etc.)

### 6. Get Similar Movies

```
GET /movie/{movie_id}/similar
```

### 7. Get Movie Videos (Trailers)

```
GET /movie/{movie_id}/videos
```

## Image URLs

TMDB returns relative paths untuk images. Kalian perlu construct full URL:

```
https://image.tmdb.org/t/p/{size}{file_path}
```

**Available Sizes:**

- Poster: `w92`, `w154`, `w185`, `w342`, `w500`, `w780`, `original`
- Backdrop: `w300`, `w780`, `w1280`, `original`
- Profile: `w45`, `w185`, `h632`, `original`

**Example:**

```javascript
const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
```

**Utility Function:**

```typescript
export function getImageUrl(path: string, size: string = 'w500'): string {
  if (!path) return '/placeholder.jpg'; // fallback
  return `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/${size}${path}`;
}
```

## Rate Limiting

TMDB API has rate limits:

- 40 requests per 10 seconds
- If exceeded, you'll get 429 (Too Many Requests)

**Tips:**

- Use React Query caching
- Don't make unnecessary requests
- Implement retry logic

## Error Handling

Common error status codes:

- `401` - Invalid API key
- `404` - Resource not found
- `429` - Rate limit exceeded

**Example Error Handler:**

```typescript
try {
  const response = await movieService.getPopularMovies();
  return response.data;
} catch (error) {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 401) {
      throw new Error('Invalid API key');
    }
    if (error.response?.status === 404) {
      throw new Error('Movie not found');
    }
  }
  throw error;
}
```

## TypeScript Types

Example types untuk API responses:

```typescript
export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails extends Movie {
  genres: Genre[];
  runtime: number;
  status: string;
  tagline: string;
  budget: number;
  revenue: number;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}
```

## React Query Integration

Example custom hook:

```typescript
import { useQuery } from '@tanstack/react-query';
import { movieService } from '@/services/movieService';

export const usePopularMovies = (page: number = 1) => {
  return useQuery({
    queryKey: ['movies', 'popular', page],
    queryFn: () => movieService.getPopularMovies(page),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => movieService.getMovieDetails(movieId),
    enabled: !!movieId, // Only run if movieId exists
  });
};
```

## Resources

- [Official TMDB API Docs](https://developer.themoviedb.org/docs)
- [API Reference](https://developer.themoviedb.org/reference/intro/getting-started)
- [Image Configuration](https://developer.themoviedb.org/docs/image-basics)

---

**Note**: Ini hanya endpoint-endpoint yang umum digunakan. Untuk endpoint lengkap, check official documentation!
