export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === "baobao.thomasacevedo543.workers.dev") {
      const qrUrl = new URL("/qr", request.url);
      return env.ASSETS.fetch(new Request(qrUrl, request));
    }

    return env.ASSETS.fetch(request);
  },
};
