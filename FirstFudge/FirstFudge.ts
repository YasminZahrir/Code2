namespace FirstFudge {
    import ƒ = FudgeCore;

    const node: ƒ.Node = new ƒ.Node("Node");
    let globalViewport: ƒ.Viewport;
    window.addEventListener("load", start)

    function start(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;

        const mesh: ƒ.MeshCube = new ƒ.MeshCube("Cube");

        const camera: ƒ.ComponentCamera = new ƒ.ComponentCamera();


        const cmpMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(mesh)
        node.addComponent(cmpMesh);

        const material: ƒ.Material = new ƒ.Material("Material", ƒ.ShaderLit);
        const cmpMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(0, 2, 5, 0.5)
        node.addComponent(cmpMaterial);

        node.addComponent(new ƒ.ComponentTransform());

        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);

        const viewport: ƒ.Viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;

        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, moveCube)
        ƒ.Loop.start()

        ƒ.Time.game.setScale(1)
    }

    function moveCube(): void {
        const frameTimeInMilliseconds: number = ƒ.Loop.timeFrameGame;
        const frameTimeInSeconds: number = (frameTimeInMilliseconds / 1000);
        const degrees: number = 360 * frameTimeInSeconds;
        node.mtxLocal.rotateY(degrees);

        globalViewport.draw()
    }
}