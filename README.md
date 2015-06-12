elo rank any list

# what

- POST /lists
- GET /lists/:id
  - start comparing
  - see randomly ordered
  - see ranked
- GET /lists/:id/comparisons/new
- POST /lists/:id/comparisons
  - rank list
- authentication
  - groups, orgs

# how

- models
  - lists
    - name
    - description (markdown)
  - items
    - list-id
    - name
    - description (markdown)
    - score
  - comparisons
    - list-id?
    - win-id
    - lose-id
    - created-at

- es6
- react?
- slack
