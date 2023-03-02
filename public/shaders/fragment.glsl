#version 300 es
precision highp float;
uniform vec2 u_location;
out vec4 outColor;
uniform vec2 locations[40];

void main() {
    //vec2 locations[2] = vec2[2](vec2(150.0, 150.0), vec2(800.0, 800.0)); // for debugging
    float red = 0.0;
    float green = 0.0;
    float blue = 0.0;
    float color;
    float uv;
    vec3 rgb = vec3(red, green, blue);

    for(int i = 0; i < locations.length(); i++) {
        uv = ((gl_FragCoord.x - locations[i].x) * (gl_FragCoord.x - locations[i].x)) + ((gl_FragCoord.y - locations[i].y) * (gl_FragCoord.y - locations[i].y));
        color = 1000.0 / uv;
        rgb = vec3(red += color, green += color * 1.5, blue += color * 2.0);
    }

    outColor = vec4(rgb, 1.0);
}