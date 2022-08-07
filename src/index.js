import * as THREE from 'three';

document.addEventListener('DOMContentLoaded', () => {
 const scene = new THREE.Scene();

 const geometry = new THREE.BoxGeometry(1, 1, 1);
 const material = new THREE.MeshBasicMaterial({ color: '#0000FF' });
 const cube = new THREE.Mesh(geometry, material);
 cube.position.set(0, 0, -2);
 cube.rotation.set(0, Math.PI / 4, 0);
 scene.add(cube);

 const camera = new THREE.PerspectiveCamera();
 camera.position.set(1, 1, 5);

 const renderer = new THREE.WebGLRenderer({ alpha: true });
 renderer.setSize(500, 500);
 renderer.render(scene, camera);

 const video = document.createElement('video');
 navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
  video.play();
 });

 video.style.position = 'absolute';
 video.style.width = renderer.domElement.width;
 video.style.height = renderer.domElement.height;
 renderer.domElement.style.position = 'absolute';

 document.body.appendChild(video);
 document.body.appendChild(renderer.domElement);
});

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
 const start = async () => {
  // initialize MindAR
  const mindarThree = new window.MINDAR.IMAGE.MindARThree({
   container: document.body,
   imageTargetSrc: './assets/targets/course-banner.mind',
  });
  const { renderer, scene, camera } = mindarThree;

  // create AR object
  const geometry = new THREE.PlaneGeometry(1, 1);
  const material = new THREE.MeshBasicMaterial({
   color: 0x00ffff,
   transparent: true,
   opacity: 0.5,
  });
  const plane = new THREE.Mesh(geometry, material);

  // create anchor
  const anchor = mindarThree.addAnchor(0);
  anchor.group.add(plane);

  // start AR
  await mindarThree.start();
  renderer.setAnimationLoop(() => {
   renderer.render(scene, camera);
  });
 };
 start();
});
