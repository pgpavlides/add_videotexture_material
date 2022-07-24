import { EventEmitter} from "events";
import * as THREE from "three"
import{GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"
import{DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader"
import assets from "./assets.js";
import Experience from "../Experience.js";

export default class Resources extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.assets = assets;

        this.items = {}
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoader();
        this.startLoading();
    }
    setLoader(){
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);

    }
    startLoading(){
        for(const asset of this.assets){
            if(asset.type === "glbModel"){
                this.loaders.gltfLoader.load(asset.path,(file)=>{
                    this.singleAssetLoaded(asset, file);
                })
            }else if (asset.type === "videoTexture"){
                this.video = {};
                this.videoTexture = {};

                this.video[asset.name] = document.createElement("video");
                this.video[asset.name].scr = asset.path;
                this.video[asset.name].muted = true;
                this.video[asset.name].playsInline = true;
                this.video[asset.name].autoplay = true;
                this.video[asset.name].loop = true;
                this.video[asset.name].play();
                // console.log(this.videoTexture)

                this.videoTexture[asset.name] = new THREE.VideoTexture(
                    this.video[asset.name]
                    );

                this.videoTexture[asset.name].flipY = true;
                this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].magFilter = THREE.NearestFilter;
                this.videoTexture[asset.name].generateMipmaps = false;
                this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;
                // this.videoTexture[asset.name].onUpdate = true;
                // this.videoTexture[asset.name].needsUpdate = true;

                // console.log(this.videoTexture)


                this.singleAssetLoaded(asset, this.videoTexture[asset.name]);
                // console.log(this.videoTexture[asset.name])
                
            }
        }
    }

    singleAssetLoaded(asset, file){
        this.items[asset.name] = file;
        this.loaded++;

        // console.log(file);


        if(this.loaded === this.queue){
            this.emit("ready")
        }

        // console.log(file);
    }

    // update(){
    //     this.videoTexture.needsUpdate = true;
    // }
}