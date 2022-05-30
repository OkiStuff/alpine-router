import page from "//unpkg.com/page/page.mjs";

export class AlpineRouter {
    constructor() {
        this._tagTracker = {};
        this.current = "";
    }

    route(url, tag) {
        this._tagTracker[url] = tag;
        page(url, this._routerCallback);
    }

    setCurrent(tag) {
        this.current = tag;
    }

    getCurrentNames() {
        return {
            currentBody: this.current + "-body",
            currentHead: this.current + "-head"
        };
    }

    getCurrentDocuments() {
        return {
            currentBody: document.getElementById(this.current + "-body"),
            currentHead: document.getElementById(this.current + "-head")
        };
    }

    getCurrents() {
        return {
            currentBody: document.getElementById(this.current + "-body").innerHTML,
            currentHead: document.getElementById(this.current + "-head").innerHTML
        };
    }

    getCurrentBodyName() {
        return this.current + "-body";
    }

    getCurrentBodyDocument() {
        return document.getElementById(this.current + "-body");
    }

    getCurentBody() {
        return document.getElementById(this.current + "-body").innerHTML;
    }

    getCurrentHeadName() {
        return this.current + "-head";
    }

    getCurrentHeadDocument() {
        return document.getElementById(this.current + "-head");
    }

    getCurrentHead() {
        return document.getElementById(this.current + "-head").innerHTML;
    }

    _routerCallback(context, next) {
        this.setCurrent(this._tagTracker[context.pathname]);
    }
}