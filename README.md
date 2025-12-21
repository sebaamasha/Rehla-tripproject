Rehla – Travel Stories App

Rehla is a React project that allows users to explore travel stories, submit their own travel experiences.
The project includes three pages: home page, form page to add a travel experience, and API page.

The app uses React Router to navigate between these pages:
    * Home page.
    * Form page.
    * API page.
    * Favorites page.
    * a 404 page.

Context:
   The project uses React Context to manage a global favorites list.
 FavoritesContext stores the list of favorite stories and provides functions to add or remove favorites.
 his context is used in multiple places, such as:
    * Home page – adding a story to favorites.

    * API page – adding API stories to favorites.

    * Navigation bar – displaying the number of favorite items.