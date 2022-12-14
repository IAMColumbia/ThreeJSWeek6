import * as THREE from "three"
    var width = window.innerWidth - 20;
    var height = window.innerHeight - 50;
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(50, width / height, .1, 1000);
    camera.position.z = 6;
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor("#e5e5e5");
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    window.addEventListener("newSize", () => {
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    })
    
    var light = new THREE.PointLight(0xFFFFFF, 1, 500);
    light.position.set(10, 0, 25);
    scene.add(light);

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshLambertMaterial({color : 0xFFCC00});
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = 2;
    scene.add(mesh);

    var geometry2 = new THREE.ConeGeometry(.5, 2.0, 16);
    var material2 = new THREE.MeshLambertMaterial({color : 0x0303fc});
    var mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.x = 2;
    scene.add(mesh2);

    var geometry3 = new THREE.SphereGeometry( 1, 100, 100 );
    var material3 = new THREE.MeshLambertMaterial({color : 0x03fc56});
    var mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.position.x = -4;
    scene.add(mesh3);

    var shape = new THREE.Shape();
    shape.moveTo(2,0);
    shape.bezierCurveTo(-1, 2);
    shape.bezierCurveTo(3, 2);
    shape.bezierCurveTo(2, 0);

    var geometry4 = new THREE.ShapeGeometry(shape);
    var material4 = new THREE.MeshLambertMaterial({color : 0xfc03a1});
    var mesh4 = new THREE.Mesh(geometry4, material4);
    mesh4.position.x = -2;
    mesh4.rotation.z = -45;
    scene.add(mesh4);

    var render = function()
    {
        requestAnimationFrame(render);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        mesh2.rotation.x += 0.01;
        mesh2.rotation.y += 0.01;
        mesh3.rotation.x += 0.01;
        mesh3.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    render();