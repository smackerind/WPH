// Contoh Readonly
interface AppConfig {
  apiUrl: string;
  timeout: number;
}

type Config = Readonly<AppConfig>;

const config: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

console.log(config.apiUrl);

// Contoh Record
type Role = 'admin' | 'mentor' | 'student';

type RecordRole = Record<Role, string>;

const roleLabels: RecordRole = {
  admin: 'Administrator',
  mentor: 'Mentor',
  student: 'Student',
};

console.log(roleLabels);

// Step 1 - Record dengan Key Dinamis
const stockByCategory: Record<string, number> = {
  laptop: 25,
  keyboard: 100,
  mouse: 10,
};
console.log(stockByCategory);

// Step 2 - Record dengan Union
type HttpsStatus = 200 | 400 | 404 | 500;

const statusMessage: Record<HttpsStatus, string> = {
  200: 'Success',
  400: 'Bad Request',
  404: 'Not Found',
  500: 'Internal Server Error',
};
console.log(statusMessage);

// Step 3 - Readonly Record
type Feature = 'search' | 'checkout' | 'review';

const featureFlags: Readonly<Record<Feature, Boolean>> = {
  search: true,
  checkout: false,
  review: true,
};

console.log(featureFlags);

// Step 4 - Readonly bersifat Shallow
type Settings = {
  theme: string;
  options: {
    compact: boolean;
  };
};

type SettingsTest = Readonly<Settings>;

const settings: Readonly<Settings> = {
  theme: 'dark',
  options: { compact: false },
};

settings.theme = 'light';
settings.options.compact = true;
