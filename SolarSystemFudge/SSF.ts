namespace SolarSystemFudge {
    import ƒ = FudgeCore;

    window.addEventListener("load", start);

    let sun: Body;
    let viewport: ƒ.Viewport;

    function start(): void {

        sun = new Body("Sun", 1, 0, 0, "yellow");
        const earth: Body = new Body("Earth", 2, 2, 5, "blue");
        const moon: Body = new Body("Moon", 1, 1, 2, "grey")

        sun.addChild(earth.rotationNode);
        sun.addChild(earth.scalingNode);
        earth.addChild(moon.rotationNode);
        earth.addChild(moon.scalingNode)

        console.log(earth);

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const camera: ƒ.ComponentCamera = new ƒ.ComponentCamera();

        // camera.mtxPivot.translateZ(15);
        // camera.mtxPivot.translateY(15);

        camera.mtxPivot.rotateY(180);
        camera.mtxPivot.translateZ(-10);

        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();

        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
        ƒ.Loop.start();
    }

    function update(): void {
        // (sun.getChild(0).getChild(0) as Body).step();
        sun.step();
        sun.scaling();
        viewport.draw()
    }

}