namespace SolarSystemFudge {
    import ƒ = FudgeCore;

    export class Body extends ƒ.Node {
        private static mesh: ƒ.Mesh = new ƒ.MeshSphere("Body");
        private static material: ƒ.Material = new ƒ.Material("Body", ƒ.ShaderLit);

        public position: ƒ.Vector3;
        public name: string;

        public rotationNode: ƒ.Node;
        public scalingNode: ƒ.Node;
        private size: number;
        private distance: number = 0;
        private vOrbit: number;
        private vRotation: number;

        public constructor(_name: string, _size: number, _distance: number, _vOrbit: number, _color: string) {
            super(_name);
            this.name = _name;
            this.size = _size;
            this.vOrbit = _vOrbit;

            this.rotationNode = new ƒ.Node(_name + "Rotation Node");
            this.rotationNode.addComponent(new ƒ.ComponentTransform());
            this.rotationNode.addChild(this);

            this.scalingNode = new ƒ.Node(_name + "Scaling Node");
            this.scalingNode.addComponent(new ƒ.ComponentTransform());
            this.scalingNode.addChild(this);
            
            const tempMat: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color)

            this.addComponent(new ƒ.ComponentMesh(Body.mesh));
            this.addComponent(tempMat);
            this.addComponent(new ƒ.ComponentTransform());

            this.mtxLocal.translateX(_distance);

        }

        public step(): void {
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);

            const c: ƒ.Node = this.getChild(0);

            if (c) {
                for (const bn of c.getChildren())
                (bn as Body).step()
            }
        }

        public scaling(): void {
            this.scalingNode.mtxLocal.scaleY(this.size);

            const c: ƒ.Node = this.getChild(1);

            if (c) {
                for (const bn of c.getChildren())
                (bn as Body).step()
            }
        }

        public setTransforms(_vOrbit: number, _vRotation: number, _distance: number): void {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }

    }
}