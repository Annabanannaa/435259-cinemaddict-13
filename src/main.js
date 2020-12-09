import {createHeaderProfileTemplate} from "./view/header-profile"
import {createSiteMenuTemplate} from "./view/site-menu.js"
import {createSiteSprtTemplate} from "./view/site-sort"
import {creatFilmsWrapperTemplate} from "./view/films-wrapper"
import {createFilmsListWrapper} from "./view/films-list-wrapper"
import {creatfilmCardTemplate} from "./view/film-card"
import {createShowMoreTemplate} from "./view/show-more"
import {createStatisticsNumberTemplate} from "./view/statistics-number"
import {createPopupFilmTemplate} from "./view/popup-film"

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const siteHeaderProfileElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);
const footerStatistics = document.querySelector(`.footer__statistics`);
const footer = document.querySelector(`.footer`);
render(siteHeaderProfileElement, createHeaderProfileTemplate(), `beforeend`);
render(siteMainElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createSiteSprtTemplate(), `beforeend`);
render(siteMainElement, creatFilmsWrapperTemplate(), `beforeend`);

const siteFilmElement = document.querySelector(`.films`);
render(siteFilmElement, createFilmsListWrapper(), `beforeend`);

const filmsListWrapper = document.querySelector(`.films-list__container`);
const FILM_CARD_CAUNT = 5;
for (let i = 0; i < FILM_CARD_CAUNT; i++) {
  render(filmsListWrapper, creatfilmCardTemplate(), `beforeend`);
};

render(siteFilmElement, createShowMoreTemplate(), `beforeend`);
render(footerStatistics, createStatisticsNumberTemplate(), `beforeend`);
// render(footer, createPopupFilmTemplate(), `afterend`);
