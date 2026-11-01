
import * as THREE from
'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

const canvas = document.getElementById('bg-canvas');

if (canvas) {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        100
    );

    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 1.5)
    );

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    // 3D particle field

    const count = window.innerWidth < 768 ? 65 : 160;

    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 28;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }

    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
        color: 0x35dfff,
        size: 0.055,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    const particles = new THREE.Points(
        geometry,
        material
    );

    scene.add(particles);

    // 3D wireframe sphere

    const sphereGeometry = new THREE.IcosahedronGeometry(
        3.2, 2
    );

    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x00cfff,
        wireframe: true,
        transparent: true,
        opacity: 0.18
    });

    const sphere = new THREE.Mesh(
        sphereGeometry,
        sphereMaterial
    );

    sphere.position.set(6, 1, -3);

    scene.add(sphere);

    // 3D floating ring

    const ringGeometry = new THREE.TorusGeometry(
        2.5, 0.025, 12, 100
    );

    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x168bff,
        transparent: true,
        opacity: 0.35
    });

    const ring = new THREE.Mesh(
        ringGeometry,
        ringMaterial
    );

    ring.position.set(-6, -2, -2);

    scene.add(ring);

    // Mouse interaction

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('pointermove', (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animation

    const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    function animate() {

        if (!reducedMotion) {
            particles.rotation.y += 0.0008;
            particles.rotation.x += 0.0003;

            sphere.rotation.x += 0.002;
            sphere.rotation.y += 0.003;

            ring.rotation.x += 0.002;
            ring.rotation.y += 0.003;

            camera.position.x +=
                (mouseX * 0.5 - camera.position.x) * 0.025;

            camera.position.y +=
                (-mouseY * 0.5 - camera.position.y) * 0.025;
        }

        renderer.render(scene, camera);

        if (!reducedMotion) {
            requestAnimationFrame(animate);
        }
    }

    animate();

    // Responsive resizing

    window.addEventListener('resize', () => {

        camera.aspect =
            window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 1.5)
        );
    });
}
