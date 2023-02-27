#version 300 es
precision highp float;
uniform vec2 u_location;
out vec4 outColor;

void main() {

    float red = 0.0;
    float green = 0.0;
    float blue = 0.0;
    float color;
    vec3 rgb = vec3(red, green, blue);

    float uv = ((gl_FragCoord.x - u_location.x) * (gl_FragCoord.x - u_location.x)) + ((gl_FragCoord.y - u_location.y) * (gl_FragCoord.y - u_location.y));
    color = 10000.0 / uv;
    rgb = vec3(red += color, green += color * 1.5, blue += color * 2.0);

    outColor = vec4(rgb, 1.0);
}