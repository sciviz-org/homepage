# Homepage

Homepage for sciviz.org - A static Next.js website with Tailwind CSS, shadcn/ui, and Vanta.js background effects.

## Development

### Prerequisites

- Node.js 18 or later
- npm

### Setup and Run

Go to web folder:

```bash
cd web
```

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000` with hot-reload enabled.

## Deployment

### Using Docker

1. Build and run using docker-compose:
```bash
docker-compose up --build -d
```

2. Access the site at `http://localhost:9180`

### Manual Build

To build the static site manually:

```bash
npm run build
```

The static files will be generated in the `out` directory.

### Environment

- Production port: 9180 (mapped to container port 80)
- Base image: nginx:alpine
- Static files location: /usr/share/nginx/html

## Tech Stack

- Next.js
- Tailwind CSS
- shadcn/ui
- Vanta.js
- Three.js
