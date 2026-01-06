import { useRef, useEffect } from "react";
import * as THREE from "three";
import "./LightPillar.css";

/* ======================================================
   MOBILE DETECTION (SAFE)
====================================================== */
const isMobileDevice = () => {
  const hasTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

  const smallScreen = window.innerWidth < 768;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  return hasTouch && (smallScreen || coarsePointer);
};

const LightPillar = ({
                       topColor = "#5227FF",
                       bottomColor = "#FF9FFC",
                       intensity = 1.0,
                       rotationSpeed = 0.3,
                       interactive = false,
                       className = "",
                       glowAmount = 0.005,
                       pillarWidth = 3.0,
                       pillarHeight = 0.4,
                       noiseIntensity = 0.5,
                       mixBlendMode = "screen",
                       pillarRotation = 0,
                     }) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const geometryRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const timeRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const mobile = isMobileDevice();

    let renderer, scene, camera, material, geometry;

    try {
      /* ================= SCENE ================= */
      scene = new THREE.Scene();
      sceneRef.current = scene;

      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      cameraRef.current = camera;

      renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        precision: "lowp",
        stencil: false,
        depth: false,
      });

      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(
          mobile ? 1 : Math.min(window.devicePixelRatio, 2)
      );

      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      /* ================= SHADER ================= */
      const parseColor = (hex) => {
        const c = new THREE.Color(hex);
        return new THREE.Vector3(c.r, c.g, c.b);
      };

      material = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec2 uMouse;
          uniform vec3 uTopColor;
          uniform vec3 uBottomColor;
          uniform float uIntensity;
          uniform bool uInteractive;
          uniform float uGlowAmount;
          uniform float uPillarWidth;
          uniform float uPillarHeight;
          uniform float uNoiseIntensity;
          uniform float uPillarRotation;
          varying vec2 vUv;

          const float PI = 3.141592653589793;
          const float EPSILON = 0.001;
          const float E = 2.71828182845904523536;
          const float HALF = 0.5;

          mat2 rot(float a) {
            float s = sin(a);
            float c = cos(a);
            return mat2(c, -s, s, c);
          }

          float noise(vec2 p) {
            float G = E;
            vec2 r = (G * sin(G * p));
            return fract(r.x * r.y * (1.0 + p.x));
          }

          vec3 applyWave(vec3 p, float t) {
            float f = 1.0;
            float a = 1.0;
            for (float i = 0.0; i < 4.0; i++) {
              p.xz *= rot(0.4);
              vec3 o = cos(p.zxy * f - t * i * 2.0);
              p += o * a;
              f *= 2.0;
              a *= HALF;
            }
            return p;
          }

          float smin(float a, float b, float k) {
            float h = max(k - abs(a - b), 0.0);
            return min(a, b) - h * h * 0.25 / k;
          }

          void main() {
            vec2 frag = vUv * uResolution;
            vec2 uv = (frag * 2.0 - uResolution) / uResolution.y;

            uv *= rot(uPillarRotation * PI / 180.0);

            vec3 ro = vec3(0.0, 0.0, -10.0);
            vec3 rd = normalize(vec3(uv, 1.0));

            float d = 0.1;
            vec3 col = vec3(0.0);

            for (float i = 0.0; i < 100.0; i++) {
              vec3 p = ro + rd * d;
              vec3 q = p;
              q.y *= uPillarHeight;
              q = applyWave(q + vec3(0.0, uTime, 0.0), uTime);

              float f = length(cos(q.xz)) - 0.2;
              float r = length(p.xz) - uPillarWidth;
              f = abs(smin(r, f, 1.0)) * 0.15 + 0.01;

              vec3 g = mix(uBottomColor, uTopColor, smoothstep(15.0, -15.0, p.x));
              col += g * pow(1.0 / f, 1.0);

              if (f < EPSILON || d > 50.0) break;
              d += f;
            }

            col = tanh(col * uGlowAmount / (uPillarWidth / 3.0));
            col -= noise(gl_FragCoord.xy) / 15.0 * uNoiseIntensity;

            gl_FragColor = vec4(col * uIntensity, 1.0);
          }
        `,
        uniforms: {
          uTime: { value: 0 },
          uResolution: {
            value: new THREE.Vector2(
                container.clientWidth,
                container.clientHeight
            ),
          },
          uMouse: { value: mouseRef.current },
          uTopColor: { value: parseColor(topColor) },
          uBottomColor: { value: parseColor(bottomColor) },
          uIntensity: { value: intensity },
          uInteractive: { value: interactive },
          uGlowAmount: { value: glowAmount },
          uPillarWidth: { value: pillarWidth },
          uPillarHeight: { value: pillarHeight },
          uNoiseIntensity: { value: noiseIntensity },
          uPillarRotation: { value: pillarRotation },
        },
        transparent: true,
        depthWrite: false,
        depthTest: false,
      });

      materialRef.current = material;

      geometry = new THREE.PlaneGeometry(2, 2);
      geometryRef.current = geometry;

      scene.add(new THREE.Mesh(geometry, material));

      /* ================= RENDER ================= */

      const renderOnce = () => {
        renderer.render(scene, camera);
      };

      const animate = () => {
        timeRef.current += 0.016 * rotationSpeed;
        material.uniforms.uTime.value = timeRef.current;
        renderer.render(scene, camera);
        rafRef.current = requestAnimationFrame(animate);
      };

      // 📱 MOBILE → static
      if (mobile) {
        renderOnce();
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    } catch (err) {
      console.warn("LightPillar disabled:", err);
    }

    /* ================= CLEANUP ================= */
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      material?.dispose();
      geometry?.dispose();
    };
  }, [
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    interactive,
    glowAmount,
    pillarWidth,
    pillarHeight,
    noiseIntensity,
    pillarRotation,
  ]);

  return (
      <div
          ref={containerRef}
          className={`light-pillar-container ${className}`}
          style={{ mixBlendMode }}
      />
  );
};

export default LightPillar;
