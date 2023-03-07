#version 300 es
precision highp float;
//uniform vec2 u_location;
out vec4 outColor;
uniform vec2 locations[40];
uniform float radius[40];
uniform vec3 colors[40];

void main() {
    //vec3 colors[2] = vec3[2](vec3(1.1, .5, 1.9), vec3(.4, 1.9, 1.5)); // for debugging
    //vec2 locations[2] = vec2[2](vec2(150.0, 150.0), vec2(800.0, 800.0)); // for debugging
    //float radius[2] = float[2](float(12500.0), float(1800.0)); // for debugging
    float red = 0.0;
    float green = 0.0;
    float blue = 0.0;
    float color;
    float uv;
    vec3 rgb = vec3(red, green, blue);
    //vec3 colorMultiplier = vec3(1.1, 0.6, 1.8);
    vec3 final;

    for(int i = 0; i < locations.length(); i++) {
        uv = ((gl_FragCoord.x - locations[i].x) * (gl_FragCoord.x - locations[i].x)) + ((gl_FragCoord.y - locations[i].y) * (gl_FragCoord.y - locations[i].y));
        //color = 500.0 / uv; // for debugging
        color = /*500.0*/radius[i] / uv; // for debugging
        //rgb = vec3(red += color, green += color * 1.5, blue += color * 2.0);
        rgb += vec3(red += color, green += color, blue += color) * colors[i];
    }

    outColor = vec4(rgb, 1.0);
}