# WK-1 Assignment — PLP Bookstore (MERN)

Small Mongoose / MongoDB assignment demonstrating queries, aggregations, indexing, and seeding for a simple bookstore collection.

## Project files
- `queries.js` — example queries, aggregations, indexing and explain.
- `seed.js` — sample data seeder for the `Books` collection.
- `db.js` — MongoDB connection helper (`connectDB`).
- `plp_bookstore/books.js` — Mongoose schema and model (`Books`).
- `.env` — contains `MONGODBATLAS_URI` (not committed).
- `package.json` — project metadata and dependencies.
- `read.md` — this README.

## Prerequisites
- Node.js (recommended v14+)
- A MongoDB connection string (Atlas or local). Add it to `.env`:
```
MONGODBATLAS_URI=<your-mongodb-uri>
```

## Setup (Windows)
1. Install dependencies:
```powershell
npm install
```
2. Create `.env` in the project root with `MONGODBATLAS_URI`.

## Seed the database
Populate sample books:
```powershell
node seed.js
```

## Run the queries
Execute the queries and aggregation examples:
```powershell
node queries.js
```

## Notes / Fixes
- Query 3 in `queries.js` is incomplete. Replace the incomplete line with:
```js
const keatsBooks = await Books.find({ author: 'John Keats' });
```
- Index creation in the script is idempotent — creating the same index multiple times is safe.
- If connection fails, verify `MONGODBATLAS_URI` and network/Atlas IP whitelist.

## Useful commands
- Linting / test commands (if present) are in `package.json`.
- To inspect query performance, see the `explain('executionStats')` call in `queries.js`.

## License

This project is licensed under the MIT License.


MIT License

Copyright (c) 2025 <Tito Mwenda>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.