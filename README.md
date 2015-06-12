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
  - let statement
  - const statement
  - Map and Set
  - WeakMap and WeakSet
  - Generators
  - Binary and Octal literals
  - Promises
  - Some additional string methods
  - Symbols
  - Template strings
- react? angular 2?
- slack
