### 1. App.js активирует на роуте /auth/twitter процесс регистрации пользователя.

### 2. check_like.js - проверяет, поставил ли пользователь лайк под определенным твитом.

### 3. То что прилетает в коллбэке после регистрации:

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
  token: '1793382261921861632-8wlJ8xuaT4kcew0oj2ZWnJfPA',
  tokenSecret: 'ZrSzCbax2LGSTxmu7ssh3SpX9HalO9UUEZHEm0YV'
}
```
