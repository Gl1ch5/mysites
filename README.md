# Vintage iOS Website 📱

A simple, static website designed to look like a vintage iOS (iOS 1-6) home screen, complete with skeuomorphic design elements, glossy buttons, linen backgrounds, and a secret admin panel.

## Features

- **Vintage iOS Design**: Faithful recreation of early iOS aesthetics using CSS.
- **Home Screen Layout**: App icons that trigger simple alerts.
- **Secret Admin Panel**: A hidden page accessible via a "secret" interaction.
- **Client-Side Authentication**: A simple JavaScript-based passcode prompt to access the admin area.
- **Ready for GitHub Pages**: Completely static files (`.html`, `.css`, `.js`) that can be hosted instantly and for free.

## How to Access the Secret Admin Panel

1. **Trigger**: On the main `index.html` page, quickly click or tap **3 times** on the top left corner (the empty space above the "Messages" icon, below the status bar). This will navigate you to the `secret-admin.html` page.
2. **Passcode**: Once on the Admin Panel login screen, enter the secret passcode: `vintage`.
3. **Access**: You will now see the classified admin content!

## Deployment to GitHub Pages

Since this site is built using standard HTML, CSS, and JS, it's perfect for hosting on GitHub Pages. You can even host it from a **Private** repository (Note: GitHub Pro/Team/Enterprise is required to publish Pages from a private repo, otherwise the repo must be public).

### Steps to Deploy:

1. **Create a Repository**: Create a new repository on GitHub. You can set it to **Private** if you wish (subject to your GitHub plan's Pages limitations).
2. **Push the Code**: Commit and push these files to your `main` or `master` branch.
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Vintage iOS Site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub.
   - Click on **Pages** in the left sidebar.
   - Under "Source", select the branch containing your code (usually `main`) and the `/ (root)` folder.
   - Click **Save**.
4. **View your Site**: After a few minutes, your site will be published at `https://yourusername.github.io/your-repo-name/`.

## Customization

- **Icons & Links**: Modify `index.html` to change the app icons or the actions they trigger. You can change `onclick="alert(...)"` to actual links `href="my-other-page.html"`.
- **Passcode**: Change the `SECRET_PASSCODE` constant in `js/main.js` to set a different password.
- **Styling**: Tweak colors, gradients, and shadows in `css/style.css` to further refine the vintage look.

---
*Note: The authentication mechanism is strictly client-side for aesthetic and fun purposes. It is not secure for protecting sensitive information.*
