import { Resource } from './Resource';
import './style.css'

const resources = {
  sky: `${import.meta.env.BASE_URL}sprites/sky.png`,
  ground: "/sprites/ground.png",
  hero: "/sprites/hero-sheet.png",
  shadow: "/sprites/shadow.png",
  rod: "/sprites/rod.png"
};

const skyResource = new Resource(resources.sky);

const canvas = document.querySelector("#game-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

class GameLoop {
  private rafId : number | null = null;

  public start() {
    this.rafId = requestAnimationFrame(this.update);
  };

  public stop() {
    this.rafId && cancelAnimationFrame(this.rafId);
  }

  private update = () => {
    console.log("twuj stary");
    this.rafId = requestAnimationFrame(this.update);
    ctx?.drawImage(skyResource.img, 0, 0)
  }
}

const loop = new GameLoop();
loop.start();