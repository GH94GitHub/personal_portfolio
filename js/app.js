//Variables for setup

let container;
let camera;
let renderer;
let scene;
let logo;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 1000;

  //Camera setup
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 3.25, 9);

  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(50, 50, 100);
  scene.add(light);
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  //Load Model
  let loader = new THREE.GLTFLoader();
  loader.load("media/GitHub-Logo.glb", function(glb) {
    scene.add(glb.scene);
    logo = glb.scene.children[2];
    logo.rotation.x = -1.83;
    logo.rotation.y = -.01;

    animate();
  }, function(error) {
    console.log(error);
  });
}

var rotationNum = .003;
function animate() {
  requestAnimationFrame(animate);
  logo.rotation.z += rotationNum;
  if (logo.rotation.z > 3.8) rotationNum = -.003;
  if (logo.rotation.z < 2.6) rotationNum = .003;
  renderer.render(scene, camera);
}

init();