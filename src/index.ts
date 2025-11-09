export default {
  async fetch(request, env) {
    const inputs = {
      prompt: "Anthropomorphic sloth that looks clever and slightly sarcastic, tech-savvy engineer style, surrounded by code, data graphs, and screens, futuristic workspace, coffee cup nearby, cinematic lighting, hyper-realistic digital painting",
    };

    const response = await env.AI.run(
      "@cf/stabilityai/stable-diffusion-xl-base-1.0",
      inputs,
    );

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  },
} satisfies ExportedHandler<Env>;
