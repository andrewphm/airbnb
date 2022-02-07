<div align="center">

# Airbnb Clone

https://legible.andrewpham.ca/legible

<img src="~/../airbnbpreview.png">

</div>

## About

This application was built with the purpose of using and learning new technologies I haven't had much expereince with Next.js and Tailwind CSS.

## Code Stack

### Core Technologies

- `Front-end`:
  - React: Front-end framework
  - Next.js: framework
  - Tailwind: CSS framework
  - Material UI icons
  - `react-map-gl` package to render map
  - https://www.mapbox.com/ for map styling
- `Hosting`:
  - Vercel

## Features

- Fully responsive design
- Server side rendering
- Map interface

## Challenges and learnings

- With the help of `react-map-gl` it was very intuitive to integrate Mapbox GL JS as a fully controlled reactive component.

### Available Scripts

- To start the Next development server

```sh
cd client
npm install
npm run dev
```

#

### Client File Structure

```sh
client/src/
├── components    # Reusable components
├── redux         # Global state management
├── styles        # Global app styles
└── pages         # Page indexs

```
