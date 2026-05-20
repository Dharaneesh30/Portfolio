Copy your existing assets from the original static site into this folder so the React app can serve them.

From the workspace root run:

powershell -Command "Copy-Item -Path '..\frontend\asset\*' -Destination '.\public\asset' -Recurse"

Files to copy:
- profile.jpg
- resume.pdf

After copying, restart the dev server if needed.
