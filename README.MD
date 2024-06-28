### 1. App.js активирует на роуте /auth/twitter процесс регистрации пользователя.

### 2. check_like.js - проверяет, поставил ли пользователь лайк под определенным твитом.

### 3. following.js - подписывает авторизованного пользователя на другого пользователя. При этом используются ключи, которые получаются в процессе регистрации.

### 4. То что прилетает в коллбэке после регистрации:

READ

```js
req.user from callback: {
  id: '1793382261921861632',
  username: 'J_0_h_n_n_i_e',
  displayName: 'Evgenii Zakirov',
  photos: [
    {
      value: 'https://pbs.twimg.com/profile_images/1793382582534447104/kY6vLuEf_normal.jpg'
    }
  ],
  provider: 'twitter',
  _json: {
    id: 1793382261921861600,
    id_str: '1793382261921861632',
    name: 'Evgenii Zakirov',
    screen_name: 'J_0_h_n_n_i_e',
    location: '',
    description: '',
    url: null,
    entities: { description: [Object] },
    protected: false,
    followers_count: 0,
    friends_count: 2,
    listed_count: 0,
    created_at: 'Wed May 22 20:44:18 +0000 2024',
    favourites_count: 0,
    utc_offset: null,
    time_zone: null,
    geo_enabled: false,
    verified: false,
    statuses_count: 0,
    lang: null,
    contributors_enabled: false,
    is_translator: false,
    is_translation_enabled: false,
    profile_background_color: 'F5F8FA',
    profile_background_image_url: null,
    profile_background_image_url_https: null,
    profile_background_tile: false,
    profile_image_url: 'http://pbs.twimg.com/profile_images/1793382582534447104/kY6vLuEf_normal.jpg',
    profile_image_url_https: 'https://pbs.twimg.com/profile_images/1793382582534447104/kY6vLuEf_normal.jpg',
    profile_link_color: '1DA1F2',
    profile_sidebar_border_color: 'C0DEED',
    profile_sidebar_fill_color: 'DDEEF6',
    profile_text_color: '333333',
    profile_use_background_image: true,
    has_extended_profile: true,
    default_profile: true,
    default_profile_image: false,
    following: false,
    follow_request_sent: false,
    notifications: false,
    translator_type: 'none',
    withheld_in_countries: [],
    suspended: false,
    needs_phone_verification: false
  },
  _accessLevel: 'read',
  token: '',
  tokenSecret: ''
}
```

READ AND WRITE

```js
req.user from callback: {
  id: '1471796057852067845',
  username: 'CrazySantaINU',
  displayName: 'Crazy Santa INU',
  photos: [
    {
      value: 'https://pbs.twimg.com/profile_images/1471801246076002311/3DwCOoKL_normal.jpg'
    }
  ],
  provider: 'twitter',
  _json: {
    id: 1471796057852067800,
    id_str: '1471796057852067845',
    name: 'Crazy Santa INU',
    screen_name: 'CrazySantaINU',
    location: '',
    description: 'Production NFT according to your design.\nhttps://t.co/FVCK3SQrqs',
    url: 'https://t.co/UYp5N0osen',
    entities: { url: [Object], description: [Object] },
    protected: false,
    followers_count: 46,
    friends_count: 11,
    listed_count: 0,
    created_at: 'Fri Dec 17 10:55:25 +0000 2021',
    favourites_count: 5,
    utc_offset: null,
    time_zone: null,
    geo_enabled: false,
    verified: false,
    statuses_count: 14,
    lang: null,
    status: {
      created_at: 'Thu Jun 27 02:00:04 +0000 2024',
      id: 1806145442276638700,
      id_str: '1806145442276638774',
      text: 'RT @J_0_h_n_n_i_e: Relax! And let the whole world wait! https://t.co/4qbksXXGST',
      truncated: false,
      entities: [Object],
      extended_entities: [Object],
      source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      retweeted_status: [Object],
      is_quote_status: false,
      retweet_count: 1,
      favorite_count: 0,
      favorited: false,
      retweeted: true,
      possibly_sensitive: false,
      lang: 'en'
    },
    contributors_enabled: false,
    is_translator: false,
    is_translation_enabled: false,
    profile_background_color: 'F5F8FA',
    profile_background_image_url: null,
    profile_background_image_url_https: null,
    profile_background_tile: false,
    profile_image_url: 'http://pbs.twimg.com/profile_images/1471801246076002311/3DwCOoKL_normal.jpg',
    profile_image_url_https: 'https://pbs.twimg.com/profile_images/1471801246076002311/3DwCOoKL_normal.jpg',
    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1471796057852067845/1639739932',
    profile_link_color: '1DA1F2',
    profile_sidebar_border_color: 'C0DEED',
    profile_sidebar_fill_color: 'DDEEF6',
    profile_text_color: '333333',
    profile_use_background_image: true,
    has_extended_profile: true,
    default_profile: true,
    default_profile_image: false,
    following: false,
    follow_request_sent: false,
    notifications: false,
    translator_type: 'none',
    withheld_in_countries: [],
    suspended: false,
    needs_phone_verification: false
  },
  _accessLevel: 'read-write',
  token: '',
  tokenSecret: ''
}
```