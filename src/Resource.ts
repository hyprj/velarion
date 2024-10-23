export class Resource {
    public isLoaded = false;
    public img: HTMLImageElement;

    constructor(resourcePath: string) {
        this.img = new Image();
        this.img.src = resourcePath;
        this.img.onload = () => {
            this.isLoaded = true;
            console.log(this)
        };
    }
};
