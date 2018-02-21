import './style/_module.scss';

const DEBOUNCE_MS = 200;
const SETVIEWPORTHEIGHT_SELECTOR = 'js-setviewportsize';

class App {
    constructor() {
        this._cache = {};
        this.loadActions();
    }

    loadActions() {
        window.addEventListener('resize', () => this.onResize());
        this.onResize();
    }

    onResize() {
        this._cache.viewport = null;
        this.setViewportSize();
    }

    updateViewportInformation() {
        return this._cache.viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    getViewportInformation() {
        return this._cache.viewport || this.updateViewportInformation();
    }

    setViewportSize($el) {
        let elements = document.querySelector(`.${SETVIEWPORTHEIGHT_SELECTOR}`);
        let viewportSize = this.getViewportInformation();

        elements.setAttribute('style', `max-width: ${viewportSize.width}px; max-height: ${viewportSize.height}px`);
    }
}

window.onload = function() {
	new App();
};
