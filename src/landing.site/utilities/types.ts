export interface Site {
  profile: Profile;
  navigation: Navigation[];
  seo: Seo;
  favicon: Favicon;
}

export interface Seo {
  author: string;
  description: string;
  keywords: string;
  robots: string;
  title: string;
  image: Image;
}

export interface Profile {
  bio: string;
}

export interface Navigation {
  value: string;
  url?: string;
}

export interface Favicon {
  url: string;
}

export interface Image {
  url: string;
}
