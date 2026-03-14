const groq = String.raw;

// Site Settings
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    phone,
    email,
    address,
    socialLinks,
    announcementBar
  }
`

// Articles
export const ALL_ARTICLES_QUERY = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    featured,
    "categoryTitle": category->title
  }
`

export const ARTICLE_BY_SLUG_QUERY = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    coverImage,
    publishedAt,
    featured,
    "category": category-> {
      _id,
      title,
      slug
    }
  }
`

export const FEATURED_ARTICLES_QUERY = groq`
  *[_type == "article" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    "categoryTitle": category->title
  }
`

// Team Members
export const ALL_TEAM_MEMBERS_QUERY = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo,
    email,
    linkedin,
    order,
    isExpert,
    expertiseArea
  }
`

export const EXPERT_MEMBERS_QUERY = groq`
  *[_type == "teamMember" && isExpert == true] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo,
    email,
    linkedin,
    expertiseArea
  }
`

// Member Companies
export const ALL_MEMBER_COMPANIES_QUERY = groq`
  *[_type == "memberCompany"] | order(order asc) {
    _id,
    name,
    logo,
    website,
    sector,
    featured,
    order
  }
`

export const FEATURED_MEMBER_COMPANIES_QUERY = groq`
  *[_type == "memberCompany" && featured == true] | order(order asc) {
    _id,
    name,
    logo,
    website,
    sector
  }
`

// Services
export const ALL_SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    details,
    order
  }
`

// Initiatives
export const ALL_INITIATIVES_QUERY = groq`
  *[_type == "initiative"] {
    _id,
    title,
    slug,
    description,
    body,
    coverImage,
    startYear,
    impactStats
  }
`

// Committees
export const ALL_COMMITTEES_QUERY = groq`
  *[_type == "committee"] {
    _id,
    name,
    slug,
    description,
    objectives,
    coverImage,
    "members": members[]-> {
      _id,
      name,
      role,
      photo
    }
  }
`

// Categories
export const ALL_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }
`

// Events
export const UPCOMING_EVENTS_QUERY = groq`
  *[_type == "event" && date >= now()] | order(date asc) {
    _id,
    title,
    slug,
    description,
    date,
    location,
    coverImage
  }
`
