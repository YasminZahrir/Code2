"use strict";
var SolarSystemFudge;
(function (SolarSystemFudge) {
    var ƒ = FudgeCore;
    class Body extends ƒ.Node {
        static mesh = new ƒ.MeshSphere("Body");
        static material = new ƒ.Material("Body", ƒ.ShaderLit);
        position;
        name;
        rotationNode;
        scalingNode;
        size;
        distance = 0;
        vOrbit;
        vRotation;
        constructor(_name, _size, _distance, _vOrbit, _color) {
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
            const tempMat = new ƒ.ComponentMaterial(Body.material);
            tempMat.clrPrimary.setCSS(_color);
            this.addComponent(new ƒ.ComponentMesh(Body.mesh));
            this.addComponent(tempMat);
            this.addComponent(new ƒ.ComponentTransform());
            this.mtxLocal.translateX(_distance);
        }
        step() {
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);
            const c = this.getChild(0);
            if (c) {
                for (const bn of c.getChildren())
                    bn.step();
            }
        }
        scaling() {
            this.scalingNode.mtxLocal.scaleY(this.size);
            const c = this.getChild(1);
            if (c) {
                for (const bn of c.getChildren())
                    bn.step();
            }
        }
        setTransforms(_vOrbit, _vRotation, _distance) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }
    }
    SolarSystemFudge.Body = Body;
})(SolarSystemFudge || (SolarSystemFudge = {}));
//# sourceMappingURL=SolarSystemFudge.js.map