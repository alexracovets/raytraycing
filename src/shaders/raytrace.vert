varying vec4 vNDC;

void main() {
    vNDC = vec4(uv * 2. - 1., 0., 1.);
    gl_Position = vNDC;
}