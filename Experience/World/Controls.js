import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Experience from "../Experience.js";
import GSAP from "gsap"

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.canvas = this.experience.canvas;

         
    }

    
    
    resize(){

    }

    update(){
             
    }

}