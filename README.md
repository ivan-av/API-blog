# API - Blog

### Iván D. Avila Campos

---
## Rutas

# Rutas

- /api/v1/users
- /api/v1/users/:id
- /api/v1/posts/:id
- /api/v1/users/me
- /api/v1/users/me/posts/:id

- /api/v1/auth/login
- /api/v1/auth/register
- /api/v1/auth/password-recovery
- /api/v1/auth/verify-account

--- 

- /api/v1/users
    - GET 

- /api/v1/posts
    - POST (login required)
    - GET

- /api/v1/posts/:id
    - GET

- /api/v1/users/:id
    - GET 
    - PUT (admin)
    - DELETE (admin)

- /api/v1/users/me
    - GET
    - PUT
    - PATCH
    - DELETE

- /api/v1/users/me/posts/:id
    - GET (post of the logged user)
    - PUT (edit a post)
    - DELETE (delete a post)

- /api/v1/auth/login
    - POST

- /api/v1/auth/register
    - POST

- /api/v1/auth/password-recovery
    - POST 
    - PATCH