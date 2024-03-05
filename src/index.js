import {createRoot} from "react-dom/client";
import  "./styles.css"
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";

const root = createRoot(document.getElementById("root"));

root.render(
    <Canvas
        camera = {
        {
            position: [2,3,5]
        }
    }
    >

        <Experience/>
    </Canvas>
    // title = "squid games"
    // subtitle = "3D web"
)