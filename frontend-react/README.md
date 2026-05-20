# Portfolio React (Vite + Tailwind)

This scaffold provides a starting point for migrating the existing static site into React with a 3D hero using `@react-three/fiber`.

Quick setup

```powershell
cd frontend-react
npm install
npm run dev
```

Notes
- Copy your assets (profile.jpg, resume.pdf) into `public/asset/` before building, or update image paths.
- Install additional packages if you want to change versions.
- The `ThreeHero` component is a placeholder; replace with your custom 3D model and animations.

Next steps I will take if you confirm:
- Add routing and convert `projects.html`, `resume.html`, `contact.html` into React routes/components.
- Port the existing CSS design into Tailwind utilities and small global tokens.
- Implement dark-mode using React context and persist in `localStorage`.
- Replace placeholder 3D box with a refined scene and interactions.
